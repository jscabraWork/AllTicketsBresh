import { EtapasDataService } from './../../service/data/etapas-data.service';

import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../boleta.model';
import { Evento } from './../evento.model';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Etapa } from './etapa.model';

@Component({
  selector: 'app-eventos-perfil',
  templateUrl: './eventos-perfil.component.html',
  styleUrls: ['./eventos-perfil.component.css']
})
export class EventosPerfilComponent implements OnInit {
  miId:string;
  evento:Evento;
  etapa:Etapa;

  

  constructor(private route: ActivatedRoute, private service:EventoDataService, private _sanitizer: DomSanitizer, private etapaServicio:EtapasDataService) { }

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
      imagen:"",
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      palcos:[],
      horaInicio:"",
      horaFin:"",
      etapas:[]
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

        
      
      
      });
      this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);})
     
  })
}

handleGetSuccesfull(response){
  this.evento=response;
}

manejar(response){
  this.etapa =response;
}

getVideoIframe(url) {
  var video, results;


  results = url.match('[\\?&]v=([^&#]*)');
  video   = (results === null) ? url : results[1];

  return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
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

}
