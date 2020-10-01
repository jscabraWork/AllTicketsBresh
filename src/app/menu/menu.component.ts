import { HardcodedAutheticationService } from './../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario:string;
  constructor(private router: Router,public autenticacion: HardcodedAutheticationService) { }
  
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

}
