import { ActivatedRoute, Router } from '@angular/router';
import { OrganizadorDataService } from 'src/app/service/data/organizador-data.service';
import { Organizador } from './../../../organizadores/organizador.model';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-update-organizador',
  templateUrl: './update-organizador.component.html',
  styleUrls: ['./update-organizador.component.css']
})
export class UpdateOrganizadorComponent implements OnInit {

  constructor(private servicio:OrganizadorDataService, private route:ActivatedRoute, private router:Router) { }
  organizador:Organizador;
  id;
  contra
  ngOnInit(): void {
    this.organizador= {
      nombre: '',
    numeroDocumento: -1,
    tipoDocumento: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    eventos: []
    }
    this.route.paramMap.subscribe( params =>{
      this.id =params.get('id')})
    this.servicio.getOrganizadorId(this.id).subscribe(response=> this.manejaResponse(response))
  }

  manejaResponse(response){
    this.organizador=response;
    this.contra = response.contrasena
  }
  saveOrganizador(){

    if(this.contra!= this.organizador.contrasena){
      var md5 = new Md5()

      var contra = this.organizador.contrasena;
      this.organizador.contrasena = md5.appendStr(contra).end().toString();
    }
    this.servicio.updateOrganizador(this.id,this.organizador).subscribe(data=> console.log(data))

    this.router.navigate(['organizadores'])
    alert(' Se modifico el organizador '+ this.organizador.nombre)
    

  }

}
