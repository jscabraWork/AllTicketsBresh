import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { CarritoDeComprasComponent } from '../../carrito-de-compras/carrito-de-compras.component';

@Component({
  selector: 'app-manejo-dias',
  templateUrl: './manejo-dias.component.html',
  styleUrls: ['./manejo-dias.component.css']
})
export class ManejoDiasComponent implements OnInit {
  palcos:Palco[]
  evento:Evento
  usuarioEntidad
  ids:number[]
  codigoVenta
  referenceCode:string
  valorTotal:number
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog, 
    private palcoServicio: PalcosDataService,
  ) { }

  ngOnInit(): void {
    this.valorTotal=0
    this.evento = this.data.evento
    this.usuarioEntidad = this.data.usuarioEntidad;
    this.codigoVenta = this.data.codigoVenta;
    this.palcos = this.data.palcos
    this.ids = this.data.ids
    this.referenceCode=""
    if(this.palcos.length<3){
      for(let i =0; i< this.palcos.length;i++){
        for(let j =0; j< this.palcos.length;j++){
          if(this.palcos[i].precio > this.palcos[j].precio){
            this.palcos.splice(i,1)
          }
      
        }  
    }
    }
  }

  seleccionar(palco:Palco){
    // PALCO;79934058,12361,AOD263,Tue Apr 12 2022 08:48:51 GMT-0400 (Eastern Daylight Time),00000,-1
    this.referenceCode ="PALCO;" +this.usuarioEntidad.numeroDocumento+"," +palco.id+","+this.evento.id+","+new Date()
    this.valorTotal = palco.precio + palco.servicio + palco.servicioIva
    


    const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
      width: '100%',
      height: '85%',

      data: {
        valorTotal: this.valorTotal,
        palco: palco,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        codigoVenta: this.codigoVenta,
        referenceCode: this.referenceCode,
        
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();
      for(let i =0; i< this.palcos.length;i++){
      this.palcoServicio
        .rechazarReservaPalcoInmediatamente(this.palcos[i].id)
        .subscribe((response) => {
          response;
          this.ngOnInit();
        });
      }
    });

  }
}
