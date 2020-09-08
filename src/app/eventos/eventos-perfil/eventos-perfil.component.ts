
import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../boleta.model';
import { Evento } from './../evento.model';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-eventos-perfil',
  templateUrl: './eventos-perfil.component.html',
  styleUrls: ['./eventos-perfil.component.css']
})
export class EventosPerfilComponent implements OnInit {
  miId:string;
  evento:Evento;

  constructor(private route: ActivatedRoute, private service:EventoDataService, private _sanitizer: DomSanitizer) { }

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
      palcos:[]
    }
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        
      
      
      });
     
  })
}

handleGetSuccesfull(response){
  this.evento=response;
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
