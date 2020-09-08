import { CiudadesDataService } from './../../../service/data/ciudades-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades-admin',
  templateUrl: './ciudades-admin.component.html',
  styleUrls: ['./ciudades-admin.component.css']
})
export class CiudadesAdminComponent implements OnInit {
  ciudades:[];
  message="";
  constructor( private servicio:CiudadesDataService) { }

  ngOnInit(): void {
    this.refrescarCiudades();
  }
  manejarCiudades(response){

    this.ciudades = response;
  }
  deleteCiudad(id){
    this.servicio.deleteCiudad(id).subscribe(response=> {
    this.message= `Se borro la ciudad ${id}`
    this.refrescarCiudades();
    }, error=>{alert("La Ciudad tiene eventos y no la puedes borrar")})

  }

  refrescarCiudades(){
    this.servicio.getCiudades().subscribe( response => this.manejarCiudades(response));
  }
}
