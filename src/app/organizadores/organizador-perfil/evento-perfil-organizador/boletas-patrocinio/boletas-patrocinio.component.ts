import { Boleta } from './../../../../eventos/boleta.model';
import { LocalidadesDataService } from './../../../../service/data/localidades-data.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private servicio :LocalidadesDataService) { }

  ngOnInit(): void {
    this.localidad =
    {
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null
    }
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.localidadId = params.get('idLocalidad');
      this.servicio.getLocaliddadPorId(this.localidadId, this.miId).subscribe(response=> this.localidad= response)
    
    })

  }

  agregarBoletas(){

  }

}
