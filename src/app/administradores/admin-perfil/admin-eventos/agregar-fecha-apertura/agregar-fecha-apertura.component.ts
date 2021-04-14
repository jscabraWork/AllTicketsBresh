import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

@Component({
  selector: 'app-agregar-fecha-apertura',
  templateUrl: './agregar-fecha-apertura.component.html',
  styleUrls: ['./agregar-fecha-apertura.component.css']
})
export class AgregarFechaAperturaComponent implements OnInit {

  constructor(private servicio: EventoDataService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }
  id
  year
  month
  dayOfMonth
  hour
  minute
  ngOnInit(): void {

    this.id=this.data.id
  }

  guardar(){

      this.servicio.asignarFechaApertura(this.id,this.year,this.month,this.dayOfMonth,this.hour,this.minute).subscribe(response=>{
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
