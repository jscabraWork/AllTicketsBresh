import { Cliente } from './../../../usuario/cliente.model';
import { AdministradoresWebDataService } from './../../../service/data/administradores-web-data.service';
import { Admin } from './../../admin.model';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {

  constructor(private service: AdministradoresWebDataService, private router:Router) { }

  administrador:Admin;
  clienteAgregado:Cliente
  ngOnInit(): void {

    this.administrador={
      nombre: '',
      tipoDocumento:'',
      numeroDocumento:-1,
      usuario:'',
      contrasena:'',
      tipo:'' 
    }
    
  }
  saveAdmin(){
    var md5 = new Md5()

    var contra = this.administrador.contrasena;
    this.administrador.contrasena = md5.appendStr(contra).end().toString();
    this.service.addAdministrador(this.administrador).subscribe(data=>data)
    alert('Se creo el administrador ' + this.administrador.nombre)
    this.router.navigate(['administradores'])
  }

}
