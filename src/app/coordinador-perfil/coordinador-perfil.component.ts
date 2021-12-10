import { Component, OnInit } from '@angular/core';
import { Evento } from '../eventos/evento.model';
import { EventoDataService } from '../service/data/evento-data.service';

@Component({
  selector: 'app-coordinador-perfil',
  templateUrl: './coordinador-perfil.component.html',
  styleUrls: ['./coordinador-perfil.component.css']
})
export class CoordinadorPerfilComponent implements OnInit {

  eventos:Evento[]=[];
  constructor(private service:EventoDataService,) { }

  ngOnInit(): void {
    this.refresecarEventos();
  }
  refresecarEventos(){
    this.service.getAllEventos().subscribe(response=> this.eventos= response);
  }
}
