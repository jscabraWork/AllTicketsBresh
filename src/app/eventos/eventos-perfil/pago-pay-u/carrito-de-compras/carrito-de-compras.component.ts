import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { BoletasDataService } from './../../../../service/data/boletas-data.service';
import { Boleta } from './../../../boleta.model';
import { Evento } from './../../../evento.model';
import { Cliente } from './../../../../usuario/cliente.model';
import { IVA } from './../../../../app.constants';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

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
  url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  cargando= true
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private servicioBoletas: BoletasDataService,
  private palcoServicio:PalcosDataService
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
      mapaImagen:null
    }

    this.usuarioEntidad= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        direccion:"",
        publicidad:null,
      boletas:[],
      palcos:[]
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
        this.palco= this.data.palco
  }


  comprarBoletas(){


    if(  this.boletas.length>0){
     

    this.servicioBoletas.comprarBoleta(this.evento.id,this.boletas,this.usuarioEntidad.numeroDocumento).subscribe(response=> {response
    
    })

    }
    
    }


    pagar(){
      
        if(this.palco.id!=null){
          var date= new Date()
          this.palco.fechaVendido =date;
          this.palcoServicio.comprarPalco(this.palco.id,this.usuarioEntidad.numeroDocumento,this.valorTotal,this.palco).subscribe(response=>{response
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
  

