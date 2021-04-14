import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

@Component({
  selector: 'app-admin-mensaje',
  templateUrl: './admin-mensaje.component.html',
  styleUrls: ['./admin-mensaje.component.css']
})
export class AdminMensajeComponent implements OnInit {

  id:string
  mensaje:string
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private servicio:EventoDataService) { }

  ngOnInit(): void {
    this.id = this.data.id
  }

  agregarMensaje(){
    this.servicio.agregarMensaje(this.id,this.mensaje).subscribe(
      (response)=>{
        response
        alert('Se agrego mensaje')
        
        this.dialog.closeAll()
      },
      (error)=>{
        error
        alert('No se logro agregar el mensaje')
      }
      )
  }

}
