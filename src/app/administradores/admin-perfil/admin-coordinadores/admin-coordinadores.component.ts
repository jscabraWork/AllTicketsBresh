import { Component, OnInit } from '@angular/core';
import { CoordinadorServiceService } from 'src/app/service/data/coordinador-service.service';

@Component({
  selector: 'app-admin-coordinadores',
  templateUrl: './admin-coordinadores.component.html',
  styleUrls: ['./admin-coordinadores.component.css']
})
export class AdminCoordinadoresComponent implements OnInit {


  message: string
  coordinadores=[
 
  ];

  constructor(private service:CoordinadorServiceService) { }


  ngOnInit(): void {
       
    this.refrescarcordi();
  }

  handleSuccesfulResponse(response){
    this.coordinadores=response;
   
  }
  borrarCoordinador(id){

    this.service.deleteCoordinador(id).subscribe(response=> {
      this.message= `Se borro el coordinador ${id}`
      this.refrescarcordi();
      })

  }
  refrescarcordi(){
    this.service.getAllCoordinadores().subscribe(
      response => this.handleSuccesfulResponse(response)
    );
  }

}
