import { Ciudad } from './../../../ciudades/ciudad.model';
import { CiudadesDataService } from './../../../service/data/ciudades-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-ciudad',
  templateUrl: './agregar-ciudad.component.html',
  styleUrls: ['./agregar-ciudad.component.css']
})
export class AgregarCiudadComponent implements OnInit {

  ciudad:Ciudad;
  selectedFile:null;
  constructor(private servicio: CiudadesDataService, private router:Router) { }

  ngOnInit(): void {
    this.ciudad={
      id: -1,
    nombre:'',
    imagen:null,
    temperatura:-1,
    visible:true
    }
  }

 

  saveCiudad(){
    this.servicio.addCiudad(this.ciudad).subscribe(data=>console.log(data))
    this.router.navigate(['/administradores/admin/ciudades/lista']);
  }

}
