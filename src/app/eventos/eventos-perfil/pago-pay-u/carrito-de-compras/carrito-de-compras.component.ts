import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { BoletasDataService } from './../../../../service/data/boletas-data.service';
import { Boleta } from './../../../boleta.model';
import { Evento } from './../../../evento.model';
import { Cliente } from './../../../../usuario/cliente.model';
import { IVA } from './../../../../app.constants';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

  codigoVenta=''
  merchantId:number
  accountId:number
  referenceCode: string
  IVA
  usuarioEntidad: Cliente
  signature:string
  ApiKey:string
  evento:Evento;
  boletas:Boleta[]=[]
  valorTotal:number=0
  palco:Palco

  asistente: Asistente
  url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  cargando= true
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private servicioBoletas: BoletasDataService,
  private palcoServicio:PalcosDataService,
  private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.referenceCode= this.referenceCode 
    this.IVA = IVA
    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"// 4Vj8eK4rloUd272L48hsrarnUA
    
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
        this.usuarioEntidad = this.data.usuarioEntidad
        this.signature = this.data.signature
        this.referenceCode = this.data.referenceCode,
        this.valorTotal = this.data.valorTotal
        if(this.data.palco){
        this.palco= this.data.palco
        }
        if(this.data.asistente){
          this.asistente = this.data.asistente
        }

  }

  comprarBoletasAsistente(){
    alert("A continuación entraras a Pay U para realizar tu pago")
    for(var i=0; i < this.boletas.length; i=i+1){

  
    this.servicioBoletas.comprarBoletaParaAsistente(this.evento.id, this.boletas[i].localidadIdNumero,this.boletas[i].id, this.asistente).subscribe(response=>{response


    
    })

  
  }
  if(this.codigoVenta!='')
  {

    this.servicioBoletas.asignarBoletasPromotor(this.codigoVenta,this.boletas).subscribe(response=>response)
  }

  }

  cerrar(){
    this.dialog.closeAll()
  }

  comprarBoletas(){

    alert("A continuación entraras a Pay U para realizar tu pago")
    if(  this.boletas.length>0){
     

    this.servicioBoletas.comprarBoleta(this.evento.id,this.boletas,this.usuarioEntidad.numeroDocumento).subscribe(response=> {response
    if(this.codigoVenta!='')
    {
      this.servicioBoletas.asignarBoletasPromotor(this.codigoVenta, this.boletas).subscribe(response=>response)
    }
    })

    }
    
    }


    pagar(){

      alert("A continuación entraras a Pay U para realizar tu pago")
        if(this.palco.id!=null){
          var date= new Date()
          this.palco.fechaVendido =date;
          this.palcoServicio.comprarPalco(this.palco.id,this.usuarioEntidad.numeroDocumento,this.valorTotal,this.palco).subscribe(response=>{response
            if(this.codigoVenta!=''){
              this.palcoServicio.asignarPalco(this.codigoVenta,this.palco).subscribe(response=>response)
            }
            this.palcoServicio.pasoMuchoTiempoPaca(this.palco.id).subscribe(response=>{response
        
              this.palco={
                id:null,
                nombre:null,
                nombreEvento:null,
                personasAdentro:null,
                personasMaximas:null,
                precio:0,
                precioParcialPagado:null,
                reservado:null,
                servicio:0,
                vendido:null,
                numeroDentroDeEvento:null,
                fechaVendido : null
              }
            })
          
            
            this.valorTotal=0
            
          })
        }
        else{
          alert("Agrega algún Palco al Carrito")
        }
    
      
     
    }
  }
  

