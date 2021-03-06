import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVA } from 'src/app/app.constants';
import { PuntoFisico } from 'src/app/puntos-fisicos/puntoFisico.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PuntosFisicosDataService } from 'src/app/service/data/puntos-fisicos-data.service';

@Component({
  selector: 'app-boletas-puntos-fisicos',
  templateUrl: './boletas-puntos-fisicos.component.html',
  styleUrls: ['./boletas-puntos-fisicos.component.css']
})
export class BoletasPuntosFisicosComponent implements OnInit {

  constructor(private servicio: PuntosFisicosDataService, private router:Router, private route: ActivatedRoute, private serviceBoleta:BoletasDataService, private servicioPalcos:PalcosDataService) { }
  punto:PuntoFisico
  id
  contra
  IVA
  dineroTotalBoletas=0
  dineroTotalPalcos=0
  dineroTotalEfectivoBoletas=0
  dineroTotalPalcoEfectivo=0
  ngOnInit(): void {
    this.IVA =IVA
    this.punto={
      contrasena:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null,
      boletasCanjeadas:[],
      boletasVendidas:[],
      palcosCanjeados:[],
      palcosVendidos:[],
      eventos:[]
    }


    this.route.paramMap.subscribe( params =>{
      this.id =params.get('id');
      this.refrescar()
  })
  }

  refrescar(){
    this.servicio.getPuntoPorId(this.id).subscribe(response=> {this.punto=response
      this.dineroTotalBoletas=0
      this.dineroTotalPalcos=0
      for(var i =0; i < this.punto.boletasVendidas.length; i=i+1){
        this.dineroTotalBoletas = this.dineroTotalBoletas + (this.punto.boletasVendidas[i].precio + this.punto.boletasVendidas[i].servicio + this.punto.boletasVendidas[i].servicioIva) 
        if(this.punto.boletasVendidas[i].metodo=='Efectivo'){
          this.dineroTotalEfectivoBoletas = this.dineroTotalEfectivoBoletas + (this.punto.boletasVendidas[i].precio + this.punto.boletasVendidas[i].servicio + this.punto.boletasVendidas[i].servicioIva) 
        }
      }
  
      for(var i =0; i < this.punto.palcosVendidos.length; i=i+1){
        this.dineroTotalPalcos = this.dineroTotalPalcos + (this.punto.palcosVendidos[i].precio + this.punto.palcosVendidos[i].servicio + this.punto.palcosVendidos[i].servicioIva) 
        if(this.punto.palcosVendidos[i].metodo=='Efectivo'){
          this.dineroTotalPalcoEfectivo = this.dineroTotalPalcoEfectivo + (this.punto.palcosVendidos[i].precio + this.punto.palcosVendidos[i].servicio + this.punto.palcosVendidos[i].servicioIva) 
        }
      }


    }) 
  }

  pagarBoletas(){
    this.serviceBoleta.pagarBoletasAPuntoFisico(this.punto.numeroDocumento).subscribe(response=>{response
    this.refrescar()
    })
  }

  pagarPalcos(){
    this.servicioPalcos.pagarPalcosAPromotorPuntoFisico(this.punto.numeroDocumento).subscribe(response=>{response
    this.refrescar()
    })
  }
}
