import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

@Component({
  selector: 'app-agregar-promotor',
  templateUrl: './agregar-promotor.component.html',
  styleUrls: ['./agregar-promotor.component.css']
})
export class AgregarPromotorComponent implements OnInit {

  promotor:Promotor
  constructor(private servicio: PromotorDataService,  private router:Router) { }

  ngOnInit(): void {
    this.promotor={
      boletasVendidas:[],
      codigoventa:null,
      contrasena:null,
      dineroTotal:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null
    }
  }

  save(){
    this.servicio.addPromotor(this.promotor).subscribe(response=>{
      response
      alert('Se creo el promotor ' + this.promotor.usuario)
      this.router.navigate(['administradores/promotores'])
    })
  }

}
