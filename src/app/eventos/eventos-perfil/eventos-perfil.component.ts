import { ImagenEventosComponent } from './imagen-eventos/imagen-eventos.component';
import { MatDialog } from '@angular/material/dialog';
import { EtapasDataService } from './../../service/data/etapas-data.service';

import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../boleta.model';
import { Evento } from './../evento.model';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Etapa } from './etapa.model';
import { IVA } from 'src/app/app.constants';
import * as countdown from 'countdown'
import { Time } from 'src/app/models/time.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-eventos-perfil',
  templateUrl: './eventos-perfil.component.html',
  styleUrls: ['./eventos-perfil.component.css']
})
export class EventosPerfilComponent implements OnInit {
  miId:string;
  evento:Evento;
  etapa:Etapa;

localidadesPalcos:Localidad[]=[];
localidadesBoletas:Localidad[]=[];
  fecha:Date 
  fechaActual:Date=new Date();

  time:Time =null;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private service:EventoDataService, private _sanitizer: DomSanitizer, private etapaServicio:EtapasDataService) { }

  ngOnInit(): void {
    

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
      horaInicio:"",
      horaFin:"",
      etapas:[],
      mapaImagen: {
        id:null,
        name:null,
        url:null
      },
      visible:false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null
    }
    this.etapa={
      evento:null,
      id:null,
      localidades:[],
      nombre:"PRUEBA",
      visible:false    
    }
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        
        this.fecha = new Date(this.evento.fechaApertura)
       countdown(this.fecha,(ts)=>{
          this.time=ts
        },countdown.MONTHS|countdown.WEEKS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS)
        this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(response =>{this.manejar(response);
          var i =0;
          if(response!=null){
          while(i < this.etapa.localidades.length){
            if(this.etapa.localidades[i].boletas.length>0){
              this.localidadesBoletas.push(this.etapa.localidades[i])
            }
            else if(this.etapa.localidades[i].palcos.length>0){
              this.localidadesPalcos.push(this.etapa.localidades[i])
            }
            
            i=i+1;
          }
        }

          
          })
        
      
      
      });
      
     
  })
}
scroll(){
  document.getElementById("prueba9").scrollIntoView({behavior:"smooth"})
}


openDialog(): void {
  const dialogRef = this.dialog.open(ImagenEventosComponent, {

    data: { mapaImagen: this.evento.mapaImagen }
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });

  
}

handleGetSuccesfull(response){
  if(response.visible){
  this.evento=response;
}
}

manejar(response){
  this.etapa =response;
}

getVideoIframe(url) {
  var video, results;


  results = url.match('[\\?&]v=([^&#]*)');
  video   = (results === null) ? url : results[1];
  let a:SafeResourceUrl= this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  return a
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


darCantidadDePalcos(localidad:Localidad){
  var contador =0;
  for(var i =0; i < localidad.palcos.length; i=i+1){
    if(localidad.palcos[i].vendido==false && localidad.palcos[i].reservado==false && localidad.palcos[i].proceso==false){

      contador = contador+1;
    }
  }
  return contador;
}


}
