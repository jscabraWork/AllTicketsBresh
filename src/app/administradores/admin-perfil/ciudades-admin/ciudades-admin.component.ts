import { CiudadesDataService } from './../../../service/data/ciudades-data.service';
import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/ciudades/ciudad.model';
import { AgregarFotoCiudadComponent } from './agregar-foto-ciudad/agregar-foto-ciudad.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ciudades-admin',
  templateUrl: './ciudades-admin.component.html',
  styleUrls: ['./ciudades-admin.component.css']
})
export class CiudadesAdminComponent implements OnInit {
  ciudades:[];
  message="";
  constructor( private servicio:CiudadesDataService, private dialog:MatDialog) { }

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
  AgregarFotoCiudad(ciudad:Ciudad) {
    var portada ="" ;
    if (ciudad.imagen != null) {
      portada = ciudad.imagen.url
    }
    const dialogRef = this.dialog.open(AgregarFotoCiudadComponent
    ,
      {
        width: '600px',
        height: '380px',
        data: {
          id: ciudad.id,
          url: portada
        }
      })
    dialogRef.afterClosed().subscribe(result => {
      result
      this.ngOnInit()
    })
  }
}
