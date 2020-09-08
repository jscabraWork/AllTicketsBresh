import { AdministradoresWebDataService } from './../service/data/administradores-web-data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  message: string
  administradores=[
 
  ];

  constructor(private service:AdministradoresWebDataService) { }


  ngOnInit(): void {
       
    this.refrescaradmin();
  }

  handleSuccesfulResponse(response){
    this.administradores=response;
   
  }
  borrarAdmin(id){

    this.service.deleteAdministrador(id).subscribe(response=> {
      this.message= `Se borro la ciudad ${id}`
      this.refrescaradmin();
      })

  }
 refrescaradmin(){
    this.service.getAllAdministradores().subscribe(
      response => this.handleSuccesfulResponse(response)
    );
  }

}
