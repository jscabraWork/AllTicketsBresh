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
  cantidad
 
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
    numeroDentroDeEvento:null

}
  }

  agregarPalco(){
    this.servicio.agregarPalcosALocalidad(this.idLocalidad,this.palco, this.cantidad).subscribe(response=>{response; alert("Agregados "+this.cantidad+ " Palcos a la localidad")
    
    this.router.navigate([`/administradores/admin/eventos/lista/etapas/${this.miId}/localidades/${this.idEtapa}/${this.idLocalidad}/palcos`]);
  
  },
  error=> alert(error)
  )

  }

}
