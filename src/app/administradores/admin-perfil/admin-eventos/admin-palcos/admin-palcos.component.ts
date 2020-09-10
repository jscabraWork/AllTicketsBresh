import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { EventoDataService } from './../../../../service/data/evento-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from './../../../../eventos/evento.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-palcos',
  templateUrl: './admin-palcos.component.html',
  styleUrls: ['./admin-palcos.component.css']
})
export class AdminPalcosComponent implements OnInit {
evento:Evento
miId
message
  constructor(private route: ActivatedRoute,private servicio: EventoDataService, private router: Router, private servicioPalco:PalcosDataService) { }

  
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
  horaFin:null
}
this.refrescar();

  }

  handleGetSuccesfull(response){
    this.evento=response;
  }

  borrarPalco(idPalco:number){

    this.servicioPalco.borrarPalco(idPalco, this.miId).subscribe(response=> {response; this.message="Se borrodo el palco " + idPalco; this.refrescar()},
    error=>{alert(error)}
    )
  }

  refrescar(){
    this.servicio.getEventoId(this.miId).subscribe( response => this.handleGetSuccesfull(response));
  }

}
