import { ActivatedRoute } from '@angular/router';
import { Boleta } from './../../../../eventos/boleta.model';
import { Component, OnInit } from '@angular/core';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';

@Component({
  selector: 'app-admin-boletas',
  templateUrl: './admin-boletas.component.html',
  styleUrls: ['./admin-boletas.component.css']
})
export class AdminBoletasComponent implements OnInit {

  constructor(private servicio: BoletasDataService, private route: ActivatedRoute) { }

  miId;
  idLocalidad;
  nombre;
  boletas: Boleta[]=[];
  numeroDeBoletas:number;
  numeroDeBoletasVendidas:number=0;
  numeroDeBoletasPorVender:number=0;
  dineroRecaudado=0;

  ngOnInit(): void {

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.idLocalidad = params.get('idLocalidad');
      this.nombre = params.get('nombreLocalidad');
      this.refrescar()
     
     
    }) 
  }
  handleGetSuccesfull(response){
    this.boletas=response;

  }
  refrescar(){
    this.servicio.getAllBoletasLocalidad(this.miId, this.idLocalidad).subscribe(response=>{this.handleGetSuccesfull(response);
      this.numeroDeBoletas=this.boletas.length;
      var i=0;
      this.numeroDeBoletasPorVender=0;
      this.numeroDeBoletasVendidas=0
      while(i<this.numeroDeBoletas){

      if(this.boletas[i].vendida == false)
      {
     
        this.numeroDeBoletasPorVender =this.numeroDeBoletasPorVender+1;
      }
      else{
        this.numeroDeBoletasVendidas =this.numeroDeBoletasVendidas+ 1;
      }
      i++;
      }
      this.dineroRecaudado= this.numeroDeBoletasVendidas*this.boletas[0].precio;
      })
  }
  borrarBoleta(id:number){
    this.servicio.deleteEvento(this.miId,this.idLocalidad,id).subscribe(data=>{data; this.refrescar()});
    

  }

}
