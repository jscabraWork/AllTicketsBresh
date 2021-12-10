import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordinador } from 'src/app/coordinador-perfil/coordinador.model';
import { CoordinadorServiceService } from 'src/app/service/data/coordinador-service.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-update-coordinador',
  templateUrl: './update-coordinador.component.html',
  styleUrls: ['./update-coordinador.component.css']
})
export class UpdateCoordinadorComponent implements OnInit {


  constructor(private router:Router, private servicio: CoordinadorServiceService, private route: ActivatedRoute) { }
  coordinador:Coordinador;
  id;
  contra
  ngOnInit(): void {

    this.coordinador={
      nombre: '',
      tipoDocumento:'',
      numeroDocumento:-1,
      usuario:'',
      contrasena:'',
      tipo:'' 
    }
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id')});
    this.servicio.getCoordinador(this.id).subscribe(response => this.manejarRespuesta(response));

  }

  manejarRespuesta(response){
    this.coordinador= response;
    this.contra = response.contrasena
  }
  saveCoordinador(){
    if(this.contra!= this.coordinador.contrasena){
      var md5 = new Md5()

      var contra = this.coordinador.contrasena;
      this.coordinador.contrasena = md5.appendStr(contra).end().toString();
    }
    this.servicio.updateCoordinador(this.id,this.coordinador).subscribe(data=>data)
    alert('Se modifico el coordinador ' + this.coordinador.nombre)
    this.router.navigate(['coordinador'])
  }

}
