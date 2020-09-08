import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosDataService } from '../service/data/usuarios-data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private service: UsuariosDataService) { }

  usuarios=[];
  message

  ngOnInit(): void {
    console.log(this.service.getAllClientes().subscribe());

this.refrescarUsuarios();
    
  }

  
  handleSuccesfulResponse(response){
    this.usuarios=response;
    
  }
  deleteUsuario(id){
    this.service.deleteUsuario(id).subscribe(response=> {
      this.message= `Se borro el usuario ${id}`
      this.refrescarUsuarios();
      })
  }
  refrescarUsuarios(){
    this.service.getAllClientes().subscribe(
      response => this.handleSuccesfulResponse(response)
    )
  }
}
