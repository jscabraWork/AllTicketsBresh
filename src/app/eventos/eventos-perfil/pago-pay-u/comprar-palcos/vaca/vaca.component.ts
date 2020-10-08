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

@Component({
  selector: 'app-vaca',
  templateUrl: './vaca.component.html',
  styleUrls: ['./vaca.component.css']
})
export class VacaComponent implements OnInit {

  
  miId;
  valorTotal:number=0
  usuarioA:string
  usuarioEntidad: Cliente
  evento:Evento;
  IVA
  porcentaje:number
  usuarioBoolean:boolean=true;
  merchantId:number
  accountId:number
  referenceCode:string="PALCO: "
  signature:string
  ApiKey:string
  valorLocalidadAgregada:number =0
  etapa:Etapa
  boletaBoolean:boolean=false
  localidadesPalcos:Localidad[]=[]
  contadorPalcos=0
  palco:Palco
  localidad:Localidad
  valorBoletas=0
  url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  constructor(private route: ActivatedRoute, private service:EventoDataService, private palcoServicio:PalcosDataService,private etapaServicio:EtapasDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService) { }

  ngOnInit(): void {
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
      vendido:null
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
          imagen:"",
          imagenes:[],
          artistas:"",
          fechaFin:null,
          mapa:null,
          localidades:[],
          
          horaInicio:null,
          horaFin:null,
          etapas:[]
        }

        this.route.paramMap.subscribe( params =>{
          this.miId =params.get('id');
         
          this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
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
          this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
            var i =0;
            while(i < this.etapa.localidades.length){
            if(this.etapa.localidades[i].palcos.length>0){
                this.localidadesPalcos.push(this.etapa.localidades[i])
              }
              
              i=i+1;
            }

          
          
          })
      })
  }


  manejar(response){
    this.etapa =response;
  }

  
  handleGetSuccesfull(response){
    this.evento =response;
  }


  

  agregarALaLista(localidad:Localidad){

    this.localidad =localidad;
    this.valorLocalidadAgregada = (localidad.precio +localidad.servicio+ localidad.servicio*IVA)*(this.porcentaje/100);
    this.valorBoletas = 1;
   }
 
 
   agregarAlCarrito(){
 
     if(this.contadorPalcos <2){
   if(this.palco.nombre != this.localidad.nombre){
     this.referenceCode ="PALCO: "
     if(this.localidad==null){
       alert("Agregar un Palco para continuar")
     }
     else{
       this.palcoServicio.reservarPalco(this.localidad.id).subscribe(response=>{ this.palco =response;
         this.referenceCode = this.referenceCode +this.palco.nombre+":"+this.palco.id+"/";
       
         
           this.valorTotal=this.valorLocalidadAgregada
           var md5 = new Md5()
 
 
           this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
           this.localidad= null;
           this.valorLocalidadAgregada =0;
           this.valorBoletas = 0;
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

 
 pagar(){
   if(!this.usuarioBoolean){
     if(this.palco.id!=null){
       this.palcoServicio.comprarPalco(this.palco.id,this.usuarioEntidad.numeroDocumento,this.valorTotal).subscribe(response=>{response
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
          vendido:null
        }
        this.valorTotal=0

      })
     }
     else{
       alert("Agrega algún Palco al Carrito")
     }
 
   }
   else{
     alert("Entra a tu cuenta AllTickets")
     this.router.navigate(['/login'])
   }
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