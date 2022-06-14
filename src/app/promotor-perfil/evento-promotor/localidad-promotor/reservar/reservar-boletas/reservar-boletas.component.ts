import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservasBoletasService } from 'src/app/service/data/reservas-boletas.service';
import { LinkComponent } from '../link/link.component';
import { ReservaBoletas } from '../reservaBoleta';

@Component({
  selector: 'app-reservar-boletas',
  templateUrl: './reservar-boletas.component.html',
  styleUrls: ['./reservar-boletas.component.css']
})
export class ReservarBoletasComponent implements OnInit {

  localidad
  promotor
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaBoletas: ReservasBoletasService,
    private dialog: MatDialog
    ) { }
  reserva:ReservaBoletas
  ngOnInit(): void {
    this.reserva ={
      id:null,
      cantidad:null,
      numeroDocumentoReserva:null,
      localidad:null,
      usado:null,
      promotorDocumento:null
    }
    this.reserva.cantidad = this.data.cantidad
   this.localidad= this.data.localidad
    this.promotor=  this.data.promotor
  }


  reservar(){
    this.reservaBoletas.guardar(this.promotor,this.localidad, this.reserva).subscribe(
      response=>{
        let link= "https://allticketscol.com/comprar/boletas/"+response.id
        const dialogRef = this.dialog.open(LinkComponent, {
          data: {
            link: link
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          result
          this.dialog.closeAll();
        });
      }
    )
  }
}
