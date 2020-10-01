import { ActivatedRoute } from '@angular/router';
import { Evento } from './../../eventos/evento.model';
import { PuntoFisico } from './../puntoFisico.model';
import { PuntosFisicosDataService } from './../../service/data/puntos-fisicos-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private servicio: PuntosFisicosDataService , private route: ActivatedRoute,private autenticador: HardcodedAutheticationService, private eventosServicio:EventoDataService) { }

  ngOnInit(): void {
    this.user=this.autenticador.getPuntoFisico();
    this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');})
      this.eventosServicio.getEventoId(this.miId).subscribe(response=> this.evento =response)
    
    });
  }

  }


