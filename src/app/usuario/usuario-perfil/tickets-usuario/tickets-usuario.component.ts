import { Boleta } from './../../../eventos/boleta.model';
import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { LocalidadesDataService } from './../../../service/data/localidades-data.service';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Cliente } from './../../cliente.model';
import { UsuariosDataService } from './../../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../../service/hardcoded-authetication.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-usuario',
  templateUrl: './tickets-usuario.component.html',
  styleUrls: ['./tickets-usuario.component.css']
})
export class TicketsUsuarioComponent implements OnInit {

  user ='';
  usuario:Cliente
  nombresEventos:string[]=[]
  localidades:Localidad[]=[]
  boletas:Boleta[]=[]
  nombreEvento;

  nombreLocalidad;
  constructor( private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService, private boletaService: BoletasDataService, private localidadService:LocalidadesDataService) { }

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
    this.dataServicio.getCliente(this.user).subscribe(response => {this.usuario=response;})

  }



}
