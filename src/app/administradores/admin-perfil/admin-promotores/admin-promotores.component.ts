import { Component, OnInit } from '@angular/core';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

@Component({
  selector: 'app-admin-promotores',
  templateUrl: './admin-promotores.component.html',
  styleUrls: ['./admin-promotores.component.css']
})
export class AdminPromotoresComponent implements OnInit {

  promotores:Promotor[]=[]
  message: string
  constructor(private servicio: PromotorDataService) { }

  ngOnInit(): void {
   this.refrescar()
  }

  borrar(numeroDocumento){
    this.servicio.deletePromotorById(numeroDocumento).subscribe(response=>{
      response
      this.message= `Se borro el promotor ${numeroDocumento}`
      this.refrescar()
    })
  }

  refrescar(){
    this.servicio.getAllPromotores().subscribe(response=> {
      response;
      this.promotores= response

    })
  }


}
