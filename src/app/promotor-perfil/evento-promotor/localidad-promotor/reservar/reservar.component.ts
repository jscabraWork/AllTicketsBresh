import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Reserva } from 'src/app/models/reserva.model';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { ReservasDataService } from 'src/app/service/data/reservas-data.service';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  reserva:Reserva
  palco:Palco
  documento:number
  promotorId
  reservado:boolean
  pagar:boolean
  cargando:boolean 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private palcoServicio: PalcosDataService,
    private dialog: MatDialog,
    private servicioReserva:ReservasDataService
  ) { }

  ngOnInit(): void {
    this.cargando=false
    this.pagar=false
    this.reservado =false
    this.palco = {
      id: null,
      nombre: null,
      nombreEvento: null,
      personasAdentro: null,
      personasMaximas: null,
      precio: null,
      precioParcialPagado: null,
      reservado: null,
      servicio: null,
      vendido: null,
      numeroDentroDeEvento: null,
      fechaVendido: null,
      servicioIva:null,
      proceso:null,
      disponible:null,
      idLocalidad:null,
      reserva:null,
      precioAlterno:null,
      servicioAlterno:null,	  
      servicioIvaAlterno:null,
      adiciones: null,
      maximoAdiciones: null,
      precioAdicion: null,
      servicioAdicion: null,
      servicioIvaAdicion:null,
      metodo:null
    };
    if (this.data.palco) {
      this.palco = this.data.palco;
    }
    this.promotorId = this.data.promotorId
    this.reserva={
      id:null,
      creationDate:null,
      documentoReserva:null,
      numeroPromotor:null
    }
  }

  reservar() {

    if(!this.cargando){

      this.cargando=true
    let link ="https://allticketscol.com/reservas/";
    
    this.servicioReserva.postReserva(this.reserva,this.promotorId,this.palco.id).subscribe(response=>{
      
      link = link +response.id
      this.reservado =true;
      this.palcoServicio.marcarComoReservado(this.palco.id).subscribe(response=>{
        response
      
      this.palcoServicio.rechazarReservaPalcoInmediatamente(this.palco.id).subscribe(response=>{
      response
     
      })
    })

      const dialogRef = this.dialog.open(LinkComponent, {
        data: {
          link: link
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        result
        this.dialog.closeAll();
      });
  
    })
  }


  }

}
