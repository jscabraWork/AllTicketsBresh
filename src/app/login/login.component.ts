import { HardcodedAutheticationService } from './../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username="";
  password="";
  errorMessage="Invalid credentials";
  invalidLogin =false;
  constructor( private router: Router,
    public autenticacion: HardcodedAutheticationService) { 

  }

  ngOnInit(): void {
  }


  handleLogin(){

   this.autenticacion.authenticate(this.username,this.password).subscribe( response=>

    {
  
      if(response!=null){
        
        if(response.contrasena == this.password){
          
          if(response.tipo=='usuario'){
            sessionStorage.setItem('usuario',this.username);
            this.invalidLogin=false;
            this.router.navigate(['usuarios/usuario',this.username]);
            
9 
          }
          
          else if(response.tipo=='admin' )
          {
        
            this.router.navigate(['administradores/admin',this.username]);
            this.invalidLogin=false;
            sessionStorage.setItem('administrador',this.username);
            
            
          
                
          }
          else if(response.tipo=='organizador')
          {
            sessionStorage.setItem('organizador',this.username);
            this.invalidLogin=false;
            this.router.navigate(['organizadores/organizador',this.username]);
            
            
          }
          else if(response.tipo=='puntoF')
          {
            sessionStorage.setItem('puntoF',this.username);
            this.invalidLogin=false;
            this.router.navigate(['puntoFisico',this.username]);
            
            
          }
          else if(response.tipo=='ministerio')
          {
            sessionStorage.setItem('ministerio',this.username);
            this.invalidLogin=false;
            this.router.navigate(['perfilMinisterio',this.username]);
            
            
          }
        
       }
       else{
      
        this.invalidLogin=true;
        this.username="";
        this.password="";
      }
      
      }
       else{
      
        this.invalidLogin=true;
        this.username="";
        this.password="";
      }
    },
    error=> (this.invalidLogin=true)
   );
 
  }

}
