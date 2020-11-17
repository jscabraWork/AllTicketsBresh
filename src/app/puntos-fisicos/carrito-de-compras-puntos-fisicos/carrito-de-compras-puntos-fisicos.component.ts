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

@Component({
  selector: 'app-carrito-de-compras-puntos-fisicos',
  templateUrl: './carrito-de-compras-puntos-fisicos.component.html',
  styleUrls: ['./carrito-de-compras-puntos-fisicos.component.css']
})
export class CarritoDeComprasPuntosFisicosComponent implements OnInit {


  IVA
  evento:Evento;
  boletas:Boleta[]=[]
  palco:Palco

  asistente: Asistente
  valorTotal
  puntoFisico:PuntoFisico

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private servicioBoletas: BoletasDataService,
  private palcoServicio:PalcosDataService,
  private dialog:MatDialog,
  private servicio: PuntosFisicosDataService
  ) { }

  ngOnInit(): void {

    this.IVA = IVA

    
    this.evento ={
      id: "",
      nombre:"",
      fecha:null,
      descripcion:"",
      lugar:"",
      video:"",
      terminosYCondiciones:"",
      recomendaciones:"",
      ciudadIdTexto:null,
      organizadorid:null,
      imagen:"",
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      
      horaInicio:null,
      horaFin:null,
      etapas:[], 
      mapaImagen:null,
      visible:false
    }



        this.palco={
          id:null,
          nombre:null,
          nombreEvento:null,
          personasAdentro:null,
          personasMaximas:null,
          precio:null,
          precioParcialPagado:null,
          reservado:null,
          servicio:null,
          vendido:null,
          numeroDentroDeEvento:null,
          fechaVendido : null
        }

        this.boletas=this.data.boletas;
        this.evento = this.data.evento
        this.valorTotal= this.data.valorTotal

        this.puntoFisico = this.data.punto
        if(this.data.palco)
        {
        this.palco= this.data.palco
        }
        if(this.data.asistente){
          this.asistente = this.data.asistente
        }

  }

  comprarBoletasAsistente(){

    alert("A continuación entraras a Pay U para realizar tu pago")

    for(var i =0; i < this.boletas.length;i=i+1){

    this.servicioBoletas.comprarBoletaParaAsistente(this.evento.id, this.boletas[i].localidadIdNumero,this.boletas[i].id, this.asistente).subscribe(response=>{response
 
    })

    

  }
  this.servicioBoletas.asignarBoletasPuntoFisico(this.puntoFisico.numeroDocumento,this.boletas).subscribe(response=>response)

  }






    pagar(){

      alert("A continuación entraras a Pay U para realizar tu pago")
        if(this.palco.id!=null){
          var date= new Date()
          this.palco.fechaVendido =date;
  
        }
        else{
          alert("Agrega algún Palco al Carrito")
        }
    
      
     
    }

    cerrar(){
      this.dialog.closeAll()
    }
}
