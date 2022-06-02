import { EventoDataService } from './../service/data/evento-data.service';

import { Evento } from './evento.model';
import { Component, OnInit } from '@angular/core';

import { CiudadesDataService } from '../service/data/ciudades-data.service';

import{DatePipe,registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
import { EpaycoService } from '../service/epayco.service';

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

  darFecha(evento:Evento):string{

    registerLocaleData(localeES, 'es');
    let dataPipe:DatePipe = new DatePipe('es');
    let Word =dataPipe.transform(evento.fecha, 'EEE dd');
    Word= Word[0].toUpperCase() + Word.substr(1).toLowerCase();

    let Word2 =dataPipe.transform(evento.fecha, 'MMM');
    Word2= Word2[0].toUpperCase() + Word2.substr(1).toLowerCase();


    let fecha= Word  + " de " +Word2+" de "+dataPipe.transform(evento.fecha, 'yyyy');
  
    return fecha
  }

  handleSuccesfullGet(response){
    this.eventos= response;

    
  }

}



