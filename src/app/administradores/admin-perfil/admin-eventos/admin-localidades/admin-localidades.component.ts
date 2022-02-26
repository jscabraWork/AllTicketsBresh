import { EtapasDataService } from './../../../../service/data/etapas-data.service';
import { ActivatedRoute } from '@angular/router';
import { Localidad } from './localidad.model';
import { LocalidadesDataService } from './../../../../service/data/localidades-data.service';
import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';

@Component({
  selector: 'app-admin-localidades',
  templateUrl: './admin-localidades.component.html',
  styleUrls: ['./admin-localidades.component.css']
})
export class AdminLocalidadesComponent implements OnInit {

  message:string
  miId

  idEtapa
  etapa:Etapa
  constructor(private servicio:LocalidadesDataService, private service: EtapasDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this,this.idEtapa =params.get('idEtapa')
    this.refrescar()
    })
    this.etapa={
      evento:null,
      id:null,
      localidades:[],
      nombre:null,
      visible:null,
      promotorVenta:null
    }
  }

  cambiarEfectivo(idLocalidad:number){
    this.servicio.cambiarEfectivo(idLocalidad).subscribe(response=>{this.refrescar(), this.message ="SE cambio el efectivo de la localdiad "+idLocalidad})
  }
  borrarLocalidad(idLocalidad:number){


    this.servicio.deleteEvento(this.miId,idLocalidad).subscribe(data=>{this.refrescar(), this.message="se borro localidad " +idLocalidad});
    
  }
  mandarQRSLocalidad(idLocalidad:number){


    this.servicio.mandarLocalidad(idLocalidad).subscribe(data=>{this.refrescar(), this.message="Se enviaron los QRS de la localidad " +idLocalidad});
    
  }
  refrescar(){
    this.service.getEtapaPorId(this.idEtapa).subscribe(response => {this.etapa= response})
  }
}
