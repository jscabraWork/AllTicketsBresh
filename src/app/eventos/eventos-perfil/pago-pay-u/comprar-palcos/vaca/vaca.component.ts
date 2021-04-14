import { CarritoDeComprasComponent } from './../../carrito-de-compras/carrito-de-compras.component';
import { MatDialog } from '@angular/material/dialog';
import { IVA } from './../../../../../app.constants';
import { Md5 } from 'ts-md5/dist/md5';
import { EventoDataService } from './../../../../../service/data/evento-data.service';
import { PalcosDataService } from './../../../../../service/data/palcos-data.service';
import { EtapasDataService } from './../../../../../service/data/etapas-data.service';
import { HardcodedAutheticationService } from './../../../../../service/hardcoded-authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosDataService } from './../../../../../service/data/usuarios-data.service';
import { Palco } from './../../../../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Localidad } from './../../../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Evento } from './../../../../evento.model';
import { Cliente } from './../../../../../usuario/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Etapa } from '../../../etapa.model';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-vaca',
  templateUrl: './vaca.component.html',
  styleUrls: ['./vaca.component.css']
})
export class VacaComponent implements OnInit {

  lista1:number[]=[] 
  lista2:number[]=[] 
  lista3:number[]=[] 
  lista4:number[]=[]
  lista5:number[]=[] 
  lista6:number[]=[] 
  lista7:number[]=[] 
  lista8:number[]=[]  

  lista9:number[]=[] 
  lista10:number[]=[]  

  lista11:number[]=[] 
  lista12:number[]=[] 

  lista13:number[]=[] 
  lista14:number[]=[] 

  lista15:number[]=[] 
  lista16:number[]=[] 
  lista17:number []=[]
  lista18:number []=[]
  lista19:number []=[]
  
  miId;
  valorTotal:number
  usuarioA:string
  usuarioEntidad: Cliente
  evento:Evento;
  IVA
  porcentaje:number
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
  constructor(private route: ActivatedRoute, private service:EventoDataService, private dialog: MatDialog,private palcoServicio:PalcosDataService,private etapaServicio:EtapasDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService) { }

  ngOnInit(): void {

    for(let i = 1; i< 13; i+=1){
      this.lista1[i-1]=i;
      this.lista2[i-1]=i+12
     
    }
    for(let i =1; i< 15; i+=1){
      this.lista3[i-1]=i+24
      this.lista4[i-1]=i+38
      this.lista5[i-1]=i+52
      this.lista6[i-1]=i+66
    }
    for(let i =1; i< 8; i+=1){
      this.lista7[i-1]=i+80
      this.lista8[i-1]=i+87
    
    }
    for(let i =1; i< 7; i+=1){
      this.lista9[i-1]=i+94
      this.lista10[i-1]=i+100
      this.lista11[i-1]=i+106
      this.lista12[i-1]=i+112
    
    }

    for(let i =1; i< 10; i+=1){
      this.lista13[i-1]=i+118
      this.lista14[i-1]=i+127
      this.lista15[i-1]=i+136
      this.lista16[i-1]=i+145

    }

    for(let i =1; i< 17; i+=1){
      this.lista17[i-1]=i+154


    }
    for(let i =1; i< 15; i+=1){
      this.lista18[i-1]=i+170
    }

    for(let i =1; i< 3; i+=1){
      this.lista19[i-1]=i+184
    }


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
    this.localidad={
    boletas:[],
    boletasPatrocinio:[],
    id:null,
    nombre:null,
    nombreEtapa:null,
    palcos:[],
    precio:0,
    servicio:0,
    servicioPorcentaje:null
    }

    this.localidadCargada ={
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[],
      servicioPorcentaje:null
    }
    this.palco={
      id:null,
      nombre:null,
      nombreEvento:null,
      personasAdentro:null,
      personasMaximas:null,
      precio:0,
      precioParcialPagado:null,
      reservado:null,
      servicio:0,
      vendido:null,
      numeroDentroDeEvento:null,
      fechaVendido : null, 
      servicioIva:null,
      proceso:null
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
          visible:false,
          soldout:false,
          mensaje:null,
          imagenFinal:null,
          fechaApertura:null
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


  manejar(response){
    this.etapa =response;
  }

  
  handleGetSuccesfull(response){
    if(response.visible){
      this.evento=response;
    }
  }


  

  agregarALaLista(localidad:Localidad){
    if(this.usuarioEntidad.numeroDocumento!=null)
  {
    this.localidad =localidad;
    this.valorLocalidadAgregada = (localidad.precio +localidad.servicio+ localidad.servicio*IVA)*(this.porcentaje/100);
    this.valorBoletas = 1;
  }
  else{
    alert("Para hacer una vaca debes conectarte en tu cuenta AllTickets")
    this.openDialog();
  }
   }
 
 
   agregarAlCarrito(){
 
     if(this.contadorPalcos <2 && !this.cargando){
       this.cargando=true
   if(this.palco.nombre != this.localidad.nombre){
     this.referenceCode ="PALCO: "+this.usuarioEntidad.usuario+"/"
     if(this.localidad==null){
       alert("Agregar un Palco para continuar")
     }
     else{
       this.palcoServicio.reservarPalco(this.localidad.id).subscribe(response=>{ this.palco =response;
         this.referenceCode = this.referenceCode +this.palco.nombre+":"+this.palco.id+"/";
          this.cargando =false
         
           this.valorTotal=this.valorLocalidadAgregada
           var md5 = new Md5()
 
 
           this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
           this.localidad= null;
           this.valorLocalidadAgregada =0;
           this.valorBoletas = 0;
           this.AbrirCarrito();
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
 cambiarTotal(){
  this.valorLocalidadAgregada = (this.porcentaje/100)*(this.localidad.precio+this.localidad.servicio+this.localidad.servicio*0.19);
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
      {response
        this.ngOnInit()
      })
   


   
  });
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


cambiarTotalIndividual(){
  this.valorLocalidadAgregada = (this.porcentaje/100)*(this.palco.precio+this.palco.servicio+this.palco.servicio*0.19);
 }


getPalcoIndividualParaMapa(numero){
  this.palcoServicio.getPalcoParaCompraIndividual(this.evento.nombre, numero).subscribe(response=>{
    this.palco =response
    if(this.palco.vendido==false && this.palco.reservado==false){
      this.valorLocalidadAgregada = (this.palco.precio +this.palco.servicio+ this.palco.servicio*IVA)*(this.porcentaje/100);
   this.valorBoletas = 1;}
   else{
     alert("Este palco ya ha sido comprado, intenta más tarde ")
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
      fechaVendido : null,
      servicioIva:null,
      proceso:null
    }
   }

  })
}


agregarPalcoIndividual(){
  if(!this.usuarioBoolean){ 
    if(this.palco.id!=null){

if(this.porcentaje!=null){
    if(this.contadorPalcos <2 && !this.cargando){
      this.cargando=true
  
      this.referenceCode ="PALCOVACA: " +this.usuarioEntidad.numeroDocumento+","
    if(this.palco==null){
      alert("Agregar un Palco para continuar")
    }
    else{
      
      this.referenceCode = this.referenceCode +this.palco.id+","+ new Date();
        this.cargando =false
        
        this.valorTotal=this.valorLocalidadAgregada
        
          var md5 = new Md5()


          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
          this.localidad= null;
          this.valorLocalidadAgregada =0;
          this.valorBoletas = 0;
          this.AbrirCarrito()
          this.palcoServicio.rechazarReservaPalco(this.palco.id).subscribe(response=>response)
          
      
    }

}
else{
  alert("Solo puedes comprar 2 Palcos máximo por Evento")
}


}
else{
  alert("Selecciona un porcentaje con el cual desesas reservar")
}

  }



  else{
    alert("Selecciona un palco")
  }
}
else{
  this.openDialog()
}
}
}
