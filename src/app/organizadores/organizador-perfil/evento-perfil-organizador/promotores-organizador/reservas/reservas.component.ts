import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';

import { Evento } from 'src/app/eventos/evento.model';
import { Reserva } from 'src/app/models/reserva.model';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

import { PromotorDataService } from 'src/app/service/data/promotor-data.service';
import { ReservasDataService } from 'src/app/service/data/reservas-data.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  evento:Evento
  reservas:Reserva[]
  palcos:Palco[]
  miId:string
  idPromotor
  constructor(private route: ActivatedRoute, private service:PromotorDataService,private serviceEvento:EventoDataService, private servicioReserva:ReservasDataService) { }
  promotor:Promotor

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
      this.idPromotor = params.get('idPromotor')
     this.service.getPromotorById(this.idPromotor).subscribe(response =>{
       this.promotor = response
       this.serviceEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        this.servicioReserva.getAllReservasNoVendidasDePromotorPorEvento(this.promotor.numeroDocumento,this.evento.nombre).subscribe(response=>{
          this.manejar(response)
        })
       });
     })
   
      
  })
   
  }
  manejar(response){
    this.reservas = response.reservas
    this.palcos = response.palcos
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }



  
}
