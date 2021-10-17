import { Evento } from './../../eventos/evento.model';
import { Organizador } from './../organizador.model';
import { HttpClient } from '@angular/common/http';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizadorDataService } from 'src/app/service/data/organizador-data.service';

@Component({
  selector: 'app-organizador-perfil',
  templateUrl: './organizador-perfil.component.html',
  styleUrls: ['./organizador-perfil.component.css']
})
export class OrganizadorPerfilComponent implements OnInit {
  usuario="";
  organizador:Organizador;
 
  
  constructor(private route: ActivatedRoute, private organizadorDataService:OrganizadorDataService, public autenticador: HardcodedAutheticationService) { }

  ngOnInit(): void {

    if(this.autenticador.getOrganizador()){
    this.usuario =this.autenticador.getOrganizador();
  }
  else if(this.autenticador.getAdmin()){
    this.route.paramMap.subscribe( params =>{
      this.usuario =params.get('user');
    })
  }
    this.organizadorDataService.getOrganizadorUsuario(this.usuario).subscribe(response => this.organizador=response);
 
  
  }

 
}
