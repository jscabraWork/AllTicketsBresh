import { PuntosFisicosDataService } from './../../../../service/data/puntos-fisicos-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PuntoFisico } from './../../../../puntos-fisicos/puntoFisico.model';
import { Component, OnInit } from '@angular/core';

import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-update-punto',
  templateUrl: './update-punto.component.html',
  styleUrls: ['./update-punto.component.css']
})
export class UpdatePuntoComponent implements OnInit {

  constructor(private servicio: PuntosFisicosDataService, private router:Router, private route: ActivatedRoute) { }
  punto:PuntoFisico
  id
  contra
  ngOnInit(): void {
    this.punto={
      contrasena:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null
    }

    this.route.paramMap.subscribe( params =>{
      this.id =params.get('id');
    this.servicio.getPuntoPorId(this.id).subscribe(response=> {this.punto=response
    this.contra = this.punto.contrasena
    }) 
  })
  }

  savePunto(){
    if(this.contra != this.punto.contrasena){
      var md5 = new Md5()
      
      var contra = this.punto.contrasena;
      this.punto.contrasena = md5.appendStr(contra).end().toString();
    }
    this.servicio.updatePunto(this.punto).subscribe(response=>{  alert('Se modifico el punto fisico ' + this.punto.nombre);
    this.router.navigate(['administradores/puntosFisicos'])
      },
      error=> alert(error.message))
  }

}
