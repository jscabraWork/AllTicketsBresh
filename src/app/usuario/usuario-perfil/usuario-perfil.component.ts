import { Cliente } from './../cliente.model';
import { UsuariosDataService } from './../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CambiarPerfilComponent } from './cambiar-perfil/cambiar-perfil.component';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  user ='';
  usuario:Cliente
  tickets=false
  palcos = false
  datos = true
 
  constructor(private route:ActivatedRoute, private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService, private dialog:MatDialog) { }

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


  openDialog(){
    const dialogRef = this.dialog.open(CambiarPerfilComponent, {
      width: '600px',
      height:'700px',
      
      data: { 
        usuario: this.usuario,
      
      }       
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
      
      this.dialog.closeAll();
      this.ngOnInit()
  
  
  
     
    });
  }



}
