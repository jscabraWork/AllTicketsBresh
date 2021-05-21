import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-agregar-promotor',
  templateUrl: './agregar-promotor.component.html',
  styleUrls: ['./agregar-promotor.component.css']
})
export class AgregarPromotorComponent implements OnInit {

  promotor:Promotor
  constructor(private servicio: PromotorDataService,  private router:Router) { }

  ngOnInit(): void {
    this.promotor={
      boletasVendidas:[],
      codigoventa:null,
      contrasena:null,
      dineroTotal:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null,
      boletasCanjeadas:[],
      palcosCanjeados:[],
      palcosVendidos:[],
      celular:null,
      correo:null,
      eventos:[]
    }
  }

  save(){
    var md5 = new Md5()

    var contra = this.promotor.contrasena;
    this.promotor.contrasena = md5.appendStr(contra).end().toString();
    this.servicio.addPromotor(this.promotor).subscribe(response=>{
      response
      alert('Se creo el promotor ' + this.promotor.usuario)
      this.router.navigate(['administradores/promotores'])
    })
  }

}
