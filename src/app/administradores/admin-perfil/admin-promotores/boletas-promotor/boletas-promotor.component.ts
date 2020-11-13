import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVA } from 'src/app/app.constants';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

@Component({
  selector: 'app-boletas-promotor',
  templateUrl: './boletas-promotor.component.html',
  styleUrls: ['./boletas-promotor.component.css']
})
export class BoletasPromotorComponent implements OnInit {

  promotor:Promotor
  id;
  
  IVA
  dineroTotalBoletas=0
  dineroTotalPalcos=0
  constructor(private servicio: PromotorDataService,  private router:Router ,  private route: ActivatedRoute,  private servicioBoleta: BoletasDataService, private palcoService:PalcosDataService) { }

  ngOnInit(): void {
    this.IVA = IVA
    this.promotor={
      boletasVendidas:[],
      codigoventa:null,
      contrasena:null,
      dineroTotal:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null,
      boletasCanjeadas:[],
      palcosCanjeados:[],
      palcosVendidos:[],
      celular:null,
      correo:null
    }
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id')});
    this.refrescar();
  }


  pagarBoletasAlPromotor(){
    this.servicioBoleta.pagarBoletasAPromotor(this.promotor.codigoventa).subscribe(response=>{
      response
      alert("Promotor pagado")
      this.refrescar();
    });
  }
  refrescar(){
    this.servicio.getPromotorById(this.id).subscribe(response=>{
      this.promotor=response
      this.dineroTotalBoletas=0
      this.dineroTotalPalcos=0
      for(var i =0; i < this.promotor.boletasVendidas.length; i=i+1){
        this.dineroTotalBoletas = this.dineroTotalBoletas + (this.promotor.boletasVendidas[i].precio + this.promotor.boletasVendidas[i].servicio + this.promotor.boletasVendidas[i].servicio*this.IVA) 
      }
  
      for(var i =0; i < this.promotor.palcosVendidos.length; i=i+1){
        this.dineroTotalPalcos = this.dineroTotalPalcos + (this.promotor.palcosVendidos[i].precio + this.promotor.palcosVendidos[i].servicio + this.promotor.palcosVendidos[i].servicio*this.IVA) 
      }

    })
  }

  pagarPalcosAlPromotor(){
    this.palcoService.pagarPalcosAPromotor(this.promotor.codigoventa).subscribe(response=>
     { response
      alert("Promotor Pagado")
      this.refrescar()
    }
      )
  }

}
