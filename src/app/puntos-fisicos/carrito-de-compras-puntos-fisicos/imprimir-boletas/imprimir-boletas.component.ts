import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Cliente } from 'src/app/usuario/cliente.model';

@Component({
  selector: 'app-imprimir-boletas',
  templateUrl: './imprimir-boletas.component.html',
  styleUrls: ['./imprimir-boletas.component.css']
})
export class ImprimirBoletasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    private dialog: MatDialog,

  ) { }
    evento:Evento
    imagenes:string[]=[]
    boletas:Boleta[] =[]
    palco:Palco
    cliente:Cliente
  ngOnInit(): void {
    this.evento= this.data.response.evento
    this.imagenes= this.data.response.imagenes
    this.boletas= this.data.response.boletas
    this.cliente= this.data.response.cliente
  }


  cerrar() {
    this.dialog.closeAll();
  }

}
