import { EventoDataService } from './../service/data/evento-data.service';
import { Evento } from './../eventos/evento.model';
import { HardcodedAutheticationService } from './../service/hardcoded-authetication.service';
import { PuntoFisico } from './puntoFisico.model';
import { PuntosFisicosDataService } from './../service/data/puntos-fisicos-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntos-fisicos',
  templateUrl: './puntos-fisicos.component.html',
  styleUrls: ['./puntos-fisicos.component.css']
})
export class PuntosFisicosComponent implements OnInit {

  puntoFisico:PuntoFisico
  user
  eventos:Evento[]=[]
  constructor(private servicio: PuntosFisicosDataService, private autenticador: HardcodedAutheticationService, private eventosServicio:EventoDataService) { }

  ngOnInit(): void {
    this.user=this.autenticador.getPuntoFisico();
    this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;
    this.eventosServicio.getAllEventos().subscribe(response=>this.eventos=response)
    
    });
  }

}
