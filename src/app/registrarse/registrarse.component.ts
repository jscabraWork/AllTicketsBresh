import { UsuariosDataService } from './../service/data/usuarios-data.service';
import { Cliente } from './../usuario/cliente.model';
import {MatDialog} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { TerminosYCondicionesComponent } from '../terminos-ycondiciones/terminos-ycondiciones.component';
import { TratamientoDatosComponent } from '../tratamiento-datos/tratamiento-datos.component';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  usuario:Cliente;
  confimarcionCorreo:String
  confimarcionDocumento:null
  constructor(private service:UsuariosDataService, private router:Router, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.confimarcionCorreo =""
    this.confimarcionDocumento =null
    this.usuario= {
      nombre: null,
      numeroDocumento: null,
      tipoDocumento: "Cedula",
      usuario: "",
      contrasena:null,
      celular:null,
      correo:null,
        
        publicidad:false,
        boletas:[],
        palcos:[]
    }
    this.function()
  }
  

  saveUsuario(){
    

if(!this.usuario.correo.includes(" "))
{

  if(this.confimarcionCorreo==this.usuario.correo)
  {

    if(this.confimarcionDocumento==this.usuario.numeroDocumento){


   if(!this.usuario.numeroDocumento.includes(" ") && !this.usuario.numeroDocumento.includes(".")){   
    var md5 = new Md5()

    var contra = this.usuario.contrasena;
    this.usuario.contrasena = md5.appendStr(contra).end().toString();
    this.usuario.usuario = this.usuario.correo
    
    this.service.createCliente(this.usuario).subscribe(response=>{

      response
      alert("Se ha creado exitosamente el usuario "+this.usuario.usuario + " Revisa tu correo, debio llegar un correo de confirmación") ,
      this.dialog.closeAll(),
      this.service.mandarCorreo(this.usuario, contra).subscribe(response=>response)
    
  },
    error=>{
      error
      this.usuario.contrasena =""
      }
    
    )
  

    }
    else{
      alert("El número de documento no puede contener espacios ni puntos")
    }


  }
  else{
    alert("Verifica el numero de documento")
  }
  }
  else{
    alert("Verifica el correo")
  }
  

  }
  else{
    alert("El correo no permite espacios en blanco")
  }
    




  }
function() {
    var myInput = document.getElementById('bloquear');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }

    var myInput = document.getElementById('bloquear2');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
  }

  publicidad(){
    if(this.usuario.publicidad==true){
      this.usuario.publicidad=false
    }
    else{
      this.usuario.publicidad=true
    }
  }

  terminosYCondiciones(){
    const dialogRef = this.dialog.open(TerminosYCondicionesComponent, {
      width: '600px',
      height:'750px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  
  tratamientoDatos(){
    const dialogRef = this.dialog.open(TratamientoDatosComponent, {
      width: '600px',
      height:'750px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
