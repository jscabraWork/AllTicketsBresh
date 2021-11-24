// import { PalcosDataService } from './../../../../service/data/palcos-data.service';
// import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
// import { BoletasDataService } from './../../../../service/data/boletas-data.service';
// import { Boleta } from './../../../boleta.model';
// import { Evento } from './../../../evento.model';
// import { Cliente } from './../../../../usuario/cliente.model';
// import { API_URL, API_URL2, IVA, respuesta } from './../../../../app.constants';
// import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';


// @Component({
//   selector: 'app-carrito-de-compras',
//   templateUrl: './carrito-de-compras.component.html',
//   styleUrls: ['./carrito-de-compras.component.css'],
// })
// export class CarritoDeComprasComponent implements OnInit {
//   codigoVenta = '';
//   merchantId: number;
//   accountId: number;
//   referenceCode: string;
//   IVA;
//   usuarioEntidad: Cliente;
  
//   ApiKey: string;
//   evento: Evento;
//   boletas: Boleta[] = [];
//   valorTotal: number = 0;
//   palco: Palco;
//   efectivo:boolean = false;

//   pagar:boolean;
//   cargando = true;
//   adicional:number
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private servicioBoletas: BoletasDataService,
//     private palcoServicio: PalcosDataService,
//     private dialog: MatDialog
//   ) {}

//   ngOnInit(): void {
//     this.referenceCode = this.referenceCode;
//     this.IVA = IVA;
//     this.pagar = false;
    
//     this.adicional =-1

//     this.evento = {
//       id: '',
//       nombre: '',
//       fecha: null,
//       descripcion: '',
//       lugar: '',
//       video: '',
//       terminosYCondiciones: '',
//       recomendaciones: '',
//       ciudadIdTexto: null,
      
//       imagen: null,
//       imagenes: [],
//       artistas: '',
//       fechaFin: null,
//       mapa: null,
//       localidades: [],

//       horaInicio: null,
//       horaFin: null,
//       etapas: [],
//       mapaImagen: null,
//       visible: false,
//       soldout:false,
//       mensaje:null,
//       imagenFinal:null,
//       fechaApertura:null,
//       urlMapa:null,
//       adicionales:[],
//       oculto:null,
//       dineroEntregado:null,
//       ciudadNombre:null
//     };

//     this.palco = {
//       id: null,
//       nombre: null,
//       nombreEvento: null,
//       personasAdentro: null,
//       personasMaximas: null,
//       precio: null,
//       precioParcialPagado: null,
//       reservado: null,
//       servicio: null,
//       vendido: null,
//       numeroDentroDeEvento: null,
//       fechaVendido: null,
//       servicioIva:null,
//       proceso:null,
//       disponible:null,
//       idLocalidad:null,
//       reserva:null,
//       precioAlterno:null,
//       servicioAlterno:null,	  
//       servicioIvaAlterno:null,
//       adiciones: null,
//       maximoAdiciones: null,
//       precioAdicion: null,
//       servicioAdicion: null,
//       servicioIvaAdicion:null,
//     };

//     this.boletas = this.data.boletas;
//     this.evento = this.data.evento;
//     this.efectivo = this.data.efectivo
//     this.usuarioEntidad = this.data.usuarioEntidad;
//     if(this.data.adicional){
//     this.adicional = this.data.adicional;
//   }
//     (this.referenceCode = this.data.referenceCode +','+this.codigoVenta),
//       (this.valorTotal = this.data.valorTotal);
//     if (this.data.palco) {
//       this.palco = this.data.palco;
//     }
    
//       this.codigoVenta = this.data.codigoVenta;
      

//   }


//   cerrar() {
//     this.dialog.closeAll();
//   }


//   window: any = window;
//   handler = this.window.ePayco.checkout.configure({
//     key: '7c7542634fcbfa55f6852b0d6ae4a98e',
//     //key:'6a47649a3a8cab7f99fd0654f71ecf66',
//     test: false,
//   });


//   codigoVentaCuadrar(){
  
//     if(this.codigoVenta=='' || this.codigoVenta == null){
//       this.codigoVenta='00000'
//     }
//   }
  
//   epaycoTicketsUsuarios() {


//     if(this.pagar == false){
//     this.codigoVentaCuadrar()
//     this.referenceCode = this.data.referenceCode +','+this.codigoVenta+',' + this.adicional
//     var data = {
//       //Parametros compra (obligatorio)
//       name: this.evento.nombre,
//       description:
//         this.boletas.length +
//         ' Tickets para ' +
//         this.evento.nombre +
//         ' En la localidad ' +
//         this.boletas[0].localidadNombre,
//       invoice: this.referenceCode,
//       currency: 'cop',
//       amount: this.valorTotal,
//       tax_base: '0',
//       tax: '0',
//       country: 'co',
//       lang: 'es',

//       //Onpage="false" - Standard="true"
//       external: 'false',

//       //Atributos opcionales

//       //response:"http://localhost:4200/eventos/respuesta",
//       response: `${respuesta}/eventos/respuesta`,
//       confirmation:`${API_URL2}/epayco/tickets`,

//       //Atributos cliente
//       name_billing: this.usuarioEntidad.nombre,
//       address_billing: this.usuarioEntidad.direccion,
//       type_doc_billing: 'cc',
//       mobilephone_billing: this.usuarioEntidad.celular,
//       number_doc_billing: this.usuarioEntidad.numeroDocumento,
//     };

//     this.handler.onCloseModal = this.onCloseEpaycoModal;
//     this.handler.open(data);

//   }
//   }

//   epaycoPalcosUsuarios() {


// if(this.pagar == false){
//   this.pagar = true;
//     this.codigoVentaCuadrar()
//     this.referenceCode = this.data.referenceCode +','+this.codigoVenta + ',' + this.adicional
//     var data = {
//       //Parametros compra (obligatorio)
//       name: this.evento.nombre,
//       description:
//       '1 Palco para ' +
//       this.evento.nombre +
//       ' En la localidad ' +
//       this.palco.nombre,
//       currency: 'cop',
//       amount: this.valorTotal,
//       invoice:this.referenceCode,
//       tax_base: '0',
//       tax: '0',
//       country: 'co',
//       lang: 'es',

//       //Onpage="false" - Standard="true"
//       external: 'false',

//       //Atributos opcionales

//      // response: "http://localhost:4200/eventos/respuesta",
//      response: `${respuesta}/eventos/respuesta`,
//       confirmation:`${API_URL2}/epayco`,

//       //Atributos cliente
//       name_billing: this.usuarioEntidad.nombre,
//       address_billing: this.usuarioEntidad.direccion,
//       type_doc_billing: 'cc',
//       mobilephone_billing: this.usuarioEntidad.celular,
//       number_doc_billing: this.usuarioEntidad.numeroDocumento,
//     };

//     this.handler.onCloseModal = this.onCloseEpaycoModal;
//     this.handler.open(data);

//   }

//   }





//   onCloseEpaycoModal() {
//     this.pagar =false
//     console.log("pagar")
//     alert('Close ePayco Modal!!!!!!!');
    
//   }









//   epaycoTicketsUsuarios2() {



//     if(this.pagar == false){
//     this.codigoVentaCuadrar()
//     this.referenceCode = this.data.referenceCode +','+this.codigoVenta+',' + this.adicional
//     this.handler=this.window.ePayco.checkout.configure({
//       key: 'c3b3aa9c8c34f800c0d0701f24fc5e33',
//       test: false,
//     });

//     var data = {
//       //Parametros compra (obligatorio)
//       name: this.evento.nombre,
//       description:
//         this.boletas.length +
//         ' Tickets para ' +
//         this.evento.nombre +
//         ' En la localidad ' +
//         this.boletas[0].localidadNombre,
//       invoice: this.referenceCode,
//       currency: 'cop',
//       amount: this.valorTotal,
//       tax_base: '0',
//       tax: '0',
//       country: 'co',
//       lang: 'es',

//       //Onpage="false" - Standard="true"
//       external: 'false',

//       //Atributos opcionales

//       response: `${respuesta}/eventos/respuesta`,
//      //response: "https://localhost:4200/eventos/respuesta",
//       confirmation:`${API_URL2}/epayco/tickets`,

//       //Atributos cliente
//       name_billing: this.usuarioEntidad.nombre,
//       address_billing: this.usuarioEntidad.direccion,
//       type_doc_billing: 'cc',
//       mobilephone_billing: this.usuarioEntidad.celular,
//       number_doc_billing: this.usuarioEntidad.numeroDocumento,
//     };

//     this.handler.onCloseModal = this.onCloseEpaycoModal;
//     this.handler.open(data);


//   }
//   }

//   epaycoPalcosUsuarios2() {

//     if(this.pagar == false){
//     this.codigoVentaCuadrar()
//     this.referenceCode = this.data.referenceCode +','+this.codigoVenta+',' + this.adicional
//     this.handler=this.window.ePayco.checkout.configure({
//       key: 'c3b3aa9c8c34f800c0d0701f24fc5e33',
//       test: false,
//     });
//     var data = {
//       //Parametros compra (obligatorio)
//       name: this.evento.nombre,
//       description:
//       '1 Palco para ' +
//       this.evento.nombre +
//       ' En la localidad ' +
//       this.palco.nombre,
//       currency: 'cop',
//       invoice:this.referenceCode,
//       amount: this.valorTotal,
//       tax_base: '0',
//       tax: '0',
//       country: 'co',
//       lang: 'es',

//       //Onpage="false" - Standard="true"
//       external: 'false',

//       //Atributos opcionales

//       response: `${respuesta}/eventos/respuesta`,
//    //response: "https://localhost:4200/eventos/respuesta",
//       confirmation:`${API_URL2}/epayco`,

//       //Atributos cliente
//       name_billing: this.usuarioEntidad.nombre,
//       address_billing: this.usuarioEntidad.direccion,
//       type_doc_billing: 'cc',
//       mobilephone_billing: this.usuarioEntidad.celular,
//       number_doc_billing: this.usuarioEntidad.numeroDocumento,
//     };

//     this.handler.onCloseModal = this.onCloseEpaycoModal;
//     this.handler.open(data);
//   }
// } }


import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { BoletasDataService } from './../../../../service/data/boletas-data.service';
import { Boleta } from './../../../boleta.model';
import { Evento } from './../../../evento.model';
import { Cliente } from './../../../../usuario/cliente.model';
import { API_URL, API_URL2, IVA, respuesta } from './../../../../app.constants';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css'],
})
export class CarritoDeComprasComponent implements OnInit {
  codigoVenta = '';
  merchantId: number;
  accountId: number;
  referenceCode: string;

  usuarioEntidad: Cliente;
  
  ApiKey: string;
  evento: Evento;
  boletas: Boleta[] = [];
  valorTotal: number = 0;
  palco: Palco;
  efectivo:boolean = false;

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioBoletas: BoletasDataService,
    private palcoServicio: PalcosDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tax=0
    this.url="https://checkout.payulatam.com/ppp-web-gateway-payu/"

    this.respuesta = respuesta
    this.referenceCode = this.referenceCode;
    // this.merchantId = 508029
    // this.accountId = 512321

   this.merchantId = 953461
   this.accountId = 961103
    
    this.pagar = false;
    this.ApiKey ='F5c8jP7X25o4KxCnPvGAwFxJjw' //'4Vj8eK4rloUd272L48hsrarnUA'
    var md5 = new Md5();
    
    this.adicional =-1

    this.evento = {
      id: '',
      nombre: '',
      fecha: null,
      descripcion: '',
      lugar: '',
      video: '',
      terminosYCondiciones: '',
      recomendaciones: '',
      ciudadIdTexto: null,
      
      imagen: null,
      imagenes: [],
      artistas: '',
      fechaFin: null,
      mapa: null,
      localidades: [],

      horaInicio: null,
      horaFin: null,
      etapas: [],
      mapaImagen: null,
      visible: false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null,
      urlMapa:null,
      adicionales:[],
      oculto:null,
      dineroEntregado:null,
      ciudadNombre:null
    };

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

    this.metodos = ['PSE','VISA','AMEX','CODENSA','DINERS','MASTERCARD','VISA']
    

    this.boletas = this.data.boletas;
    if(this.boletas!=null){
    if(this.boletas.length >0){
      this.descripcion =this.boletas.length+ " boletas " +this.boletas[0].localidadNombre +" pare el evento " + this.evento.nombre
      this.confirmacion =API_URL+ '/payu/tickets'
      for(let i =0; i<this.boletas.length;i++){
        this.tax =this.tax+ this.boletas[i].servicioIva 
      }
    }
  }

    this.evento = this.data.evento;
    this.efectivo = this.data.efectivo
    if(this.efectivo){
      this.metodos.push('BALOTO')
      this.metodos.push('Efecty')
    }
    this.usuarioEntidad = this.data.usuarioEntidad;
    if(this.data.adicional){
    this.adicional = this.data.adicional;
  }
    (this.referenceCode = this.data.referenceCode +','+this.codigoVenta),
      (this.valorTotal = this.data.valorTotal);

    if (this.data.palco) {
      this.palco = this.data.palco;
      this.descripcion = "Un palco " +this.palco.nombre +" pare el evento " + this.evento.nombre
      this.confirmacion =API_URL+ '/payu'
      this.tax = this.palco.servicioIva
    }
    
      this.codigoVenta = this.data.codigoVenta;
      this.codigoVentaCuadrar();
      this.referenceCode = this.data.referenceCode +','+this.codigoVenta+',' + this.adicional
      let valorEncriptar = this.ApiKey +"~"+ this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~"+'COP~';

      for(let i =0;i<this.metodos.length;i++){
        if(i <this.metodos.length-1){
        valorEncriptar += this.metodos[i]+ ','
      }
      else{
        valorEncriptar += this.metodos[i];
      }
      }

      console.log(this.tax)
      this.signature = md5.appendStr(valorEncriptar).end().toString();
      

      setTimeout(()=>{ 
        
        this.cerrar()
        
      }, 240000);
  }


  cerrar() {
    this.dialog.closeAll();
  }


  window: any = window;
  handler = this.window.ePayco.checkout.configure({
    key: '7c7542634fcbfa55f6852b0d6ae4a98e',
    //key:'6a47649a3a8cab7f99fd0654f71ecf66',
    test: false,
  });


  codigoVentaCuadrar(){
  
    if(this.codigoVenta=='' || this.codigoVenta == null){
      this.codigoVenta='00000'
    }
  }
  

}
