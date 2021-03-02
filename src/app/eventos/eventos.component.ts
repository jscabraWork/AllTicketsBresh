import { EventoDataService } from './../service/data/evento-data.service';

import { Evento } from './evento.model';
import { Component, OnInit } from '@angular/core';
import { EpaycoService } from '../service/epayco.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers:[
    
   ]
})
export class EventosComponent implements OnInit {


  eventos: Evento []= [];
  
  constructor(private service: EventoDataService) { }

  ngOnInit(): void {

  
  /* this.eventoservice.getEventos().subscribe(response => {
      this.eventos = response; } 
      ,error  => {alert(">Ocurrio un error!")}
      );*/

      this.service.getAllEventosVisibles().subscribe(
        response => {this.handleSuccesfullGet(response);
        }
      )
      

  }

  handleSuccesfullGet(response){
    this.eventos= response;
    


    
  }

}



