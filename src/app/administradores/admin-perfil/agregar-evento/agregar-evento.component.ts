import { ActivatedRoute, Router } from '@angular/router';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { Component, OnInit } from '@angular/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  constructor(private servicio: EventoDataService, private route: Router) { }
  selectedFile:File=null;
  evento:Evento;
  horaInicio
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
      organizadorid:null,
      imagen:"",
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      palcos:[],
      horaInicio:null,
      horaFin:null
    }

    
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
 
    this.evento.imagen ="../../assets/images/img/" +event.target.files[0].name;
    

  }

  seleccionarHora(){

    this.evento.fecha.setHours(this.horaInicio)
  }


  onFileSelected1(event){
    this.selectedFile = event.target.files[0];
 
    this.evento.imagenes.push ("../../assets/images/img/" +event.target.files[0].name)
    

  }




  



  saveEvento(){
    
    this.servicio.addEventoId(this.evento).subscribe(data=>console.log(data))
    alert("se creo el evento "+ this.evento.nombre);
    this.route.navigate(['administradores/admin/eventos/lista']);


  }

}
