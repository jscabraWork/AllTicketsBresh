import { Cliente } from './../cliente.model';
import { UsuariosDataService } from './../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  user ='';
  usuario:Cliente
  constructor(private route:ActivatedRoute, private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService) { }

  ngOnInit(): void {
    this.usuario= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        direccion:"",
        publicidad:null,
        boletas:[],
        palcos:[]
    }

    this.user= this.autenticador.getUsuario();
    this.dataServicio.getCliente(this.user).subscribe(response => this.usuario=response)

  }

  saveUsuario(){
    console.log(this.usuario)
    this.dataServicio.updateCliente(this.usuario.numeroDocumento,this.usuario).subscribe(data=>{console.log(data)  })
   
    alert('Cambiaste exitosamente tus datos '+ this.usuario.usuario)

  }

}
