import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

@Component({
  selector: 'app-promotores-organizador',
  templateUrl: './promotores-organizador.component.html',
  styleUrls: ['./promotores-organizador.component.css']
})
export class PromotoresOrganizadorComponent implements OnInit {

  evento:Evento
  boletas:[]
  miId:string
  constructor(private route: ActivatedRoute, private service:PromotorDataService,private serviceEvento:EventoDataService) { }
  promotores:Promotor[]

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
      oculto:null
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.service.getAllPromotoresByEventoId(this.miId).subscribe(response=>{
        this.promotores = response
        this.serviceEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
          
          
        });
      })
    
     
  })
   
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }
}
