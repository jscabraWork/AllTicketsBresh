import { PuntosFisicosDataService } from './../../../service/data/puntos-fisicos-data.service';
import { PuntoFisico } from './../../../puntos-fisicos/puntoFisico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-puntos-fisicos',
  templateUrl: './admin-puntos-fisicos.component.html',
  styleUrls: ['./admin-puntos-fisicos.component.css']
})
export class AdminPuntosFisicosComponent implements OnInit {

  message
  puntosFisicos:PuntoFisico[]=[]
  constructor(private servicio: PuntosFisicosDataService) { }

  ngOnInit(): void {
    this.refrescar()
  }
  manejarRespuesta(response){
    this.puntosFisicos = response;
  }

  borrarPunto(id){

    this.servicio.deletePunto(id).subscribe(response=> {
      this.message= `Se borro el punto ${id}`
      this.refrescar();
      })

  }
  refrescar(){
    this.servicio.getAllPuntosFisicos().subscribe(response=>{this.manejarRespuesta(response)});
  }


}
