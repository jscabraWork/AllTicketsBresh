import { UsuariosDataService } from './../service/data/usuarios-data.service';
import { Cliente } from './../usuario/cliente.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  usuario:Cliente;
  constructor(private service:UsuariosDataService, private router:Router) { }

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
        publicidad:true,
        boletas:[],
        palcos:[]
    }
    
  }
  

  saveUsuario(){
    
    this.service.createCliente(this.usuario).subscribe(data=>{console.log(data),alert("Se ha creado exitosamente el usuario "+this.usuario.usuario),  this.router.navigate(['login'])},
    error=>{alert(error.error.message);
      console.log(error)
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
