import { EtapasDataService } from './../../service/data/etapas-data.service';

import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../boleta.model';
import { Evento } from './../evento.model';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Etapa } from './etapa.model';
import { IVA } from 'src/app/app.constants';

@Component({
  selector: 'app-eventos-perfil',
  templateUrl: './eventos-perfil.component.html',
  styleUrls: ['./eventos-perfil.component.css']
})
export class EventosPerfilComponent implements OnInit {
  miId:string;
  evento:Evento;
  etapa:Etapa;
  IVA
localidadesPalcos:Localidad[]=[];
localidadesBoletas:Localidad[]=[];
  

  constructor(private route: ActivatedRoute, private service:EventoDataService, private _sanitizer: DomSanitizer, private etapaServicio:EtapasDataService) { }

  ngOnInit(): void {
this.IVA = IVA
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


darCantidadDePalcos(localidad:Localidad){
  var contador =0;
  for(var i =0; i < localidad.palcos.length; i=i+1){
    if(localidad.palcos[i].vendido==false){

      contador = contador+1;
    }
  }
  return contador;
}

}
