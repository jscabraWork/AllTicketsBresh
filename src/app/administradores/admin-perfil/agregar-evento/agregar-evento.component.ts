import { ActivatedRoute, Router } from '@angular/router';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { Component, OnInit } from '@angular/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { ImagenDataService } from 'src/app/service/data/imagen-data.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  constructor(private servicio: EventoDataService, private route: Router, private servicioImagen:ImagenDataService) { }
  selectedFile:File=null;
  evento:Evento;
  horaInicio
  fecha:Date = new Date()
  idOrganizador


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
      imagen:null,
      imagenes:null,
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
      adicionales:[],
      oculto:null,
      dineroEntregado:0,
      ciudadNombre:null,
      localidadesProducto:[],
      visibleAP:null,
      terminado:null
      
    }

    
  }

  mostrarFecha(){
    console.log(this.evento.fechaApertura)
  }

  saveEvento(){
    
    this.servicio.addEventoId(this.evento,this.idOrganizador).subscribe(data=>console.log(data))
    alert("se creo el evento "+ this.evento.nombre);
    this.route.navigate(['administradores/admin/eventos/lista']);


  }

}
