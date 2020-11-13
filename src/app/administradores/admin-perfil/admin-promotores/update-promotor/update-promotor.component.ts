import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-update-promotor',
  templateUrl: './update-promotor.component.html',
  styleUrls: ['./update-promotor.component.css']
})
export class UpdatePromotorComponent implements OnInit {

  promotor:Promotor
  id;
  contra
  constructor(private servicio: PromotorDataService,  private router:Router,  private route: ActivatedRoute) { }

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
      correo:null
    }
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id')});
    this.servicio.getPromotorById(this.id).subscribe(response=>{
      this.promotor=response
      this.contra = response.contrasena

    })
  }
  save(){
    if(this.contra != this.promotor.contrasena){
      var md5 = new Md5()

      var contra = this.promotor.contrasena;
      this.promotor.contrasena = md5.appendStr(contra).end().toString();
    }
    this.servicio.updatePromotor(this.promotor, this.id).subscribe(response=>
     { response
      alert('Se modificio el promotor ' + this.promotor.usuario)
      this.router.navigate(['administradores/promotores'])
    }
      
      )
  }

  

}
