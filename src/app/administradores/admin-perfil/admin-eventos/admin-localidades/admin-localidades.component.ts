import { ActivatedRoute } from '@angular/router';
import { Localidad } from './localidad.model';
import { LocalidadesDataService } from './../../../../service/data/localidades-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-localidades',
  templateUrl: './admin-localidades.component.html',
  styleUrls: ['./admin-localidades.component.css']
})
export class AdminLocalidadesComponent implements OnInit {

  message:string
  miId
  localidades:Localidad[]=[];
  constructor(private servicio:LocalidadesDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
    this.refrescar()
    })
  }


  borrarLocalidad(idLocalidad:number){


    this.servicio.deleteEvento(this.miId,idLocalidad).subscribe(data=>{this.refrescar(), this.message="se borro localidad " +idLocalidad});
    
  }

  refrescar(){
    this.servicio.getAllLocalidadesDeEvento(this.miId).subscribe(response=> this.localidades= response)
  }
}
