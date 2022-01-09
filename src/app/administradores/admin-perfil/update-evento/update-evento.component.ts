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
  organizadorID
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
  
  imagen:null,
  imagenes:[],
  artistas:"",
  fechaFin:null,
  mapa:null,
  localidades:[],
  
  horaInicio:null,
  horaFin:null,
  etapas:[],
  mapaImagen:null,
  visible:false,
  soldout:false,
  mensaje:null,
  fechaApertura:null,
  imagenFinal:null,
  urlMapa:null,
  adicionales:[],
  oculto:null,
  dineroEntregado:null,
  ciudadNombre:null,
  localidadesProducto:[],
  visibleAP:null,
}
this.servicio.getEventoIdPerfil(this.miId).subscribe( response => this.handleGetSuccesfull(response));
  }

  handleGetSuccesfull(response){
    this.evento=response.evento;
    this.organizadorID = response.organizadorId
  }
  saveEvento(){

    this.servicio.updateEventoId(this.miId, this.evento).subscribe(

      data => {console.log(data)}
    );
    this.router.navigate(['administradores/admin/eventos/lista']);
    alert('El evento ' +this.evento.nombre +' ha sido modificado');
  }


 


}
