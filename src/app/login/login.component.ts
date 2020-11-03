import { RegistrarseComponent } from './../registrarse/registrarse.component';
import { MatDialog } from '@angular/material/dialog';
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
    public autenticacion: HardcodedAutheticationService,
    public dialog: MatDialog) { 

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
            this.dialog.closeAll()
            this.ngOnInit()
            
 
          }
          
          else if(response.tipo=='promotor'){
            sessionStorage.setItem('promotor',this.username);
            this.invalidLogin=false;
            this.dialog.closeAll()
            this.ngOnInit()
            this.router.navigate(['promotor',this.username]);
 
          }

          else if(response.tipo=='admin' )
          {
        
            this.router.navigate(['administradores/admin',this.username]);
            this.invalidLogin=false;
            this.dialog.closeAll()
            sessionStorage.setItem('administrador',this.username);

          }
          else if(response.tipo=='organizador')
          {
            sessionStorage.setItem('organizador',this.username);
            this.invalidLogin=false;
            this.dialog.closeAll()
            this.router.navigate(['organizadores/organizador',this.username]);
            
            
          }
          else if(response.tipo=='puntoF')
          {
            sessionStorage.setItem('puntoF',this.username);
            this.invalidLogin=false;
            this.dialog.closeAll()
            this.router.navigate(['puntoFisico',this.username]);
            
            
          }
          else if(response.tipo=='ministerio')
          {
            sessionStorage.setItem('ministerio',this.username);
            this.invalidLogin=false;
            this.dialog.closeAll()
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



  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrarseComponent, {
      width: '600px',
      height:'750px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
