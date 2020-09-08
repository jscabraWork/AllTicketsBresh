import { OrganizadorDataService } from './../../../service/data/organizador-data.service';
import { Organizador } from './../../../organizadores/organizador.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-organizador',
  templateUrl: './agregar-organizador.component.html',
  styleUrls: ['./agregar-organizador.component.css']
})
export class AgregarOrganizadorComponent implements OnInit {

  constructor(private servicio:OrganizadorDataService, private router: Router) { }
organizador:Organizador;
  ngOnInit(): void {
    this.organizador= {
      nombre: '',
    numeroDocumento: -1,
    tipoDocumento: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    eventos: []
    }
  }

  saveOrganizador(){
    this.servicio.addOrganizador(this.organizador).subscribe(data=> console.log(data))
    this.router.navigate(['organizadores'])
    alert(' Se agrego el organizador '+ this.organizador.nombre)

  }

}
