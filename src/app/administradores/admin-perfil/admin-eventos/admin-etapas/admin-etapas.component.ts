import { EventoDataService } from './../../../../service/data/evento-data.service';
import { Evento } from './../../../../eventos/evento.model';
import { EtapasDataService } from './../../../../service/data/etapas-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';

@Component({
  selector: 'app-admin-etapas',
  templateUrl: './admin-etapas.component.html',
  styleUrls: ['./admin-etapas.component.css']
})
export class AdminEtapasComponent implements OnInit {

  miId
  evento:Evento
  message
  etapas:Etapa[]=[]
  constructor( private route: ActivatedRoute, private service: EtapasDataService, private servicioEvento:EventoDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');

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
        ciudadNombre:null
      }
    this.refrescar()
    })
  }

  hacerVisible(idEtapa){

    this.service.hacerVisible(idEtapa, this.miId).subscribe(response=>{response; 

      this.refrescar()})
    
  }
  borrarEtapa(idEtapa){
    this.service.borrarEtapa(idEtapa).subscribe(response=>{response; this.message="se borro etapa "+idEtapa;this.refrescar()})
  }
  refrescar(){
    this.servicioEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response)
    this.service.getAllEtapasDeEvento(this.miId).subscribe(response=>
      this.etapas =response)
    
    });
  }
  handleGetSuccesfull(r){
    this.evento=r;
  }
}
