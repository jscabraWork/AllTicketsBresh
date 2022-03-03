import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/eventos/evento.model';
import { PuntoFisico } from 'src/app/puntos-fisicos/puntoFisico.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PuntosFisicosDataService } from 'src/app/service/data/puntos-fisicos-data.service';

@Component({
  selector: 'app-puntos-fisicos-organizador',
  templateUrl: './puntos-fisicos-organizador.component.html',
  styleUrls: ['./puntos-fisicos-organizador.component.css']
})
export class PuntosFisicosOrganizadorComponent implements OnInit {

  evento:Evento
  boletas:[]
  miId:string
  puntos:PuntoFisico[]
  constructor(private route: ActivatedRoute, private service:PuntosFisicosDataService,private serviceEvento:EventoDataService) { }

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
      adicionales:[],
      oculto:null,
      dineroEntregado:null,
      ciudadNombre:null,
      localidadesProducto:[],
      visibleAP:null,
      terminado:null
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.service.getPuntoPorIdEvento(this.miId).subscribe(response=>{
        this.puntos =response
        this.serviceEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
          
          
        });
      })
    
     
  })
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }
}
