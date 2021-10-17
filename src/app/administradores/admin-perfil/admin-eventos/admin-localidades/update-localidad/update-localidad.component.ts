import { LocalidadesDataService } from './../../../../../service/data/localidades-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Localidad } from './../localidad.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-localidad',
  templateUrl: './update-localidad.component.html',
  styleUrls: ['./update-localidad.component.css']
})
export class UpdateLocalidadComponent implements OnInit {

  miId
  idLocalidad
  localidad:Localidad;
  idEtapa
  constructor(private route: ActivatedRoute,private router: Router,private servicio: LocalidadesDataService) { }

  ngOnInit(): void {
    this.localidad ={
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
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
      this.servicio.getLocaliddadPorId(this.idLocalidad, this.miId).subscribe(response=>{this.localidad=response
      console.log(response)
      
      })
    })

  }

  
  saveLocalidad(){
    this.servicio.modificarLocalidad(this.localidad,this.miId, this.idLocalidad, this.idEtapa).subscribe(data=>{data
       alert("Se modificio la localidad " + this.localidad.nombre)
       this.router.navigate(['/administradores/admin/eventos/lista/etapas/'+this.miId +'/localidades/'+ this.idEtapa])

      },
      error=> alert(error)
      
      )

   

  }

}
