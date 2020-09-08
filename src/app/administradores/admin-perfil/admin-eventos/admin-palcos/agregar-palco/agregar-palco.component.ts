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
  constructor(private route: ActivatedRoute,private servicio: PalcosDataService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
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
    vendido:null

}
  }

  agregarPalco(){
    this.servicio.agregarPalcoAUnEvento(this.miId,this.palco).subscribe(response=>{response; alert("Agregado el palco "+ this.palco.nombre)
    
    this.router.navigate([`/administradores/admin/eventos/lista/${this.miId}/palcos`]);
  
  },
  error=> alert(error)
  )

  }

}
