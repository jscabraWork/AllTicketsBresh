import { ActivatedRoute, Router } from '@angular/router';
import { LocalidadesDataService } from './../../../../../service/data/localidades-data.service';
import { Boleta } from './../../../../../eventos/boleta.model';
import { Localidad } from './../localidad.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-localidad',
  templateUrl: './agregar-localidad.component.html',
  styleUrls: ['./agregar-localidad.component.css']
})
export class AgregarLocalidadComponent implements OnInit {
  miId
  constructor(private servicio: LocalidadesDataService, private route: ActivatedRoute, private router: Router) { }

  localidad:Localidad;
  ngOnInit(): void {
    this.localidad ={
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');})
  }


  saveLocalidad(){
    this.servicio.addLocalidadAEvento(this.localidad, this.miId).subscribe(data=> data)
    alert('Se creo la localidad ' + this.localidad.nombre)
    this.router.navigate(['/administradores/admin/eventos/lista/localidades/'+this.miId])

  }

}
