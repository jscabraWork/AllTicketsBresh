import { Router } from '@angular/router';
import { PuntoFisico } from './../../../../puntos-fisicos/puntoFisico.model';
import { PuntosFisicosDataService } from './../../../../service/data/puntos-fisicos-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-punto',
  templateUrl: './agregar-punto.component.html',
  styleUrls: ['./agregar-punto.component.css']
})
export class AgregarPuntoComponent implements OnInit {

  constructor(private servicio: PuntosFisicosDataService, private router:Router) { }
  punto:PuntoFisico
  ngOnInit(): void {
    this.punto={
      contrasena:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null
    }

  }

  savePunto(){
    this.servicio.agregarPunto(this.punto).subscribe(response=>{  alert('Se creo el punto fisico ' + this.punto.nombre);
    this.router.navigate(['administradores/puntosFisicos'])
      },
      error=> alert(error.message)
    )
  }

}
