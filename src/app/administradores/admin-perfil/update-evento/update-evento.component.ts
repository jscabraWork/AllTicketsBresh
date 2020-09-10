import { ActivatedRoute, Router } from '@angular/router';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-evento',
  templateUrl: './update-evento.component.html',
  styleUrls: ['./update-evento.component.css']
})
export class UpdateEventoComponent implements OnInit {
  miId:string;
  selectedFile:File=null;
  constructor(private route: ActivatedRoute,private servicio: EventoDataService, private router: Router) { }

  evento:Evento;
  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
})


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
  horaFin:null,
  etapas:[]
}
this.servicio.getEventoId(this.miId).subscribe( response => this.handleGetSuccesfull(response));
  }

  handleGetSuccesfull(response){
    this.evento=response;
  }
  saveEvento(){

    this.servicio.updateEventoId(this.miId, this.evento).subscribe(

      data => {console.log(data)}
    );
    this.router.navigate(['administradores/admin/eventos/lista']);
    alert('El evento ' +this.evento.nombre +' ha sido modificado');
  }


  onFileSelected(event){
    this.selectedFile = event.target.files[0];
 
    this.evento.imagen ="../../assets/images/img/" +event.target.files[0].name;
    

  }
  onFileSelected1(event){
    this.selectedFile = event.target.files[0];
 
    this.evento.imagenes.push ("../../assets/images/img/" +event.target.files[0].name)
    

  }


}
