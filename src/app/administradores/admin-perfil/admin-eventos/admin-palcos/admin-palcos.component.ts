import { Localidad } from './../admin-localidades/localidad.model';
import { PalcosDataService } from './../../../../service/data/palcos-data.service';

import { ActivatedRoute, Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';

@Component({
  selector: 'app-admin-palcos',
  templateUrl: './admin-palcos.component.html',
  styleUrls: ['./admin-palcos.component.css']
})
export class AdminPalcosComponent implements OnInit {
localidad:Localidad
miId
message
miIdEvento
palcosVendidos= 0;
palcosPorVender=0;
dineroRecaudado=1;
  constructor(private route: ActivatedRoute,private servicio: LocalidadesDataService, private router: Router, private servicioPalco:PalcosDataService) { }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('idLocalidad');
      this.miIdEvento =params.get('id');

      this.localidad={
        boletas:[],
        boletasPatrocinio:[],
        id:null,
        nombre:null,
        nombreEtapa:null,
        palcos:[],
        precio:null,
        servicio:null,
        servicioPorcentaje:null,
        efectivo:false
      }
      this.refrescar();
})




  }

  handleGetSuccesfull(response){
    this.localidad=response;
  }

  borrarPalco(idPalco:number){

    this.servicioPalco.borrarPalco(idPalco, this.miId).subscribe(response=> {response; this.message="Se borrodo el palco " + idPalco; this.refrescar()},
    error=>{alert(error)}
    )
  }

  refrescar(){
    this.servicio.getLocaliddadPorId(this.miId, this.miIdEvento).subscribe( response => {this.handleGetSuccesfull(response);
      var i =0;
      while(i < this.localidad.palcos.length){
        if(this.localidad.palcos[i].vendido==true){
          this.palcosVendidos = this.palcosVendidos+1;
        }
        else{
          this.palcosPorVender = this.palcosPorVender+1;
        }
        i=i+1;
      }
      this.dineroRecaudado = 1*this.palcosVendidos*this.localidad.precio;
    
    });
    
  }

  marcarReservado(id){
    this.servicioPalco.marcarComoReservado(id).subscribe(response=>{
      response
      this.message = "Se cambio el estado de reserva del palco "+id
      this.refrescar()
    })
  }

  marcarComoVendido(id){
    this.servicioPalco.marcarComoVendido(id).subscribe(response=>{
      response
      this.message = "Se cambio el estado de reserva del palco "+id
      this.refrescar()
    })
  }


  marcarComoDisponible(id){
    this.servicioPalco.marcarComoDisponible(id).subscribe(response=>{
      response
      this.message = "Se cambio el estado de reserva del palco "+id
      this.refrescar()
    })
  }

  marcarComoProceso(id){
    this.servicioPalco.marcarComoProceso(id).subscribe(response=>{
      response
      this.message = "Se cambio el estado de reserva del palco "+id
      this.refrescar()
    })
  }

  voltear(){
    this.servicioPalco.voltear(this.miId).subscribe(response=>{
      response
      this.message = "Se cambio la disponibilidad de los palcos"
      this.refrescar()
    })
  }
}
