import { AdministradoresWebDataService } from './../../../service/data/administradores-web-data.service';
import { Admin } from './../../admin.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  constructor(private router:Router, private servicio: AdministradoresWebDataService, private route: ActivatedRoute) { }
  administrador:Admin;
  id;
  ngOnInit(): void {

    this.administrador={
      nombre: '',
      tipoDocumento:'',
      numeroDocumento:-1,
      usuario:'',
      contrasena:'',
      tipo:'' 
    }
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id')});
    this.servicio.getAdministrador(this.id).subscribe(response => this.manejarRespuesta(response));

  }

  manejarRespuesta(response){
    this.administrador= response;
  }
  saveAdmin(){
    this.servicio.updateAdministrador(this.id,this.administrador).subscribe(data=>data)
    alert('Se modifico el administrador ' + this.administrador.nombre)
    this.router.navigate(['administradores'])
  }

}
