import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarFotoPerfilComponent } from './agregar-foto-perfil/agregar-foto-perfil.component';
import { AgregarFotoMapaComponent } from './agregar-foto-mapa/agregar-foto-mapa.component';
import { AgregarFotosBannerComponent } from './agregar-fotos-banner/agregar-fotos-banner.component';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.css']
})
export class AdminEventosComponent implements OnInit {

  message:string;
  constructor(private service:EventoDataService, private dialog:MatDialog) { }

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


  agregarFotoPortada(evento:Evento) {
    var portada = ""
    if (evento.imagen != null) {
      portada = evento.imagen.url
    }
    const dialogRef = this.dialog.open(AgregarFotoPerfilComponent,
      {
        width: '600px',
        height: '380px',
        data: {
          id: evento.id,
          url: portada
        }
      })
    dialogRef.afterClosed().subscribe(result => {
      result
      this.ngOnInit()
    })
  }

  agregarFotoMapa(evento:Evento) {
    var portada = ""
    if (evento.mapaImagen != null) {
      portada = evento.mapaImagen.url
    }
    const dialogRef = this.dialog.open(AgregarFotoMapaComponent
    ,
      {
        width: '600px',
        height: '380px',
        data: {
          id: evento.id,
          url: portada
        }
      })
    dialogRef.afterClosed().subscribe(result => {
      result
      this.ngOnInit()
    })
  }

  agregarFotosBanner(evento:Evento) {
    var portada = []
    if (evento.mapaImagen != null) {
      portada = evento.imagenes
    }
    const dialogRef = this.dialog.open(AgregarFotosBannerComponent
    ,
      {
        width: '600px',
        height: '380px',
        data: {
          id: evento.id,
          url: portada
        }
      })
    dialogRef.afterClosed().subscribe(result => {
      result
      this.ngOnInit()
    })
  }


}
