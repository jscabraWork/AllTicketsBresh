import { Palco } from './../palco.model';
import { PalcosDataService } from './../../../../../service/data/palcos-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-palcos',
  templateUrl: './update-palcos.component.html',
  styleUrls: ['./update-palcos.component.css']
})
export class UpdatePalcosComponent implements OnInit {

  miId
  palco:Palco
  idLocalidad
  idEtapa
  cantidad
  idPalco

  constructor(private route: ActivatedRoute,private servicio: PalcosDataService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.idLocalidad =params.get('idLocalidad');
      this.idEtapa =params.get('idEtapa');
      this.idPalco =params.get('idPalco');
      this.servicio.getPalco(this.idLocalidad,this.idPalco).subscribe(response=> this.palco=response)
     
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
    idLocalidad:null

}
  }

  modificarPalco(){
    this.servicio.modificarPalco(this.palco.id,this.idLocalidad,this.palco).subscribe(response=>{response; alert("Se modifico el palco "+this.palco.id)
    
    this.router.navigate([`/administradores/admin/eventos/lista/etapas/${this.miId}/localidades/${this.idEtapa}/${this.idLocalidad}/palcos`]);
  
  },
  error=> alert(error)
  );

  }

}
