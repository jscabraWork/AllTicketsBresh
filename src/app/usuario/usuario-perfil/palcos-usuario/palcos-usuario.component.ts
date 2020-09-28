import { Cliente } from './../../cliente.model';
import { UsuariosDataService } from './../../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palcos-usuario',
  templateUrl: './palcos-usuario.component.html',
  styleUrls: ['./palcos-usuario.component.css']
})
export class PalcosUsuarioComponent implements OnInit {

  user ='';
  usuario:Cliente
  constructor( private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService) { }

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
    this.dataServicio.getCliente(this.user).subscribe(response => {this.usuario=response;})
  }

}
