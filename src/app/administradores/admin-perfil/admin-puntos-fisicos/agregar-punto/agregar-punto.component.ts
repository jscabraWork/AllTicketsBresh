import { Router } from '@angular/router';
import { PuntoFisico } from './../../../../puntos-fisicos/puntoFisico.model';
import { PuntosFisicosDataService } from './../../../../service/data/puntos-fisicos-data.service';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';

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
    var md5 = new Md5()

    var contra = this.punto.contrasena;
    this.punto.contrasena = md5.appendStr(contra).end().toString();
    this.servicio.agregarPunto(this.punto).subscribe(response=>{  alert('Se creo el punto fisico ' + this.punto.nombre);
    this.router.navigate(['administradores/puntosFisicos'])
      },
      error=> alert(error.message)
    )
  }

}
