import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.css']
})
export class AdminEventosComponent implements OnInit {

  message:string;
  constructor(private service:EventoDataService) { }

  eventos:Evento[]=[];
  ngOnInit(): void {
    this.refresecarEventos();
   
  }

  deleteEvento(id){
    this.service.deleteEvento(id).subscribe(response=> {
    this.message= `Se borro el evento ${id}`
    this.refresecarEventos();
    })

  }


  refresecarEventos(){
    this.service.getAllEventos().subscribe(response=> this.eventos= response);
  }
  cambiarVisibilidad(pId){
    this.service.cambiarVisibilidad(pId).subscribe(response=>{
      response;
      this.refresecarEventos();
    })
  }
}
