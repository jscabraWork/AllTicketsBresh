import { CiudadesDataService } from './../../service/data/ciudades-data.service';
import { Ciudad } from './../ciudad.model';
import { Evento } from './../../eventos/evento.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudades-eventos',
  templateUrl: './ciudades-eventos.component.html',
  styleUrls: ['./ciudades-eventos.component.css']
})
export class CiudadesEventosComponent implements OnInit {

  miId:number;
  ciudad:Ciudad;
  eventos: Evento []= [];
  textoV:boolean =false;
  constructor(private route: ActivatedRoute, private service: CiudadesDataService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( params =>{
      let id =+params.get('id');
      this.miId =id;
    })


    this.service.getCiudad(this.miId).subscribe(response => this.handleCiudadSuccesfull(response));
    this.service.getEventosCiudad(this.miId).subscribe(response => this.handleSuccesfullEventos(response));  
 



  }

  handleCiudadSuccesfull(response)
  {
    this.ciudad=response;
  }

  handleSuccesfullEventos(response){
    this.eventos=response;
  }

}
