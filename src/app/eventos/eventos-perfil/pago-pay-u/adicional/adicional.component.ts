import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adicionales } from 'src/app/administradores/admin-perfil/admin-adicionales/adicionales.model';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { IVA } from 'src/app/app.constants';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { MensajeComponent } from 'src/app/mensaje/mensaje.component';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { CarritoDeComprasComponent } from './../carrito-de-compras/carrito-de-compras.component';
@Component({
  selector: 'app-adicional',
  templateUrl: './adicional.component.html',
  styleUrls: ['./adicional.component.css']
})
export class AdicionalComponent implements OnInit {
  codigoVenta = '';
  merchantId: number;
  accountId: number;
  referenceCode: string;
  IVA;
  usuarioEntidad: Cliente;
  
  ApiKey: string;
  evento: Evento;
  boletas: Boleta[] = [];
  valorTotal: number = 0;
  palco: Palco;
  palcoBackup:Palco;
  efectivo:boolean = false;
  adicionales:Adicionales[]=[]
  pagar:boolean;
  cargando = true;
  adicional:number

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioBoletas: BoletasDataService,
    private palcoServicio: PalcosDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.referenceCode = this.referenceCode;
    this.IVA = IVA;
    this.pagar = false;
    this.adicional = -1

    
    this.evento = new Evento();

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

    this.palcoBackup = {
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
    this.palcoBackup = Object.assign({}, this.data.palco);
    }
    this.boletas = this.data.boletas;
    this.evento = this.data.evento;
    this.efectivo = this.data.efectivo
    this.usuarioEntidad = this.data.usuarioEntidad;
    this.adicional = this.data.adicional;
    (this.referenceCode = this.data.referenceCode );
      (this.valorTotal = this.data.valorTotal);
    if (this.data.palco) {
      this.palco = this.data.palco;
  
    }
    if(this.data.adicionales ){
      this.adicionales = this.data.adicionales;
    }
    

  }


  
  cerrar() {
    this.dialog.closeAll();
  }

  seleccionar(adicionales:Adicionales){

    
    this.palco.nombre= adicionales.nombre
    this.palco.precio = adicionales.precio
    this.palco.servicio = adicionales.servicio
    this.palco.servicioIva = adicionales.servicioIva
    this.valorTotal = adicionales.precio + adicionales.servicio +adicionales.servicioIva
    this.adicional = adicionales.id

    this.carrito()
  

  }

  carrito(){
    
    const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
      width: '100%',
      height: '85%',
  
      data: {
        valorTotal: this.valorTotal,
        palco: this.palco,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        adicional:this.adicional,
        referenceCode: this.referenceCode,
        efectivo: this.efectivo,
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();
      this.palcoServicio
        .rechazarReservaPalcoInmediatamente(this.palco.id)
        .subscribe((response) => {
          response;
          this.ngOnInit();
        });
    });
  }

  visible(adicional){
    
    
    
    return adicional.nombre.includes(this.palcoBackup.nombre)
  }
}
