import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuariosDataService } from 'src/app/service/data/usuarios-data.service';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';
import { Md5 } from 'ts-md5';
import { Cliente } from '../../cliente.model';

@Component({
  selector: 'app-cambiar-perfil',
  templateUrl: './cambiar-perfil.component.html',
  styleUrls: ['./cambiar-perfil.component.css']
})
export class CambiarPerfilComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dataServicio:UsuariosDataService,
    private dialog:MatDialog,
    private autenticador: HardcodedAutheticationService,
    private router: Router) { }
  usuario:Cliente
  contra
  ngOnInit(): void {
    this.usuario= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        
        publicidad:null,
        boletas:[],
        palcos:[]
    }
    this.contra = this.data.usuario.contrasena;
    this.usuario= this.data.usuario;
    
 

  }

  saveUsuario(){

    if(!this.usuario.correo.includes(" "))
{
    if(this.contra != this.usuario.contrasena){
      var md5 = new Md5()

      var contra = this.usuario.contrasena;
      this.usuario.contrasena = md5.appendStr(contra).end().toString();
    }
    if(this.usuario.correo!=this.usuario.usuario){

      
    this.usuario.usuario = this.usuario.correo
    
  }
    this.dataServicio.updateCliente(this.usuario.numeroDocumento,this.usuario).subscribe(data=>{console.log(data)
      if(this.autenticador.getUsuario()){
      sessionStorage.setItem('usuario',this.usuario.usuario);
    }
    else if(this.autenticador.getAdmin()){
      this.router.navigate(['/usuarios/usuario/admin/'+this.usuario.usuario])
    }
      this.dialog.closeAll() 
      alert('Cambiaste exitosamente tus datos '+ this.usuario.usuario)
     
    },
    error=>alert(error.error.message))
   
  }
  else{
    alert("El correo no permite espacios en blanco")
  }
    

  }
}
