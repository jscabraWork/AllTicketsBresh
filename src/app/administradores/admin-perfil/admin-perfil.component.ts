import { AdministradoresWebDataService } from './../../service/data/administradores-web-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashbordService } from 'src/app/service/data/dashbord.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})
export class AdminPerfilComponent implements OnInit {

  
  totalBoleta 
  totalBoletaServico
   totalBoletaIVA
  
   totalPalco 
   totalServicioPalco
   totalIVAPalco
  
  
   totalEpayco
   comisionPSEEPayco
   comisionTarjetaEpayco 
   totalIVAEpayco 
   cantidadPSEpayco:number 
   cantidadTarjetaEpayco :number
  
  
  
   totalPayU 
   comisionPSEPayU 
   comisionTarjetaPayU
   totalIVAPayU 
   cantidadPSEPayU 
   cantidadTarjetaPayU 
   public doughnutChartLabels: Label[] ;
  
   public doughnutChartData: MultiDataSet;
   
   public doughnutChartType: ChartType ;
  nombre= "";
  administradores=[];
  constructor(private route: ActivatedRoute,
    private service: AdministradoresWebDataService,
    private servicioDashbord: DashbordService
    ) { }

  ngOnInit(): void {
    this.doughnutChartData = [
      [0,0]
    ];
    this.doughnutChartLabels = [["",""]];
    
    this.doughnutChartType= 'doughnut'
    this.nombre =this.route.snapshot.params['nombre'];
 
    this.servicioDashbord.dashbord().subscribe((response)=>{
      console.log(response)
      this.manejarRespuesta(response)
      this.doughnutChartData = [
        [(this.cantidadPSEpayco+this.cantidadPSEPayU), (this.cantidadTarjetaEpayco+this.cantidadTarjetaPayU)],
    
      ];
      this.doughnutChartLabels = ['PSE:' +(this.cantidadPSEpayco+this.cantidadPSEPayU), 'Tarjetas de credito: '+ (this.cantidadTarjetaEpayco+this.cantidadTarjetaPayU)];
      
      this.doughnutChartType= 'doughnut'
      
    })


    
  }

  manejarRespuesta(response){
    this.totalBoleta= response.totalBoleta
    this.totalBoletaServico = response.totalBoletaServico
    this.totalBoletaIVA= response.totalBoletaIVA
    this.totalPalco = response.totalPalco
    this.totalServicioPalco = response.totalServicioPalco;
    this.totalIVAPalco = response.totalIVAPalco;
    this.totalEpayco = response.totalEpayco;
    this.comisionPSEEPayco = response.comisionPSEEPayco;
    this.comisionTarjetaEpayco = response.comisionTarjetaEpayco;
    this.totalIVAEpayco = response.totalIVAEpayco;
    this.cantidadPSEpayco = response.cantidadPSEpayco;
    this.cantidadTarjetaEpayco = response.cantidadTarjetaEpayco;
    this.totalPayU = response.totalPayU;
    this.comisionPSEPayU = response.comisionPSEPayU;
    this.comisionTarjetaPayU = response.comisionTarjetaPayU;
    this.totalIVAPayU = response.totalIVAPayU;
    this.cantidadPSEPayU = response.cantidadPSEPayU;
    this.cantidadTarjetaPayU = response.cantidadTarjetaPayU;


  }

}
