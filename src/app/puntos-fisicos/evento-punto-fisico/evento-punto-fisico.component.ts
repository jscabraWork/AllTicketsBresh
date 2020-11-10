import { BoletasDataService } from './../../service/data/boletas-data.service';
import { Boleta } from './../../eventos/boleta.model';
import { EtapasDataService } from './../../service/data/etapas-data.service';
import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { ActivatedRoute } from '@angular/router';
import { Evento } from './../../eventos/evento.model';
import { PuntoFisico } from './../puntoFisico.model';
import { PuntosFisicosDataService } from './../../service/data/puntos-fisicos-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { IVA } from 'src/app/app.constants';

@Component({
  selector: 'app-evento-punto-fisico',
  templateUrl: './evento-punto-fisico.component.html',
  styleUrls: ['./evento-punto-fisico.component.css']
})
export class EventoPuntoFisicoComponent implements OnInit {

  puntoFisico:PuntoFisico
  evento:Evento
  user
  miId
  etapa:Etapa
  boletas:Boleta[]=[]
boletaBoolean:boolean=false
IVA
localidadesBoletas:Localidad[]=[];
localidadesCompradas:Localidad[]=[];
valorLocalidadAgregada:number =0
valorTotal:number=0
  constructor(private servicio: PuntosFisicosDataService , private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private route: ActivatedRoute,private autenticador: HardcodedAutheticationService, private eventosServicio:EventoDataService) { }

  ngOnInit(): void {
    this.IVA=IVA
    this.etapa={
      evento:null,
      id:null,
      localidades:[],
      nombre:"",
      visible:null    
    }
    this.user=this.autenticador.getPuntoFisico();
    this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');})
      this.eventosServicio.getEventoId(this.miId).subscribe(response=> this.evento =response);
      this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
        var i =0;
        while(i < this.etapa.localidades.length){
          if(this.etapa.localidades[i].boletas.length>0){
            this.localidadesBoletas.push(this.etapa.localidades[i])
          }
          
          i=i+1;
        }
      
      
      })
    
    });
  }


  manejar(response){
    this.etapa=response
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


  reservarBoletasSillasExactas(localidad:Localidad){


    var lista:Boleta[]=[];

    if(this.boletas.length<6 )
    {
      this.servicioBoletas.getBoletasVendidasYReservado(this.evento.id, localidad.id, false, false).subscribe(response=>{
        lista= response
        if(lista.length>0){ 
          this.boletas.push(lista[0])
      }
        else {
          alert("No quedan boletas en esta localidad, prueba más tarde")
        }
        
      })
    }

    else if(this.boletas.length==6 ){
      alert("Solo puedes comprar 6 boletas máximo por Evento")
    }
  }



  reservarBoletasPorLocalidad(localidad:Localidad){


    var lista:Boleta[]=[];

    if(this.localidadesCompradas.length<6)
    {
      this.localidadesCompradas.push(localidad);
      this.valorLocalidadAgregada = this.valorLocalidadAgregada +  localidad.precio  +localidad.servicio + localidad.servicio*IVA;

   }
  
  else if(this.localidadesCompradas.length==6 ){
    alert("Solo puedes comprar 6 boletas máximo por Evento")
  }
  }



  reservarBoletasLocalidad(){


    
 

      
  
          
          this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.localidadesCompradas[0].id , this.localidadesCompradas.length).subscribe(response=>{
            
            if(response!=null){ 
              this.boletas =response
  
          for(var i=0; this.boletas.length>i;i=i+1)
          {

            this.valorTotal=this.valorTotal+ this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicio*IVA  
           
          
            this.servicioBoletas.rechazarReservaBoleta( this.boletas).subscribe(response=>response);
          } 
  
  

              
            
  
            
              
          
        }
  
            else {
              alert("No quedan boletas en esta localidad, prueba más tarde")
            }
            
          })
        
        

   
    
  }

quitaBoletaLocalidad(localidad:Localidad){
  if(this.localidadesCompradas.length >0){
    var terminado =false;
    for(var i =0 ; i <this.localidadesCompradas.length && !terminado;i=i+1){
      if(this.localidadesCompradas [i].id==localidad.id){
        this.localidadesCompradas.splice(i,1)
        this.valorLocalidadAgregada = this.valorLocalidadAgregada - (localidad.precio  +localidad.servicio +localidad.servicio*IVA) ;
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


  if( this.boletas.length>0)
    {
      var i =0
      while(i < this.boletas.length){
        this.servicioBoletas.comprarBoleta
          i=i+1;
          }
    }
  }
}


