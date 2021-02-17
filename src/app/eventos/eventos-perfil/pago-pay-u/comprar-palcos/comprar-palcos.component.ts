import { CarritoDeComprasComponent } from './../carrito-de-compras/carrito-de-compras.component';
import { LoginComponent } from './../../../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { EtapasDataService } from './../../../../service/data/etapas-data.service';
import { Localidad } from './../../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Evento } from './../../../evento.model';
import { EventoDataService } from './../../../../service/data/evento-data.service';
import { Palco } from './../../../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Cliente } from './../../../../usuario/cliente.model';
import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { HardcodedAutheticationService } from './../../../../service/hardcoded-authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosDataService } from './../../../../service/data/usuarios-data.service';
import { Component, OnInit } from '@angular/core';
import { updateFor } from 'typescript';
import { Etapa } from '../../etapa.model';
import { IVA } from 'src/app/app.constants';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-comprar-palcos',
  templateUrl: './comprar-palcos.component.html',
  styleUrls: ['./comprar-palcos.component.css']
})
export class ComprarPalcosComponent implements OnInit {

  miId;
  valorTotal:number
  usuarioA:string
  usuarioEntidad: Cliente
  evento:Evento;
  IVA
  
  usuarioBoolean:boolean
  merchantId:number
  accountId:number
  referenceCode:string
  signature:string
  ApiKey:string
  valorLocalidadAgregada:number
  etapa:Etapa
  boletaBoolean:boolean
  contadorPalcos
  palco:Palco
  localidad:Localidad
  valorBoletas
  url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  cargando=false
  idLocalidad
  localidadCargada:Localidad
  constructor(private route: ActivatedRoute, private dialog: MatDialog,private service:EventoDataService, private palcoServicio:PalcosDataService,private etapaServicio:EtapasDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService) { }

  ngOnInit(): void {
    this.valorBoletas=0
    this.contadorPalcos=0
    this.valorTotal=0
    this.usuarioBoolean=true;
 
    this.valorLocalidadAgregada=0

    this.boletaBoolean=false
    this.referenceCode= "PALCO: "
    this.IVA =IVA
    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"


    this.localidadCargada ={
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[]
    }
    this.palco={
      id:null,
      nombre:null,
      nombreEvento:null,
      personasAdentro:null,
      personasMaximas:null,
      precio:null,
      precioParcialPagado:null,
      reservado:null,
      servicio:null,
      vendido:null,
      numeroDentroDeEvento:null,
      fechaVendido : null
    }

    this.usuarioEntidad= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        direccion:"",
        publicidad:null,
      boletas:[],
      palcos:[]
      
  
        }
        this.evento ={
          id: "",
          nombre:"",
          fecha:null,
          descripcion:"",
          lugar:"",
          video:"",
          terminosYCondiciones:"",
          recomendaciones:"",
          ciudadIdTexto:null,
          organizadorid:null,
          imagen:null,
          imagenes:[],
          artistas:"",
          fechaFin:null,
          mapa:null,
          localidades:[],
          
          horaInicio:null,
          horaFin:null,
          etapas:[],
          mapaImagen:null,
          visible:false
        }
        
        this.route.paramMap.subscribe( params =>{
          this.miId =params.get('id');
          this.idLocalidad =params.get('idLocalidad');
         
          this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
            this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(response =>{this.manejar(response);
            var i =0;
            while(i < this.etapa.localidades.length){
            if(this.etapa.localidades[i].id==this.idLocalidad){
                this.localidadCargada = this.etapa.localidades[i];
                i= this.etapa.localidades.length;
              }
              i=i+1;
          
            }

          
          
          })

            if(this.autenticador.getUsuario()!=null ){
            
              this.usuarioA= this.autenticador.getUsuario(); 
             this.referenceCode = this.referenceCode + this.usuarioA+': ';
              
              
              this.dataServicio.getCliente(this.usuarioA).subscribe(response => {this.usuarioEntidad=response
                this.usuarioBoolean=false;
                var j =0;
                
                while( j < this.usuarioEntidad.palcos.length){
                  if(this.usuarioEntidad.palcos[j].nombreEvento == this.evento.nombre){
                  this.contadorPalcos = this.contadorPalcos+1;
                  
                }
                j= j+1
                }
                
              })
    
            }
    
    
          
          });
          
      })
    }
      
      
      
    openDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '600px',
        height:'600px',
        
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit()
        
      });
    }

  handleGetSuccesfull(response){
    if(response.visible){
      this.evento=response;
    }
  }

  agregarALaLista(localidad:Localidad){

    if(!this.usuarioBoolean){
   this.localidad =localidad;
   this.valorLocalidadAgregada = localidad.precio +localidad.servicio+ localidad.servicio*IVA;
   this.valorBoletas = 1;}
   else{
     this.openDialog()
   }
  }


  agregarAlCarrito(){

   if(!this.usuarioBoolean){ 
    if(this.contadorPalcos <2 && !this.cargando){
      this.cargando=true
  if(this.palco.nombre != this.localidad.nombre){
    this.referenceCode ="PALCO: " +this.usuarioEntidad.usuario+"/"
    if(this.localidad==null){
      alert("Agregar un Palco para continuar")
    }
    else{
      this.palcoServicio.reservarPalco(this.localidad.id).subscribe(response=>{ this.palco =response;
        this.referenceCode = this.referenceCode +this.palco.nombre+":"+this.palco.id+"/";
        this.cargando =false
        
          this.valorTotal=this.palco.precio  +this.palco.servicio +this.palco.servicio*IVA  
          var md5 = new Md5()


          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
          this.localidad= null;
          this.valorLocalidadAgregada =0;
          this.valorBoletas = 0;
          this.AbrirCarrito()
          this.palcoServicio.rechazarReservaPalco(this.palco.id).subscribe(response=>response)
          
      })
    }
  }    
  else{
    alert("Ya tienes este Palco agregado")
  }
}
else{
  alert("Solo puedes comprar 2 Palcos máximo por Evento")
}
}
else{
  this.openDialog()
}
}



AbrirCarrito(): void {
  const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
    width: '100%',
    height:'85%',
    
    data: { 
      valorTotal: this.valorTotal,
            palco: this.palco,
            evento: this.evento,
            usuarioEntidad: this.usuarioEntidad,
            signature: this.signature,
            referenceCode: this.referenceCode,
           
    }       
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
  
    
    this.dialog.closeAll();
    this.palcoServicio.rechazarReservaPalcoInmediatamente(this.palco.id).subscribe(response=>
     {
       response
       this.ngOnInit()
     }
      )
  



   
  });
}

manejar(response){
  this.etapa =response;
}

darCantidadDePalcos(localidad:Localidad){
  var contador =0;
  for(var i =0; i < localidad.palcos.length; i=i+1){
    if(localidad.palcos[i].vendido==false &&localidad.palcos[i].reservado==false){

      contador = contador+1;
    }
  }
  return contador;
}
  


}
