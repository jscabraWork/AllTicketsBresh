import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinador } from 'src/app/coordinador-perfil/coordinador.model';
import { CoordinadorServiceService } from 'src/app/service/data/coordinador-service.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-agregar-coordinador',
  templateUrl: './agregar-coordinador.component.html',
  styleUrls: ['./agregar-coordinador.component.css']
})
export class AgregarCoordinadorComponent implements OnInit {


  constructor(private service: CoordinadorServiceService, private router:Router) { }

  coordinador:Coordinador;

  ngOnInit(): void {

    this.coordinador={
      nombre: '',
      tipoDocumento:'',
      numeroDocumento:-1,
      usuario:'',
      contrasena:'',
      tipo:'' 
    }
    
  }
  saveCoordinador(){
    var md5 = new Md5()

    var contra = this.coordinador.contrasena;
    this.coordinador.contrasena = md5.appendStr(contra).end().toString();

    this.service.addCoordinador(this.coordinador).subscribe(
      (response)=>{
      response
      this.router.navigate(['administradores/coordinadores'])
    }
    )
    
    
  }

}
