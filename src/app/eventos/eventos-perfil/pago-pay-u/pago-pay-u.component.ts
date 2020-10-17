import { EtapasDataService } from './../../../service/data/etapas-data.service';


import { Cliente } from './../../../usuario/cliente.model';
import { UsuariosDataService } from './../../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../../service/hardcoded-authetication.service';
import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Boleta } from './../../boleta.model';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../evento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5'
import { Etapa } from '../etapa.model';
import { IVA } from 'src/app/app.constants';


@Component({
  selector: 'app-pago-pay-u',
  templateUrl: './pago-pay-u.component.html',
  styleUrls: ['./pago-pay-u.component.css']
})
export class PagoPayUComponent implements OnInit {
miId;
IVA
valorTotal:number=0
usuarioA:string
usuarioEntidad: Cliente
evento:Evento;
boletas:Boleta[]=[]
localidadesCompradas:Localidad[]=[]
usuarioBoolean:boolean=true;
merchantId:number
accountId:number
referenceCode:string="TICKET: /"
signature:string
ApiKey:string
valorLocalidadAgregada:number =0
contadorBoletas =0
etapa:Etapa
boletaBoolean:boolean=false
localidadesPalcos:Localidad[]=[]
localidadesBoletas:Localidad[]=[];
cargando:boolean=false
url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  constructor(private route: ActivatedRoute, private service:EventoDataService, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService ) { }

  ngOnInit(): void {
    this.referenceCode= this.referenceCode 
    this.IVA = IVA
    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"// 4Vj8eK4rloUd272L48hsrarnUA
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
      etapas:[], 
      mapaImagen:null
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
        this.etapa={
          evento:null,
          id:null,
          localidades:[],
          nombre:"PRUEBA",
          visible:null    
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
            while(j < this.usuarioEntidad.boletas.length){
              if(this.usuarioEntidad.boletas[j].nombreEvento== this.evento.nombre){
                this.contadorBoletas = this.contadorBoletas+1;
              }
             j= j+1; 
            }  
          })

        }


      
      });
      this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
        var i =0;
        while(i < this.etapa.localidades.length){
          if(this.etapa.localidades[i].boletas.length>0){
            this.localidadesBoletas.push(this.etapa.localidades[i])
          }
          else if(this.etapa.localidades[i].palcos.length>0){
            this.localidadesPalcos.push(this.etapa.localidades[i])
          }
          
          i=i+1;
        }
      
      
      })
  })
  }



  handleGetSuccesfull(response){
    this.evento=response;
  }

  agregarAlCarrito(pBoleta){
    this.boletas.push(pBoleta);
    

  }

  numeroBoletasPorVenderYNoReservadas(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)

    {
      if( localidad.boletas[i].reservado==false && localidad.boletas[i].vendida==false){
        contador = contador+1;
      }
    }
   
    return contador;
 
  }

  manejar(response){
    this.etapa =response;
  }
  reservarBoletasSillasExactas(localidad:Localidad){


    var lista:Boleta[]=[];

    if(this.boletas.length<6 && !this.usuarioBoolean)
    {
    this.servicioBoletas.getBoletasVendidasYReservado(this.evento.id, localidad.id, false, false).subscribe(response=>{
      lista= response
      if(lista.length>0){ 
        this.boletas.push(lista[0])
      
        this.referenceCode = this.referenceCode +lista[0].localidadNombre+":"+lista[0].id+"/";
      
        this.servicioBoletas.reservarBoletaIndividual(this.evento.id, localidad.id, lista[0]).subscribe(data=>  {data;
          this.valorTotal=this.valorTotal+ localidad.precio  + localidad.servicio + localidad.servicio*IVA
          var md5 = new Md5()


          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
        
      
      })}
      else {
        alert("No quedan boletas en esta localidad, prueba más tarde")
      }
      
    })
  }
  
  else if(this.usuarioBoolean){
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }

  else if(this.boletas.length==6 ){
    alert("Solo puedes comprar 6 boletas máximo por Evento")
  }
  }



  reservarBoletasPorLocalidad(localidad:Localidad){


    var lista:Boleta[]=[];

    if(this.localidadesCompradas.length<6 && !this.usuarioBoolean && !this.cargando)
    {
      this.localidadesCompradas.push(localidad);
      this.valorLocalidadAgregada = this.valorLocalidadAgregada +  localidad.precio  +localidad.servicio + localidad.servicio*IVA;

   }
  
  else if(this.usuarioBoolean){
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }

  else if(this.localidadesCompradas.length==6 ){
    alert("Solo puedes comprar 6 boletas máximo por Evento")
  }
  else if(this.cargando){
    alert("Estamos un poco atareados el día de hoy, estamos cargando");
  }
  }



  reservarBoletasLocalidad(){


    
  var boleta:Boleta;
  if(this.localidadesCompradas.length + this.boletas.length + this.contadorBoletas<7 && !this.usuarioBoolean)
    {
      this.cargando=true
      for(var i =0; i < this.localidadesCompradas.length; i=i+1){

        var localidad = this.localidadesCompradas[i]
        this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, localidad.id).subscribe(response=>{
          boleta= response
          if(boleta!=null){ 
            this.boletas.push(boleta)
            this.cargando= false
           
        
        this.referenceCode = this.referenceCode +boleta.localidadNombre+":"+boleta.id+"/" ;
      
        
          this.valorTotal=this.valorTotal+ localidad.precio  +localidad.servicio +localidad.servicio*IVA  
          var md5 = new Md5()


          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
            
        
      }

          else {
            alert("No quedan boletas en esta localidad, prueba más tarde")
          }
          
        })
      }
      this.localidadesCompradas =[];
      this.valorLocalidadAgregada =0;
  }
  else if(this.localidadesCompradas.length + this.boletas.length +this.contadorBoletas>=6){
    alert("Solo puedes comprar 6 boletas máximo por Evento")
  }
  
  else if(this.usuarioBoolean){
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }

  else if(this.boletas.length ==6 ){
    alert("Solo puedes comprar 6 boletas máximo por Evento")
  }
}

quitaBoletaLocalidad(localidad:Localidad){
  if(this.localidadesCompradas.length >0){
    var terminado =false;
    for(var i =0 ; i <this.localidadesCompradas.length && !terminado;i=i+1){
      if(this.localidadesCompradas [i].id==localidad.id){
        this.localidadesCompradas.splice(i,1)
        this.valorLocalidadAgregada = this.valorLocalidadAgregada - (localidad.precio  +localidad.servicio +localidad.servicio*0.19) ;
        terminado = true;
      }
    }

  }
  else{
    alert("No tienes Tickets seleccionados")
  }
}

boletasLocalidadCantidadSeleccionada(localidad:Localidad){
  var cantidad =0;
  for(var i =0; i < this.localidadesCompradas.length; i=i+1){
    if(this.localidadesCompradas[i].id ==localidad.id){
      
      cantidad = cantidad +1;
    }
  }
  return cantidad;
}


comprarBoletas(){


  if( !this.usuarioBoolean && this.boletas.length>0){
   
    var i =0

    while(i < this.boletas.length){


  this.servicioBoletas.comprarBoleta(this.miId, this.boletas[i].localidadIdNumero ,this.boletas[i],this.usuarioEntidad.numeroDocumento).subscribe(data=> {data })
    i=i+1;

   
  }
  this.boletas=[]
  }
  else if(this.usuarioBoolean){
    
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
    
  }
}
 


darCantidadDePalcos(localidad:Localidad){
  var contador =0;
  for(var i =0; i < localidad.palcos.length; i=i+1){
    if(localidad.palcos[i].vendido==false && localidad.palcos[i].reservado==false){

      contador = contador+1;
    }
  }
  return contador;
}






}
