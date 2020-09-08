import { AdministradoresWebDataService } from './../../service/data/administradores-web-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})
export class AdminPerfilComponent implements OnInit {
  nombre= "";
  administradores=[];
  constructor(private route: ActivatedRoute,
    private service: AdministradoresWebDataService) { }

  ngOnInit(): void {
    this.nombre =this.route.snapshot.params['nombre'];
 
  
    //console.log(this.service.getAllAdministradores());
  }



}
