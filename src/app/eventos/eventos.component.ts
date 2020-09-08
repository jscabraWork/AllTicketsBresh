import { EventoDataService } from './../service/data/evento-data.service';

import { Evento } from './evento.model';
import { Component, OnInit } from '@angular/core';


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

      this.service.getAllEventos().subscribe(
        response => {this.handleSuccesfullGet(response);
        }
      )
      

  }

  handleSuccesfullGet(response){
    this.eventos= response;
    


    
  }
  a(fecha:Date){
   return fecha.getDay()
  }
  
}



