import { Palco } from './../palco.model';
import { PalcosDataService } from './../../../../../service/data/palcos-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-palco',
  templateUrl: './agregar-palco.component.html',
  styleUrls: ['./agregar-palco.component.css']
})
export class AgregarPalcoComponent implements OnInit {

  miId
  palco:Palco
  idLocalidad
  idEtapa
  numeroArriba
  numeroAbajo
  letra
  constructor(private route: ActivatedRoute,private servicio: PalcosDataService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.idLocalidad =params.get('idLocalidad');
      this.idEtapa =params.get('idEtapa');

      
     
})


this.palco={
  id:null,
    precio:null,
	  precioParcialPagado:null,
	  servicio:null,
	  nombreEvento:null,
	  nombre:null,
    personasAdentro: null,
    personasMaximas:null,
    reservado:null,
    vendido:null,
    numeroDentroDeEvento:null,
    fechaVendido : null,
    servicioIva:null,
    proceso:null,
    disponible:null,
    idLocalidad:null,
    reserva:null,
    precioAlterno:null,
    servicioAlterno:null,	  
    servicioIvaAlterno:null,
    adiciones: null,
    maximoAdiciones: null,
    precioAdicion: null,
    servicioAdicion: null,
    servicioIvaAdicion:null,
    metodo:null
}
  }

  agregarPalco(){
    this.servicio.agregarPalcosALocalidad(this.idLocalidad,this.palco, this.numeroArriba, this.numeroAbajo, this.letra).subscribe(response=>{response; alert("Agregados "+(this.numeroArriba - this.numeroAbajo +1)+ " Palcos a la localidad")
    
    this.router.navigate([`/administradores/admin/eventos/lista/etapas/${this.miId}/localidades/${this.idEtapa}/${this.idLocalidad}/palcos`]);
  
  },
  error=> alert(error)
  )

  }

}
