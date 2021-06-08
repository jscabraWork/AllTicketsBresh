import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { IVA } from 'src/app/app.constants';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { EtapasDataService } from 'src/app/service/data/etapas-data.service';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PuntosFisicosDataService } from 'src/app/service/data/puntos-fisicos-data.service';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { CarritoDeComprasPuntosFisicosComponent } from '../carrito-de-compras-puntos-fisicos/carrito-de-compras-puntos-fisicos.component';
import { PuntoFisico } from '../puntoFisico.model';

@Component({
  selector: 'app-evento-tickets-putos-fisicos',
  templateUrl: './evento-tickets-putos-fisicos.component.html',
  styleUrls: ['./evento-tickets-putos-fisicos.component.css']
})
export class EventoTicketsPutosFisicosComponent implements OnInit {

  miId;
  IVA
  valorTotal:number
  evento:Evento;
  boletas:Boleta[]=[]
  localidadesCompradas:Localidad[]=[]
  valorLocalidadAgregada:number
  usuario:Cliente
  usernameCliente:string
  etapa:Etapa
  boletaBoolean:boolean
  puntoFisico:PuntoFisico
  asistente:Asistente
  boletaN:number
  localidad:Localidad
  idLocalidad
  url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  user
  constructor(private route: ActivatedRoute,public dialog: MatDialog, private service:EventoDataService, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private autenticador: HardcodedAutheticationService, private router: Router, private servicio: PuntosFisicosDataService) { }

  ngOnInit(): void {

    
    this.valorTotal=0
    this.valorLocalidadAgregada=0
    this.boletaN=0
    this.boletaBoolean=false
    this.IVA = IVA


    this.asistente={
      boletas:[],
      celular:null,
      correo:null,
      nombre:null,
      numeroDocumento:null
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
      fechaApertura:null,
      urlMapa:null,
      adicionales:[]
    }
    this.localidad ={
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[],
      servicioPorcentaje:null,
      efectivo:false
    }

        this.etapa={
          evento:null,
          id:null,
          localidades:[],
          nombre:"PRUEBA",
          visible:null    
        }

        this.user=this.autenticador.getPuntoFisico();
        this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;})


        this.route.paramMap.subscribe( params =>{
          this.miId =params.get('id');
          this.idLocalidad =params.get('idLocalidad');
          this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response)
            this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(response =>{this.manejar(response);
              var i =0;
              while(i < this.etapa.localidades.length){
                if(this.etapa.localidades[i].id ==this.idLocalidad){
                  this.localidad=this.etapa.localidades[i]
                  i= this.etapa.localidades.length;
                }  
                i=i+1;
              }
           }) 
          });
          
      })
  }

  handleGetSuccesfull(response){
    if(response.visible){
      this.evento=response;
    }
  }
  manejar(response){
    this.etapa =response;
  }
  reservarBoletasPorLocalidad(localidad:Localidad){


    this.localidadesCompradas.push(localidad);
    this.valorLocalidadAgregada = this.valorLocalidadAgregada +  localidad.precio  +localidad.servicio + localidad.servicio*IVA;

   
  
 
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


  
  reservarBoletasLocalidad(){
    var boleta:Boleta[];
  
  if(this.localidadesCompradas.length>0){

    this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.localidad.id, this.localidadesCompradas.length).subscribe(response=>{
          
      if(response!=null){ 
        this.boletas =response
        this.valorTotal =this.valorLocalidadAgregada

 
        for(var i=0; this.boletas.length>i;i=i+1)
        { 
        
          this.valorTotal=this.valorTotal+ this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicio*IVA  

          if(i == this.boletas.length-1){
            this.AbrirCarrito()  
          }

        }
  

          this.servicioBoletas.rechazarReservaBoleta( this.boletas).subscribe(response=>response);
        
    
  }

      else {
        alert("No quedan boletas en esta localidad, prueba más tarde")
      }
      
    })
        
     
        this.valorLocalidadAgregada =0;
      }
      else{
        alert("Agrega una boleta")
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
      
  
  AbrirCarrito(): void {
    const dialogRef = this.dialog.open(CarritoDeComprasPuntosFisicosComponent, {
      width: '100%',
      height:'85%',
      
      data: { 
        valorTotal: this.valorTotal,
              boletas: this.boletas,
              evento: this.evento,
              asistente: this.asistente,
              punto: this.puntoFisico
  
      }       
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
    var boletas: Boleta[] =[];

        this.servicioBoletas.rechazarReservaBoletaInstantaneamente(this.boletas).subscribe(response=> response)
  
      
      
      this.dialog.closeAll();
      this.boletas=[]
      this.localidadesCompradas=[]
      this.valorLocalidadAgregada =0
      this.valorTotal=0

    });
  }
}
