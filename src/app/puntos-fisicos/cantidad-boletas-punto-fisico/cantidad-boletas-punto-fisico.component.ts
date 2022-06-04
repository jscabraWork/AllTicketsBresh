import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { CarritoDeComprasPuntosFisicosComponent } from '../carrito-de-compras-puntos-fisicos/carrito-de-compras-puntos-fisicos.component';


@Component({
  selector: 'app-cantidad-boletas-punto-fisico',
  templateUrl: './cantidad-boletas-punto-fisico.component.html',
  styleUrls: ['./cantidad-boletas-punto-fisico.component.css']
})
export class CantidadBoletasPuntoFisicoComponent implements OnInit {

  boletasCantidad
  referenceCode
  idLocalidad

  efectivo
  evento:Evento
  boletas: Boleta[] =[]
  valorTotal 
  usuarioEntidad: Cliente;
  cargando:boolean
  codigoVenta
  cantidad:number
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioBoletas: BoletasDataService,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.cargando =false
    this.evento = new Evento();
    this.usuarioEntidad = this.data.usuarioEntidad;
    this.boletasCantidad =1
    this.valorTotal =0
    this.referenceCode = this.data.referenceCode
    this.idLocalidad = this.data.idLocalidad
    this.efectivo = this.data.efectivo
    this.evento = this.data.evento

    this.codigoVenta = this.data.codigoVenta;
    
    if(this.data.cantidad){
      this.cantidad = this.data.cantidad;
    }
    if(this.data.cantidad==-1){
      this.cantidad =0
    }
  
  }
  mas(){
 
    if(this.data.cantidad){
      if(this.boletasCantidad<this.cantidad){
        this.boletasCantidad++;
      }
      else{
        alert("Maximo puedes comprar "+this.cantidad+" Tickets")
      }
    }
    else{
      this.boletasCantidad++;
    }
   
   
  }
  menos(){
  if(this.boletasCantidad>1){
    this.boletasCantidad--;
  }
  else{
    alert("Minimo tienes que comprar 1 Ticket")
  } 
}
cerrar(){
  
  this.dialog.closeAll()
}
siguiente(){
  if(this.cargando ==false){
    this.cargando = true
  this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.idLocalidad, this.boletasCantidad).subscribe(response=>{

    this.boletas = response
    if(this.boletas!=null){
    for(var i =0; i < this.boletas.length; i++){
      this.referenceCode  = this.referenceCode+ this.boletas[i].id +"_"
      this.valorTotal = this.valorTotal + this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicioIva
    }

    this.referenceCode = this.referenceCode + "-1"
    this.referenceCode = this.referenceCode +"," + this.evento.id +"," + new Date()
    
    this.AbrirCarrito()
    this.servicioBoletas.rechazarReservaBoleta( this.boletas).subscribe(response=>response);
  }
  else{
    alert("No hay boletas disponibles")
    this.dialog.closeAll()
  }
  })
}
}

AbrirCarrito(): void {
    
      

    
     
    const dialogRef = this.dialog.open(CarritoDeComprasPuntosFisicosComponent, {
      width: '100%',
      height: '85%',
  
      data: {
        valorTotal: this.valorTotal,
        boletas: this.boletas,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        referenceCode: this.referenceCode,
        efectivo: this.efectivo,
        codigoVenta: this.codigoVenta
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
  
  
   
  
}


}
