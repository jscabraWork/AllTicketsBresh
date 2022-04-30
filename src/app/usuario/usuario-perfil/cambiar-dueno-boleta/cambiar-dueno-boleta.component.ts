import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Boleta } from 'src/app/eventos/boleta.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { UsuariosDataService } from 'src/app/service/data/usuarios-data.service';
import { Cliente } from '../../cliente.model';

@Component({
  selector: 'app-cambiar-dueno-boleta',
  templateUrl: './cambiar-dueno-boleta.component.html',
  styleUrls: ['./cambiar-dueno-boleta.component.css']
})
export class CambiarDuenoBoletaComponent implements OnInit {

  clienteNuevo:Cliente
  boleta:Boleta
  numeroDocumento:string
  constructor(  @Inject(MAT_DIALOG_DATA) public data: any,
  private dataServicio:UsuariosDataService,
  private dialog:MatDialog,
   private boletaService:BoletasDataService) { }

  ngOnInit(): void {
    this.clienteNuevo={
      boletas:[],
      celular:null,
      contrasena:null,
      correo:null,
      
      nombre:null,
      numeroDocumento:null,
      palcos:[],
      publicidad:null,
      tipoDocumento:null,
      usuario:null,
      tipo:null
    }
    this.boleta = this.data.boleta
  }

  buscarCliente(){
    this.dataServicio.getClientePorId(this.numeroDocumento).subscribe(response=> 
     { if(response!=null){
      this.clienteNuevo=response
    }
    else{
      alert("No tenemos este numero de documento registrado")
    }
     })
  }

  asignar(){
    if(this.clienteNuevo==null||this.clienteNuevo.numeroDocumento==null){
      alert("Busca un usuario registrado en All Tickets")
    }
    else{
      this.boletaService.asignarBoleta(this.clienteNuevo.numeroDocumento,this.boleta.id).subscribe(response=>{
        response
        alert("Se cambio la boleta al cliente " + this.clienteNuevo.numeroDocumento)
        this.dialog.closeAll();
      },
      error=>{
        error
        alert("Intenta nuevamente")
      }
      
      )
    }

  }
}
