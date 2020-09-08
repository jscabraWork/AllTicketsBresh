import { CiudadesDataService } from './../service/data/ciudades-data.service';



import { Ciudad } from './ciudad.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css'],
  providers:[
   
  ]
})
export class CiudadesComponent implements OnInit {



textoV:boolean=false;
  ciudades: Ciudad []= [];
  
  constructor(private service : CiudadesDataService) { 
    
  }

  ngOnInit() {
   
 
     
     this.service.getCiudades().subscribe( response => {this.handleGetSuccesfull(response)}
     , error =>{alert("Ocurrio un error")});

  }
  handleGetSuccesfull(response){
    this.ciudades =response;
  }

}
