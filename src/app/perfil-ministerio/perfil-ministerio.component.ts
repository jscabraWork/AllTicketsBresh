import { Component, OnInit } from '@angular/core';
import { Evento } from '../eventos/evento.model';
import { EventoDataService } from '../service/data/evento-data.service';

@Component({
  selector: 'app-perfil-ministerio',
  templateUrl: './perfil-ministerio.component.html',
  styleUrls: ['./perfil-ministerio.component.css']
})
export class PerfilMinisterioComponent implements OnInit {

  eventos:Evento[]
  constructor(private servicio: EventoDataService) { }

  ngOnInit(): void {
    this.servicio.getAllEventos().subscribe(response=>{
      this.eventos = response
    })

  }

}
