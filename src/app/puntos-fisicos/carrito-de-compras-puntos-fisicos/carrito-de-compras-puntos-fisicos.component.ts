import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { IVA } from 'src/app/app.constants';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PuntosFisicosDataService } from 'src/app/service/data/puntos-fisicos-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { PuntoFisico } from '../puntoFisico.model';
import { ImprimirBoletasComponent } from './imprimir-boletas/imprimir-boletas.component';

@Component({
  selector: 'app-carrito-de-compras-puntos-fisicos',
  templateUrl: './carrito-de-compras-puntos-fisicos.component.html',
  styleUrls: ['./carrito-de-compras-puntos-fisicos.component.css']
})
export class CarritoDeComprasPuntosFisicosComponent implements OnInit {
  codigoVenta = '';

  referenceCode: string;

  usuarioEntidad: Cliente;

  evento: Evento;
  boletas: Boleta[] = [];
  valorTotal: number = 0;
  palco: Palco;


  pagar:boolean;
  cargando = true;
  adicional:number

  url
  signature
  descripcion:string
  respuesta
  confirmacion:string
  metodos:string[]=[]
  tax:number
  cargandoPago=false
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioBoletas: BoletasDataService,
    private palcoServicio: PalcosDataService,
    private dialog: MatDialog,
    private servicioPunto: PuntosFisicosDataService
  ) {}

  ngOnInit(): void {
    this.tax=0

    
    this.adicional =-1

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
    };

 
    

    this.boletas = this.data.boletas;
    if(this.boletas!=null){
    if(this.boletas.length >0){
      this.descripcion =this.boletas.length+ " boletas " +this.boletas[0].localidadNombre +" pare el evento " + this.evento.nombre

      for(let i =0; i<this.boletas.length;i++){
        this.tax =this.tax+ this.boletas[i].servicioIva 
      }
    }
  }

    this.evento = this.data.evento;


    this.usuarioEntidad = this.data.usuarioEntidad;
    if(this.data.adicional){
    this.adicional = this.data.adicional;
  }
    (this.referenceCode = this.data.referenceCode +','+this.codigoVenta),
      (this.valorTotal = this.data.valorTotal);

    if (this.data.palco) {
      this.palco = this.data.palco;
      this.descripcion = "Un palco " +this.palco.nombre +" pare el evento " + this.evento.nombre

      this.tax = this.palco.servicioIva
    }
    
      this.codigoVenta = this.data.codigoVenta;
      this.codigoVentaCuadrar();
      this.referenceCode = this.data.referenceCode +','+this.codigoVenta+',' + this.adicional
 




      

      setTimeout(()=>{ 
        
        this.cerrar()
        
      }, 240000);
  }


  cerrar() {
    this.dialog.closeAll();
  }





  codigoVentaCuadrar(){
  
    if(this.codigoVenta=='' || this.codigoVenta == null){
      this.codigoVenta='00000'
    }
  }


pagarPalco(){
  if(!this.cargandoPago){
    this.cargandoPago=true
  this.palcoServicio.comprarPuntoFiscoPalco(this.referenceCode).subscribe(response=>{
    response
    alert("Se vendio el palco: "+this.palco.numeroDentroDeEvento)
    this.cargandoPago=false
    
  },
  
  error=>{
    error
    alert("Sucedio un error vuelve a intentar")
  })
  }
  else{
    alert("Cargando...")
  }
}
  

pagarBoletas(){
  if(!this.cargandoPago){
    this.cargandoPago=true
  this.servicioBoletas.comprarPuntoFiscoTicket(this.referenceCode).subscribe(response=>{
    response

 
    alert("Se vendieron "+this.boletas.length +" boletas")
    this.cargandoPago=false
    
  },
  
  error=>{
    error
    alert("Sucedio un error vuelve a intentar")
  })
  }
  else{
    alert("Cargando...")
  }
}

 
pagarBoletasImprimir(){
  if(!this.cargandoPago){
    this.cargandoPago=true
  this.servicioBoletas.comprarPuntoFiscoTicketImprimir(this.referenceCode).subscribe(response=>{
    const dialogRef = this.dialog.open(ImprimirBoletasComponent, {
      width: '700px;',
    
  
      data: {
        response:response
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();
      this.servicioBoletas
        .rechazarReservaBoletaInstantaneamente(this.boletas)
        .subscribe((response) => {
          response;
          this.ngOnInit();
        });
    });

 
    
    this.cargandoPago=false
    
  },
  
  error=>{
    error
    alert("Sucedio un error vuelve a intentar")
  })
  }
  else{
    alert("Cargando...")
  }
}
  }




