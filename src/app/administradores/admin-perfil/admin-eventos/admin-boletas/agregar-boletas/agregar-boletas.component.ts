import { ActivatedRoute, Router } from '@angular/router';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Boleta } from './../../../../../eventos/boleta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-boletas',
  templateUrl: './agregar-boletas.component.html',
  styleUrls: ['./agregar-boletas.component.css']
})
export class AgregarBoletasComponent implements OnInit {

  boleta:Boleta;
  cantidad:number;
  miId:string;
  idLocalidad
  nombre
  idEtapa
  constructor(private route: ActivatedRoute,private servicio: BoletasDataService,  private router:Router) { }

  ngOnInit(): void {
    this.boleta={
      id: 0,
      
      seccionSilla:null,
    imagenQr:null,
    precio:0,
    vendida:false,
    reservado:false,
  localidadNombre:null,
  localidadIdNumero:null,
  nombreEvento:null,
  servicio:null,
  utilizada:null,
  servicioIva:null,
  disponible:null,
	
	reserva:null,
    }
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.idLocalidad= params.get('idLocalidad');
      
      this.idEtapa =params.get('idEtapa');
     
  })
  }


  agregarBoletas(){
    this.servicio.addMultiplesBoletas(this.miId,this.boleta, this.idLocalidad,this.cantidad).subscribe(data=>data)
    
    this.router.navigate(['/administradores/admin/eventos/lista/etapas/'+this.miId+'/localidades/'+this.idEtapa+'/'+this.idLocalidad+'/boletas']);
    
  }

}
