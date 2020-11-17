import { LoginComponent } from './../login/login.component';
import { RegistrarseComponent } from './../registrarse/registrarse.component';
import { MatDialog } from '@angular/material/dialog';
import { HardcodedAutheticationService } from './../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactanosComponent } from '../contactanos/contactanos.component';
import { SePromotorComponent } from '../se-promotor/se-promotor.component';
import { CalendarioComponent } from '../calendario/calendario.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario:string;
  constructor(private router: Router,public autenticacion: HardcodedAutheticationService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    
  }

  cargarUsuario(){
    this.usuario=this.autenticacion.getUsuario();
    this.router.navigate(['/usuarios/usuario',this.usuario]);
  }
  cargarAdmin(){
    this.usuario=this.autenticacion.getAdmin();
    this.router.navigate(['/administradores/admin',this.usuario]);
  }
  cargarOrganizador(){
    this.usuario=this.autenticacion.getOrganizador();
    this.router.navigate(['organizadores/organizador',this.usuario]);
  }
  cargarMinisterio(){
    this.usuario=this.autenticacion.getMinisterio();
    this.router.navigate(['perfilMinisterio',this.usuario]);
  }
  cargarPuntoFisico(){
    this.usuario=this.autenticacion.getPuntoFisico();
    this.router.navigate(['puntoFisico',this.usuario]);
  }
  cargarPromotor(){
    this.usuario = this.autenticacion.getPromotor();
    this.router.navigate(['promotor', this.usuario])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrarseComponent, {
      width: '600px',
      height:'700px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  openDialog5(): void {
    const dialogRef = this.dialog.open(SePromotorComponent, {
      width: '600px',
      height:'900px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  openDialog2(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      height:'600px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
 
      
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(ContactanosComponent, {
      width: '600px',
      height:'600px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  openDialog7(){
 
    const dialogRef = this.dialog.open(CalendarioComponent, {
      width: '600px',
      height:'600px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
