import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { Localidad } from '../localidad.model';

@Component({
  selector: 'app-agregar-adiciones-palcos',
  templateUrl: './agregar-adiciones-palcos.component.html',
  styleUrls: ['./agregar-adiciones-palcos.component.css']
})
export class AgregarAdicionesPalcosComponent implements OnInit {

  precio
  servicio
  iva
  adiciones
  maximo
  miId
  idLocalidad
  localidad:Localidad;
  idEtapa
  constructor(private route: ActivatedRoute,private router: Router,private serviciolocalidad: LocalidadesDataService) { }

  ngOnInit(): void {
    this.localidad ={
      id:null,
      nombre: "",
      precio:null,
      
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[],
      servicioPorcentaje:null,
      efectivo:false,
      maximoVender:null
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.idLocalidad=params.get('idLocalidad');
      this.idEtapa = params.get('idEtapa');
      this.serviciolocalidad.getLocaliddadPorId(this.idLocalidad, this.miId).subscribe(response=>{this.localidad=response
      console.log(response)
      
      })
    })
  }

  saveLocalidad(){
    this.serviciolocalidad.  setAdiciones(this.idLocalidad,this.precio,this.servicio,this.iva,this.adiciones,this.maximo).subscribe(data=>{data
      alert("Se modificio la localidad " + this.localidad.nombre)
      this.router.navigate(['/administradores/admin/eventos/lista/etapas/'+this.miId +'/localidades/'+ this.idEtapa])

     },
     error=> alert(error)
     
     )
  }
}
