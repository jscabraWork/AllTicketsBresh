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
  IVA;
  usuarioEntidad: Cliente;
  
  ApiKey: string;
  evento: Evento;
  boletas: Boleta[] = [];
  valorTotal: number = 0;
  palco: Palco;
  efectivo:boolean = false;
  asistente: Asistente;
  pagar:boolean;
  cargando = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioBoletas: BoletasDataService,
    private palcoServicio: PalcosDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.referenceCode = this.referenceCode;
    this.IVA = IVA;
    this.pagar = false;



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
      organizadorid: null,
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
      urlMapa:null
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
      idLocalidad:null
    };

    this.boletas = this.data.boletas;
    this.evento = this.data.evento;
    this.efectivo = this.data.efectivo
    this.usuarioEntidad = this.data.usuarioEntidad;
    
    (this.referenceCode = this.data.referenceCode +','+this.codigoVenta),
      (this.valorTotal = this.data.valorTotal);
    if (this.data.palco) {
      this.palco = this.data.palco;
    }
    if (this.data.asistente) {
      this.asistente = this.data.asistente;
    }
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
  
    if(this.codigoVenta==''){
      this.codigoVenta='00000'
    }
  }
  
  epaycoTicketsUsuarios() {


    if(this.pagar == false){
    this.codigoVentaCuadrar()
    this.referenceCode = this.data.referenceCode +','+this.codigoVenta
    var data = {
      //Parametros compra (obligatorio)
      name: this.evento.nombre,
      description:
        this.boletas.length +
        ' Tickets para ' +
        this.evento.nombre +
        ' En la localidad ' +
        this.boletas[0].localidadNombre,
      invoice: this.referenceCode,
      currency: 'cop',
      amount: this.valorTotal,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales

      //response:"http://localhost:4200/eventos/respuesta",
      response: `${respuesta}/eventos/respuesta`,
      confirmation:`${API_URL2}/epayco`,

      //Atributos cliente
      name_billing: this.usuarioEntidad.nombre,
      address_billing: this.usuarioEntidad.direccion,
      type_doc_billing: 'cc',
      mobilephone_billing: this.usuarioEntidad.celular,
      number_doc_billing: this.usuarioEntidad.numeroDocumento,
    };

    this.handler.onCloseModal = this.onCloseEpaycoModal;
    this.handler.open(data);

  }
  }

  epaycoPalcosUsuarios() {


if(this.pagar == false){
  this.pagar = true;
    this.codigoVentaCuadrar()
    this.referenceCode = this.data.referenceCode +','+this.codigoVenta
    var data = {
      //Parametros compra (obligatorio)
      name: this.evento.nombre,
      description:
      '1 Palco para ' +
      this.evento.nombre +
      ' En la localidad ' +
      this.palco.nombre,
      currency: 'cop',
      amount: this.valorTotal,
      invoice:this.referenceCode,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales

     // response: "http://localhost:4200/eventos/respuesta",
     response: `${respuesta}/eventos/respuesta`,
      confirmation:`${API_URL2}/epayco`,

      //Atributos cliente
      name_billing: this.usuarioEntidad.nombre,
      address_billing: this.usuarioEntidad.direccion,
      type_doc_billing: 'cc',
      mobilephone_billing: this.usuarioEntidad.celular,
      number_doc_billing: this.usuarioEntidad.numeroDocumento,
    };

    this.handler.onCloseModal = this.onCloseEpaycoModal;
    this.handler.open(data);

  }

  }


  onCloseEpaycoModal() {
    this.pagar =false
    console.log("pagar")
    alert('Close ePayco Modal!!!!!!!');
    
  }









  epaycoTicketsUsuarios2() {



    if(this.pagar == false){
    this.codigoVentaCuadrar()
    this.referenceCode = this.data.referenceCode +','+this.codigoVenta
    this.handler=this.window.ePayco.checkout.configure({
      key: 'c3b3aa9c8c34f800c0d0701f24fc5e33',
      test: false,
    });

    var data = {
      //Parametros compra (obligatorio)
      name: this.evento.nombre,
      description:
        this.boletas.length +
        ' Tickets para ' +
        this.evento.nombre +
        ' En la localidad ' +
        this.boletas[0].localidadNombre,
      invoice: this.referenceCode,
      currency: 'cop',
      amount: this.valorTotal,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales

      response: `${respuesta}/eventos/respuesta`,
     //response: "https://localhost:4200/eventos/respuesta",
      confirmation:`${API_URL2}/epayco`,

      //Atributos cliente
      name_billing: this.usuarioEntidad.nombre,
      address_billing: this.usuarioEntidad.direccion,
      type_doc_billing: 'cc',
      mobilephone_billing: this.usuarioEntidad.celular,
      number_doc_billing: this.usuarioEntidad.numeroDocumento,
    };

    this.handler.onCloseModal = this.onCloseEpaycoModal;
    this.handler.open(data);


  }
  }

  epaycoPalcosUsuarios2() {

    if(this.pagar == false){
    this.codigoVentaCuadrar()
    this.referenceCode = this.data.referenceCode +','+this.codigoVenta
    this.handler=this.window.ePayco.checkout.configure({
      key: 'c3b3aa9c8c34f800c0d0701f24fc5e33',
      test: false,
    });
    var data = {
      //Parametros compra (obligatorio)
      name: this.evento.nombre,
      description:
      '1 Palco para ' +
      this.evento.nombre +
      ' En la localidad ' +
      this.palco.nombre,
      currency: 'cop',
      invoice:this.referenceCode,
      amount: this.valorTotal,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales

      response: `${respuesta}/eventos/respuesta`,
   //response: "https://localhost:4200/eventos/respuesta",
      confirmation:`${API_URL2}/epayco`,

      //Atributos cliente
      name_billing: this.usuarioEntidad.nombre,
      address_billing: this.usuarioEntidad.direccion,
      type_doc_billing: 'cc',
      mobilephone_billing: this.usuarioEntidad.celular,
      number_doc_billing: this.usuarioEntidad.numeroDocumento,
    };

    this.handler.onCloseModal = this.onCloseEpaycoModal;
    this.handler.open(data);
  }
}

}
