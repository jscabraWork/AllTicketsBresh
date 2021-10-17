import { EventoDataService } from './../service/data/evento-data.service';

import { Evento } from './evento.model';
import { Component, OnInit } from '@angular/core';
import { EpaycoService } from '../service/epayco.service';
import { CiudadesDataService } from '../service/data/ciudades-data.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ciudad } from '../ciudades/ciudad.model';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers:[
    
   ]
})
export class EventosComponent implements OnInit {


  eventos: Evento []= [];
  
  constructor(private service: EventoDataService, private servicioCiudad: CiudadesDataService ) { }

  ngOnInit(): void {



      this.service.getAllEventosVisibles().subscribe(
        response => {this.handleSuccesfullGet(response);
         
        }
      )
      

  }
   getCiudad(ciudadid:number) {
    let a =this.servicioCiudad.getCiudad(ciudadid).subscribe(response=>{
   
      return response.nombre;
      
    });
    
    
  
  }

  handleSuccesfullGet(response){
    this.eventos= response;

    
  }

}



