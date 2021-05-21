import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Boleta } from './../../../../eventos/boleta.model';
import { LocalidadesDataService } from './../../../../service/data/localidades-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Localidad } from './../../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletas-patrocinio',
  templateUrl: './boletas-patrocinio.component.html',
  styleUrls: ['./boletas-patrocinio.component.css']
})
export class BoletasPatrocinioComponent implements OnInit {

  localidad:Localidad
  boleta:Boleta
  miId:string
  localidadId
  cantidad
  correo
  nombre
  constructor(private route: ActivatedRoute, private servicio :LocalidadesDataService, private servicioBoletas:BoletasDataService,private router:Router) { }

  ngOnInit(): void {
    this.localidad =
    {
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[],
      servicioPorcentaje:null,
      efectivo:false
    }
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.localidadId = params.get('idLocalidad');
      this.servicio.getLocaliddadPorId(this.localidadId, this.miId).subscribe(response=> this.localidad= response)
    
    })

  }

  agregarBoletas(){
    this.servicioBoletas.addMultiplesBoletasPatrocinio(this.miId,this.localidad.id,this.cantidad,this.correo, this.nombre).subscribe(response=> {response
      alert('Se mandaron las boletas al patrocinador ' + this.nombre)
      this.router.navigate(['/organizadores/organizador/eventos/'+this.miId])
    });

  }

}
