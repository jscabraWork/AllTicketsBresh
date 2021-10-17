import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

@Component({
  selector: 'app-agregar-organizador-aevento',
  templateUrl: './agregar-organizador-aevento.component.html',
  styleUrls: ['./agregar-organizador-aevento.component.css']
})
export class AgregarOrganizadorAEventoComponent implements OnInit {

  constructor(private servicio: EventoDataService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }
  id
  idOrganizador
  ngOnInit(): void {

    this.id=this.data.id
  }

  
  guardar(){

    this.servicio.agregarOrganizadorAlEvento(this.id,this.idOrganizador).subscribe(response=>{
      response
      this.dialog.closeAll()
    },
    error=>{
      error
      alert('Sucedio un error')
    }
    )

}

}
