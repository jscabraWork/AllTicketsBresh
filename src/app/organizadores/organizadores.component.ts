import { Component, OnInit } from '@angular/core';
import { OrganizadorDataService } from '../service/data/organizador-data.service';
import { HardcodedAutheticationService } from '../service/hardcoded-authetication.service';

@Component({
  selector: 'app-organizadores',
  templateUrl: './organizadores.component.html',
  styleUrls: ['./organizadores.component.css']
})
export class OrganizadoresComponent implements OnInit {

  organizadores=[];
  message:string;
  constructor( private service: OrganizadorDataService,public autenticacion: HardcodedAutheticationService ) { }

  ngOnInit(): void {
this.refrescar();
    
  }
  refrescar()
  {
    this.service.getUsuarios().subscribe(
      response => this.handleSuccesfullResponse(response)
    )
  }

  handleSuccesfullResponse(response){

    this.organizadores= response;
  }
  deleteOrganizador(id:number){
    
    this.service.deleteOrganizador(id).subscribe(response => {this.refrescar(), this.message="se borro el organizador con el id " + id } ,error => {alert("Este organizador tiene eventos y no lo puedes borrar")});
}
}
