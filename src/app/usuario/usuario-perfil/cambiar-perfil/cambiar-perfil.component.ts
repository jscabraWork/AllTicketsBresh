import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosDataService } from 'src/app/service/data/usuarios-data.service';
import { Cliente } from '../../cliente.model';

@Component({
  selector: 'app-cambiar-perfil',
  templateUrl: './cambiar-perfil.component.html',
  styleUrls: ['./cambiar-perfil.component.css']
})
export class CambiarPerfilComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dataServicio:UsuariosDataService,
    private dialog:MatDialog) { }
  usuario:Cliente
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
    this.usuario= this.data.usuario;

  }

  saveUsuario(){
    console.log(this.usuario)
    this.dataServicio.updateCliente(this.usuario.numeroDocumento,this.usuario).subscribe(data=>{console.log(data)
      this.dialog.closeAll() 
      alert('Cambiaste exitosamente tus datos '+ this.usuario.usuario)
     
    },
    error=>alert(error.error.message))
   
    

  }
}
