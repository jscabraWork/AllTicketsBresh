import { Event } from './calendar.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  eventos:Evento[]
  events:Event[]
  constructor( private eventoServicio: EventoDataService) { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Alístate Que Estoy Suelta Como Gabete "La Chica 10" Décimo aniversario.',date: '2020-10-10' },
      
    ]
  }

  ngOnInit(): void {
    this.eventoServicio.getAllEventos().subscribe(response=> {this.eventos=response;
   
    })
  }



}

 


