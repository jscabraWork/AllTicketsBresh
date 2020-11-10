import { UsuariosDataService } from './../service/data/usuarios-data.service';
import { Cliente } from './../usuario/cliente.model';
import {MatDialog} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  usuario:Cliente;
  constructor(private service:UsuariosDataService, private router:Router, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.usuario= {
      nombre: null,
      numeroDocumento: null,
      tipoDocumento: null,
      usuario: null,
      contrasena:null,
      celular:null,
      correo:null,
        direccion:null,
        publicidad:false,
        boletas:[],
        palcos:[]
    }
    
  }
  

  saveUsuario(){
    
    var md5 = new Md5()

    var contra = this.usuario.contrasena;
    this.usuario.contrasena = md5.appendStr(contra).end().toString();
    this.service.createCliente(this.usuario).subscribe(response=>{console.log(response),
      alert("Se ha creado exitosamente el usuario "+this.usuario.usuario + " Revisa tu correo, debio llegar un correo de confirmación") ,
      this.dialog.closeAll(),
      this.service.mandarCorreo(this.usuario, contra).subscribe(response=>response)
    
  },
    error=>{alert(error.error.message);
      console.log(error)
      this.usuario.contrasena =""
      }
    
    )
   
    

  }

  publicidad(){
    if(this.usuario.publicidad==true){
      this.usuario.publicidad=false
    }
    else{
      this.usuario.publicidad=true
    }
  }

  
}
