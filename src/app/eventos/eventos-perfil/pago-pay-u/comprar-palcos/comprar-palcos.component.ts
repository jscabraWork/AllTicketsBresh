import { CarritoDeComprasComponent } from './../carrito-de-compras/carrito-de-compras.component';
import { LoginComponent } from './../../../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { EtapasDataService } from './../../../../service/data/etapas-data.service';
import { Localidad } from './../../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Evento } from './../../../evento.model';
import { EventoDataService } from './../../../../service/data/evento-data.service';
import { Palco } from './../../../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Cliente } from './../../../../usuario/cliente.model';
import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { HardcodedAutheticationService } from './../../../../service/hardcoded-authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosDataService } from './../../../../service/data/usuarios-data.service';
import { Component, OnInit } from '@angular/core';
import { Etapa } from '../../etapa.model';
import { IVA } from 'src/app/app.constants';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { AdicionalComponent } from '../adicional/adicional.component';
import { CantidadBoletasComponent } from '../cantidad-boletas/cantidad-boletas.component';
import { LocalidadSeleccionComponent } from '../localidad-seleccion/localidad-seleccion.component';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Boleta } from 'src/app/eventos/boleta.model';
import { ManejoDiasComponent } from './manejo-dias/manejo-dias.component';

@Component({
  selector: 'app-comprar-palcos',
  templateUrl: './comprar-palcos.component.html',
  styleUrls: ['./comprar-palcos.component.css'],
})
export class ComprarPalcosComponent implements OnInit {
  lista1: any[] = [];
  lista2: any[] = [];
  lista3: any[] = [];
  lista4: any[] = [];
  lista5: any[] = [];
  lista6: any[] = [];
  lista7: any[] = [];
  lista8: any[] = [];

  lista9: any[] = [];
  lista10: any[] = [];

  lista11: any[] = [];
  lista12: any[] = [];

  lista13: any[] = [];
  lista14: any[] = [];

  lista15: any[] = [];
  lista16: any[] = [];
  lista17: any[] = [];
  lista18: any[] = [];
  lista19: any[] = [];
  lista20: any[] = [];

  lista21: any[] = [];
  lista22: any[] = [];
  lista23: any[] = [];
  lista24: any[] = [];
  lista25: any[] = [];
  lista26: any[] = [];
  lista27: any[] = [];
  lista28: any[] = [];

  lista29: any[] = [];
  lista30: any[] = [];

  lista31: any[] = [];
  lista32: any[] = [];

  lista33: any[] = [];
  lista34: any[] = [];

  lista35: any[] = [];
  lista36: any[] = [];
  lista37: any[] = [];
  lista38: any[] = [];
  lista39: any[] = [];
  lista40: any[] = [];
  lista41: any[] = [];
  lista42: any[] = [];
  lista43: any[] = [];
  lista44: any[] = [];



  lista45: any[] = [];
  lista46: any[] = [];
  lista47: any[] = [];
  lista48: any[] = [];
  lista49: any[] = [];
  lista50: any[] = [];
  lista51: any[] = [];
  lista52: any[] = [];
  lista53: any[] = [];
  lista54: any[] = [];
  lista55: any[] = [];
  lista56: any[] = [];
  lista57: any[] = [];
  lista58: any[] = [];
  lista59: any[] = [];
  lista60: any[] = [];
  lista61: any[] = [];
  lista62: any[] = [];
  lista63: any[] = [];
  lista64: any[] = [];
  lista65: any[] = [];
  lista66: any[] = [];
  lista67: any[] = [];
  lista68: any[] = [];
  lista69: any[] = [];
  lista70: any[] = [];
  lista71: any[] = [];
  lista72: any[] = [];
  miId;
  valorTotal: number;
  usuarioA: string;
  usuarioEntidad: Cliente;
  evento: Evento;
  IVA;

  usuarioBoolean: boolean;
  merchantId: number;
  accountId: number;
  referenceCode: string;
  ApiKey: string;
  valorLocalidadAgregada: number;

  etapas: Etapa[] = [];
  etapa: Etapa;
  boletaBoolean: boolean;
  contadorPalcos;
  palco: Palco;
  localidad: Localidad;
  valorBoletas;

  cargando = false;
  cargadoTodo = false;
  idLocalidad;

  localidadCargada: Localidad;
  localidadCargadaGeneral: Localidad;
  localidadCargadaPreferecial: Localidad;

  localidadCargadaBoletas: Localidad;
  localidadCargadaBoletasVIP: Localidad;
  localidadCargadaBoletasVIPPiso1: Localidad;
  localidadCargadaBoletasGeneralPiso2: Localidad;
  localidadCargadaNorte: Localidad;
  localidadCargadaOriente: Localidad;
  localidadCargadaOccidente: Localidad;
  contadorBoletas;
  codigoVenta;
  boletas:Boleta[]
  
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: EventoDataService,
    private palcoServicio: PalcosDataService,
    private etapaServicio: EtapasDataService,
    private autenticador: HardcodedAutheticationService,
    private router: Router,
    private dataServicio: UsuariosDataService,
    private servicioLocalidad: LocalidadesDataService,
    private servicioBoletas: BoletasDataService,
  ) { }

  ngOnInit(): void {
    this.boletas =[]
    this.cargando=false
    this.cargadoTodo =false
    this.lista1 = [];
    this.lista2 = [];
    this.lista3 = [];
    this.lista4 = [];
    this.lista5 = [];
    this.lista6 = [];
    this.lista7 = [];
    this.lista8 = [];

    this.lista9 = [];
    this.lista10 = [];

    this.lista11 = [];
    this.lista21 = [];

    this.lista13 = [];
    this.lista14 = [];

    this.lista15 = [];
    this.lista16 = [];
    this.lista17 = [];
    this.lista18 = [];
    this.lista19 = [];
    this.lista20 = [];

    this.lista21 = [];
    this.lista22 = [];
    this.lista23 = [];
    this.lista24 = [];
    this.lista25 = [];
    this.lista26 = [];
    this.lista27 = [];
    this.lista28 = [];

    this.lista29 = [];
    this.lista30 = [];

    this.lista31 = [];
    this.lista32 = [];

    this.lista33 = [];
    this.lista34 = [];

    this.lista35 = [];
    this.lista36 = [];
    this.lista37 = [];
    this.lista38 = [];
    this.lista39 = [];
    this.lista40 = [];
    this.lista41 = [];
    this.lista42 = [];
    this.lista43 = [];
    this.lista44 = [];



    this.lista45 = [];
    this.lista46 = [];
    this.lista47 = [];
    this.lista48 = [];
    this.lista49 = [];
    this.lista50 = [];
    this.lista51 = [];
    this.lista52 = [];
    this.lista53 = [];
    this.lista54 = [];
    this.lista55 = [];
    this.lista56 = [];
    this.lista57 = [];
    this.lista58 = [];
    this.lista59 = [];
    this.lista60 = [];
    this.lista61 = [];
    this.lista62 = [];
    this.lista63 = [];
    this.lista64 = [];
    this.lista65 = [];
    this.lista66 = [];
    this.lista67 = [];
    this.lista68 = [];
    this.lista69 = [];
    this.lista70 = [];
    this.lista71 = [];
    this.lista72 = [];
    this.codigoVenta = ''
    this.contadorBoletas = 0;
    this.valorBoletas = 0;
    this.contadorPalcos = 0;
    this.valorTotal = 0;
    this.usuarioBoolean = true;

    this.valorLocalidadAgregada = 0;

    this.boletaBoolean = false;
    this.referenceCode = 'PALCO;';
    this.IVA = IVA;

    this.localidadCargada = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };

    this.localidadCargadaBoletasVIPPiso1 = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };

    this.localidadCargadaBoletasGeneralPiso2 = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };

    this.localidadCargadaPreferecial = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.localidadCargadaGeneral = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.localidadCargadaBoletas = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.localidadCargadaOriente = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.localidadCargadaOccidente = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.localidadCargadaNorte = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.localidadCargadaBoletasVIP = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
          metodo:null
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
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
      servicioIva: null,
      proceso: null,
      disponible: null,
      idLocalidad: null,
      reserva: null,
      precioAlterno: null,
      servicioAlterno: null,
      servicioIvaAlterno: null,
      adiciones: null,
      maximoAdiciones: null,
      precioAdicion: null,
      servicioAdicion: null,
      servicioIvaAdicion: null,
      metodo:null,
    };

    this.usuarioEntidad = {
      nombre: '',
      numeroDocumento: null,
      tipoDocumento: '',
      usuario: '',
      contrasena: '',
      celular: null,
      correo: '',
      
      publicidad: null,
      boletas: [],
      palcos: [],
      tipo:null
    };
    this.evento = new Evento();
    this.codigoVenta == '';
    this.route.paramMap.subscribe((params) => {
      this.codigoVenta = params.get('codigoVenta')
    })
    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');
      this.idLocalidad = params.get('idLocalidad');

      this.service.getEventoId(this.miId).subscribe((response) => {
        this.handleGetSuccesfull(response);
        
        
        if (!this.evento.mapa) {
          this.servicioLocalidad.getLocaliddadPorId(this.idLocalidad, this.evento.id).subscribe((response) => {
            this.localidadCargada = response
          })
        }


        else if (this.evento.mapa == 'mapa2') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'ALFOMBRA ROJA') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                }

                else if (this.etapas[i].localidades[j].nombre == 'DIAMANTE') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                }
                
                else if (this.etapas[i].localidades[j].nombre == 'GENERAL') {
                  this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                }

                else if (this.etapas[i].localidades[j].nombre == 'PLATINO') {
                  this.localidadCargada = this.etapas[i].localidades[j];
                }
              
              }
            }


            this.cargarLocalidadEnMapa2();
            this.cargadoTodo = true;
          });
        }

        else if (this.evento.mapa == 'mapa6') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'Palcos') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                }
              
                else if (this.etapas[i].localidades[j].nombre == 'General') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                }
              }
            }


            this.cargarLocalidadEnMapa6();
            this.cargadoTodo = true;
          });
        }


      
        else if (this.evento.mapa == 'mapa7') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'PALCOS + MEET AND GREET') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                }

                else if (this.etapas[i].localidades[j].nombre == 'General') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                }
                else if (this.etapas[i].localidades[j].nombre == 'Meet and Greet') {
                  this.localidadCargadaBoletasVIP = this.etapas[i].localidades[j];
                }
              
              }
            }


            this.cargarLocalidadEnMapa7();
            this.cargadoTodo = true;
          });
        }

        else if (this.evento.mapa == 'mapa8') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'PALCOS') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                }

                else if (this.etapas[i].localidades[j].nombre == 'VIP 2da Etapa') {
                  this.localidadCargadaBoletasVIP = this.etapas[i].localidades[j];
                }
                
                else if (this.etapas[i].localidades[j].nombre == 'General 2da Etapa') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                }
              
              }
            }


            this.cargarLocalidadEnMapa8();
            this.cargadoTodo = true;
          });
        }
        else if (this.evento.mapa == 'mapa4') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'Palcos') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                }

                else if (this.etapas[i].localidades[j].nombre == 'General') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                }
                else if (this.etapas[i].localidades[j].nombre == 'VIP') {
                  this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                }
              
              }
            }


            this.cargarLocalidadEnMapa4();
            this.cargadoTodo = true;
          });
        }
        else if (this.evento.mapa == 'mapa9') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'PALCOS') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                }

                else if (this.etapas[i].localidades[j].nombre == 'GENERAL') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                }
              
              }
            }


            this.cargarLocalidadEnMapa9();
            this.cargadoTodo = true;
          });
        }

        else if (this.evento.mapa == 'mapa10') {
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {

            this.etapas = response;
            let localidades: number[] = [];
            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                if (this.etapas[i].localidades[j].nombre == 'LUNETA IZQUIERDA') {
                  this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                  localidades.push(this.localidadCargadaPreferecial.id)
                }

                else if (this.etapas[i].localidades[j].nombre == 'LUNETA CENTRO') {
                  this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                  localidades.push(this.localidadCargadaBoletas.id)
                }

                else if (this.etapas[i].localidades[j].nombre == 'LUNETA DERECHA') {
                  this.localidadCargadaBoletasVIP = this.etapas[i].localidades[j];
                  localidades.push(this.localidadCargadaBoletasVIP.id)
                }

                else if (this.etapas[i].localidades[j].nombre == 'BALCON IZQUIERDO') {
                  this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                  localidades.push(this.localidadCargadaGeneral.id)
                }

                else if (this.etapas[i].localidades[j].nombre == 'BALCON CENTRO') {
                  this.localidadCargadaBoletasVIPPiso1 = this.etapas[i].localidades[j];
                  localidades.push(this.localidadCargadaBoletasVIPPiso1.id)
                }

                else if (this.etapas[i].localidades[j].nombre == 'BALCON DERECHO') {
                  this.localidadCargadaBoletasGeneralPiso2 = this.etapas[i].localidades[j];
                  localidades.push(this.localidadCargadaBoletasGeneralPiso2.id)
                }
              
              }
            }
            this.servicioLocalidad.getBoletasLocalidades(localidades).subscribe(response=>{
              this.localidadCargadaPreferecial.boletas=  response[0]
              this.localidadCargadaBoletas.boletas= response[1]
              this.localidadCargadaBoletasVIP.boletas= response[2]
              this.localidadCargadaGeneral.boletas= response[3]
              this.localidadCargadaBoletasVIPPiso1.boletas= response[4]
              this.localidadCargadaBoletasGeneralPiso2.boletas= response[5]

              this.cargarLocalidadEnMapa10();
              this.cargadoTodo = true;  

            })

      
          });
        }


       
        else if (this.evento.mapa == 'mapa23') {
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;

              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (this.etapas[i].localidades[j].nombre == 'PATROCINADOR') {
                    this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'PAL CENTRO Y PA DENTRO') {
                    this.localidadCargadaGeneral = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == '¡AYAYAY!') {
                    this.localidadCargadaBoletasVIPPiso1 = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == '¡PAPAAA!') {
                    this.localidadCargadaBoletasGeneralPiso2 = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'SIRVALO PUES') {
                    this.localidadCargadaBoletasVIP = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'SALUD COMPADRE') {
                    this.localidadCargada = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'PREFERENCIAL CON SILLA') {
                    this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'NORTE') {
                    this.localidadCargadaNorte = this.etapas[i].localidades[j];
                  }
                  else if (this.etapas[i].localidades[j].nombre == 'ORIENTAL') {
                    this.localidadCargadaOriente = this.etapas[i].localidades[j];
                  }
                  else if (this.etapas[i].localidades[j].nombre == 'OCCIDENTAL PREFERENCIAL') {
                    this.localidadCargadaOccidente = this.etapas[i].localidades[j];
                  }
                
                }
              }
  

              this.cargarLocalidadEnMapa23();
              this.cargadoTodo = true;
            });
        }


        if (this.autenticador.getUsuario() != null) {
          this.usuarioA = this.autenticador.getUsuario();
          this.referenceCode = this.referenceCode + this.usuarioA + ': ';

          this.dataServicio.getCliente(this.usuarioA).subscribe((response) => {
            this.usuarioEntidad = response;
            this.usuarioBoolean = false;
            var j = 0;

            while (j < this.usuarioEntidad.palcos.length) {
              if (
                this.usuarioEntidad.palcos[j].nombreEvento == this.evento.nombre
              ) {
                this.contadorPalcos = this.contadorPalcos + 1;
              }

              j = j + 1;
            }

            var j = 0;
            while (j < this.usuarioEntidad.boletas.length) {
              if (
                this.usuarioEntidad.boletas[j].nombreEvento ==
                this.evento.nombre
              ) {
                this.contadorBoletas = this.contadorBoletas + 1;
              }
              j = j + 1;
            }
          });
        }
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  handleGetSuccesfull(response) {
   
    if (response.visible || response.oculto) {
      this.evento = response;
    }
  }

  agregarALaLista(localidad: Localidad) {
    if (!this.usuarioBoolean) {
      this.localidad = localidad;
      this.valorLocalidadAgregada =
        localidad.precio + localidad.servicio + localidad.servicioPorcentaje;
      this.valorBoletas = 1;
    } else {
      this.openDialog();
    }
  }

  agregarAlCarrito() {
    if (!this.usuarioBoolean) {
      if (this.contadorPalcos < 2 && !this.cargando) {
        this.cargando = true;
        if (this.palco.nombre != this.localidad.nombre) {

          if (this.localidad == null) {
            alert('Agregar un Palco para continuar');
          } else {
            this.palcoServicio.reservarPalco(this.localidad.id).subscribe(
              (response) => {
                this.palco = response;

                this.referenceCode = "PALCO;" + this.usuarioEntidad.numeroDocumento + "," + this.palco.id + "," + this.evento.id + "," + new Date();
                this.cargando = false;

                this.valorTotal =
                  this.palco.precio +
                  this.palco.servicio +
                  this.palco.servicioIva;

                this.localidad = null;
                this.valorLocalidadAgregada = 0;
                this.valorBoletas = 0;
                this.AbrirCarrito();
                if (this.localidadCargada.efectivo) {
                  this.palcoServicio
                    .rechazarReservaPalcoEfectivo(this.palco.id)
                    .subscribe((response) => response);
                } else {
                  this.palcoServicio
                    .rechazarReservaPalco(this.palco.id)
                    .subscribe((response) => {
                      response;
                    });
                }
              },
              (error) => {
                this.cargando = false;
                error;
              }
            );
          }
        } else {
          alert('Ya tienes este Palco agregado');
        }
      } else {
        alert('Solo puedes comprar 2 Palcos máximo por Evento');
      }
    } else {
      this.openDialog();
    }
  }


  AbrirCarrito(): void {
    if (this.evento.adicionales.length == 0) {
      this.carrito();
    } else {
      this.adicionales();
    }
  }

  carrito() {
    let efectivo = this.localidadCargada.efectivo;


    const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
      width: '100%',
      height: '85%',

      data: {
        valorTotal: this.valorTotal,
        palco: this.palco,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        codigoVenta: this.codigoVenta,
        referenceCode: this.referenceCode,
        efectivo: efectivo,
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


  multiplesPalcos(palcos:Palco[],ids:number[]) {
    


    const dialogRef = this.dialog.open(ManejoDiasComponent, {
      width: '600px',

      data: {
        palcos: palcos,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        codigoVenta: this.codigoVenta,
        ids:ids
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();
      for(let i =0; i< palcos.length;i++){
      this.palcoServicio
        .rechazarReservaPalcoInmediatamente(palcos[i].id)
        .subscribe((response) => {
          response;
          this.ngOnInit();
        });
      }
    });
  }


  adicionales() {
    const dialogRef = this.dialog.open(AdicionalComponent, {
      width: '100%',
      height: '85%',

      data: {
        valorTotal: this.valorTotal,
        palco: this.palco,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        adicionales: this.evento.adicionales,
        referenceCode: this.referenceCode,
        efectivo: this.localidadCargada.efectivo,
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

  manejar(response) {
    this.etapas = response;
  }



  darCantidadDePalcosDisponiblesEtapas(localidad:Localidad){
    var contador =localidad.maximoVender;
    for(var i =0; i < localidad.palcos.length; i=i+1){
      if(localidad.palcos[i].vendido==true || localidad.palcos[i].proceso==true|| localidad.palcos[i].reservado==true){
  
        contador = contador-1;
      }
    }
    return contador;
  }
  
  cargarLocalidadEnMapa2(){
    /*for(let i=0;i<4;i++){
      this.lista11[i] = {
        valor:'v',
        localidad: 'promo',
        id:'v'
      }
    }
    for(let i=0;i<2;i++){
      this.lista12[i] = {
        valor:'v',
        localidad: 'promo',
        id:'v'
      }
      this.lista13[i] = {
        valor:'v',
        localidad: 'promo',
        id:'v'
      }
    }*/
    for(let i=0;i<2;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i+15].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+15].reservado &&
        this.localidadCargadaPreferecial.palcos[i+15].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+15].proceso
      ){
        this.lista4[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+15].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+15].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+15].vendido ||
        this.localidadCargadaPreferecial.palcos[i+15].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+15].disponible
      ) {
        this.lista4[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+15].proceso) {
        this.lista4[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaPreferecial.palcos[i+24].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+24].reservado &&
        this.localidadCargadaPreferecial.palcos[i+24].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+24].proceso
      ){
        this.lista6[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+24].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+24].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+24].vendido ||
        this.localidadCargadaPreferecial.palcos[i+24].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+24].disponible
      ) {
        this.lista6[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+24].proceso) {
        this.lista6[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

    }


    for(let i=0;i<3;i++){

      if (
        !this.localidadCargadaPreferecial.palcos[i+5].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+5].reservado &&
        this.localidadCargadaPreferecial.palcos[i+5].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+5].proceso
      ){
        this.lista2[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+5].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+5].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+5].vendido ||
        this.localidadCargadaPreferecial.palcos[i+5].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+5].disponible
      ) {
        this.lista2[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+5].proceso) {
        this.lista2[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

    }

    for(let i=0;i<5;i++){
     

      if (
        !this.localidadCargadaPreferecial.palcos[i].vendido &&
        !this.localidadCargadaPreferecial.palcos[i].reservado &&
        this.localidadCargadaPreferecial.palcos[i].disponible &&
        !this.localidadCargadaPreferecial.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    for(let i=0;i<6;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i+9].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+9].reservado &&
        this.localidadCargadaPreferecial.palcos[i+9].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+9].proceso
      ){
        this.lista3[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+9].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+9].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+9].vendido ||
        this.localidadCargadaPreferecial.palcos[i+9].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+9].disponible
      ) {
        this.lista3[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+9].proceso) {
        this.lista3[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      

      if (
        !this.localidadCargadaPreferecial.palcos[i+18].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+18].reservado &&
        this.localidadCargadaPreferecial.palcos[i+18].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+18].proceso
      ){
        this.lista5[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+18].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+18].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+18].vendido ||
        this.localidadCargadaPreferecial.palcos[i+18].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+18].disponible
      ) {
        this.lista5[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+18].proceso) {
        this.lista5[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaGeneral.palcos[i+9].vendido &&
        !this.localidadCargadaGeneral.palcos[i+9].reservado &&
        this.localidadCargadaGeneral.palcos[i+9].disponible &&
        !this.localidadCargadaGeneral.palcos[i+9].proceso
      ){
        this.lista9[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+9].numeroDentroDeEvento,
          localidad: 'prem',
          id:this.localidadCargadaGeneral.palcos[i+9].id
        }
      } else if (
        this.localidadCargadaGeneral.palcos[i+9].vendido ||
        this.localidadCargadaGeneral.palcos[i+9].reservado ||
        !this.localidadCargadaGeneral.palcos[i+9].disponible
      ) {
        this.lista9[i] =  {
          valor:'v',
          localidad: 'prem',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+9].proceso) {
        this.lista9[i]= {
          valor:'p',
          localidad: 'prem',
          id:'p'
        }
      }
      
    }

    for(let i =0;i<8;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i].vendido &&
        !this.localidadCargadaGeneral.palcos[i].reservado &&
        this.localidadCargadaGeneral.palcos[i].disponible &&
        !this.localidadCargadaGeneral.palcos[i].proceso
      ){
        this.lista8[i] = {
          valor:this.localidadCargadaGeneral.palcos[i].numeroDentroDeEvento,
          localidad: 'prem',
          id:this.localidadCargadaGeneral.palcos[i].id
        }
      } else if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista8[i] =  {
          valor:'v',
          localidad: 'prem',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista8[i]= {
          valor:'p',
          localidad: 'prem',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaGeneral.palcos[i+18].vendido &&
        !this.localidadCargadaGeneral.palcos[i+18].reservado &&
        this.localidadCargadaGeneral.palcos[i+18].disponible &&
        !this.localidadCargadaGeneral.palcos[i+18].proceso
      ){
        this.lista10[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+18].numeroDentroDeEvento,
          localidad: 'prem',
          id:this.localidadCargadaGeneral.palcos[i+18].id
        }
      } else if (
        this.localidadCargadaGeneral.palcos[i+18].vendido ||
        this.localidadCargadaGeneral.palcos[i+18].reservado ||
        !this.localidadCargadaGeneral.palcos[i+18].disponible
      ) {
        this.lista10[i] =  {
          valor:'v',
          localidad: 'prem',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+18].proceso) {
        this.lista10[i]= {
          valor:'p',
          localidad: 'prem',
          id:'p'
        }
      }
    }

    for(let i=0;i<9;i++){

      if (
        !this.localidadCargadaPreferecial.palcos[i+27].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+27].reservado &&
        this.localidadCargadaPreferecial.palcos[i+27].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+27].proceso
      ){
        this.lista7[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+27].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+27].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+27].vendido ||
        this.localidadCargadaPreferecial.palcos[i+27].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+27].disponible
      ) {
        this.lista7[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+27].proceso) {
        this.lista7[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaPreferecial.palcos[i+36].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+36].reservado &&
        this.localidadCargadaPreferecial.palcos[i+36].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+36].proceso
      ){
        this.lista11[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+36].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+36].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+36].vendido ||
        this.localidadCargadaPreferecial.palcos[i+36].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+36].disponible
      ) {
        this.lista11[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+36].proceso) {
        this.lista11[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaPreferecial.palcos[i+45].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+45].reservado &&
        this.localidadCargadaPreferecial.palcos[i+45].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+45].proceso
      ){
        this.lista12[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+45].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+45].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+45].vendido ||
        this.localidadCargadaPreferecial.palcos[i+45].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+45].disponible
      ) {
        this.lista12[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+45].proceso) {
        this.lista12[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

     

      if (
        !this.localidadCargadaGeneral.palcos[i+27].vendido &&
        !this.localidadCargadaGeneral.palcos[i+27].reservado &&
        this.localidadCargadaGeneral.palcos[i+27].disponible &&
        !this.localidadCargadaGeneral.palcos[i+27].proceso
      ){
        this.lista13[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+27].numeroDentroDeEvento,
          localidad: 'prem',
          id:this.localidadCargadaGeneral.palcos[i+27].id
        }
      } else if (
        this.localidadCargadaGeneral.palcos[i+27].vendido ||
        this.localidadCargadaGeneral.palcos[i+27].reservado ||
        !this.localidadCargadaGeneral.palcos[i+27].disponible
      ) {
        this.lista13[i] =  {
          valor:'v',
          localidad: 'prem',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+27].proceso) {
        this.lista13[i]= {
          valor:'p',
          localidad: 'prem',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaGeneral.palcos[i+36].vendido &&
        !this.localidadCargadaGeneral.palcos[i+36].reservado &&
        this.localidadCargadaGeneral.palcos[i+36].disponible &&
        !this.localidadCargadaGeneral.palcos[i+36].proceso
      ){
        this.lista14[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+36].numeroDentroDeEvento,
          localidad: 'prem',
          id:this.localidadCargadaGeneral.palcos[i+36].id
        }
      } else if (
        this.localidadCargadaGeneral.palcos[i+36].vendido ||
        this.localidadCargadaGeneral.palcos[i+36].reservado ||
        !this.localidadCargadaGeneral.palcos[i+36].disponible
      ) {
        this.lista14[i] =  {
          valor:'v',
          localidad: 'prem',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+36].proceso) {
        this.lista14[i]= {
          valor:'p',
          localidad: 'prem',
          id:'p'
        }
      }

    }

    

  }

  cargarLocalidadEnMapa6(){
    for(let i=0;i<38;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i].vendido &&
        !this.localidadCargadaPreferecial.palcos[i].reservado &&
        this.localidadCargadaPreferecial.palcos[i].disponible &&
        !this.localidadCargadaPreferecial.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    for(let i=0;i<42;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i+38].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+38].reservado &&
        this.localidadCargadaPreferecial.palcos[i+38].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+38].proceso
      ){
        this.lista2[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+38].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+38].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+38].vendido ||
        this.localidadCargadaPreferecial.palcos[i+38].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+38].disponible
      ) {
        this.lista2[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+38].proceso) {
        this.lista2[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    for(let i=0;i<21;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i+80].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+80].reservado &&
        this.localidadCargadaPreferecial.palcos[i+80].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+80].proceso
      ){
        this.lista3[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+80].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+80].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+80].vendido ||
        this.localidadCargadaPreferecial.palcos[i+80].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+80].disponible
      ) {
        this.lista3[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+80].proceso) {
        this.lista3[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }
    for(let i=0;i<10;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i+101].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+101].reservado &&
        this.localidadCargadaPreferecial.palcos[i+101].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+101].proceso
      ){
        this.lista4[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+101].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+101].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+101].vendido ||
        this.localidadCargadaPreferecial.palcos[i+101].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+101].disponible
      ) {
        this.lista4[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+101].proceso) {
        this.lista4[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      if (
        !this.localidadCargadaPreferecial.palcos[i+111].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+111].reservado &&
        this.localidadCargadaPreferecial.palcos[i+111].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+111].proceso
      ){
        this.lista5[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+111].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+111].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+111].vendido ||
        this.localidadCargadaPreferecial.palcos[i+111].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+111].disponible
      ) {
        this.lista5[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+111].proceso) {
        this.lista5[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    
  }

  cargarLocalidadEnMapa7(){
  
    for(let i=0;i<3;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i].vendido &&
        !this.localidadCargadaPreferecial.palcos[i].reservado &&
        this.localidadCargadaPreferecial.palcos[i].disponible &&
        !this.localidadCargadaPreferecial.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaPreferecial.palcos[i+3].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+3].reservado &&
        this.localidadCargadaPreferecial.palcos[i+3].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+3].proceso
      ){
        this.lista2[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+3].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+3].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+3].vendido ||
        this.localidadCargadaPreferecial.palcos[i+3].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+3].disponible
      ) {
        this.lista2[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+3].proceso) {
        this.lista2[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

    }

  }

  cargarLocalidadEnMapa8(){
  
    for(let i=0;i<3;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i].vendido &&
        !this.localidadCargadaPreferecial.palcos[i].reservado &&
        this.localidadCargadaPreferecial.palcos[i].disponible &&
        !this.localidadCargadaPreferecial.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaPreferecial.palcos[i+3].vendido &&
        !this.localidadCargadaPreferecial.palcos[i+3].reservado &&
        this.localidadCargadaPreferecial.palcos[i+3].disponible &&
        !this.localidadCargadaPreferecial.palcos[i+3].proceso
      ){
        this.lista2[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i+3].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i+3].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i+3].vendido ||
        this.localidadCargadaPreferecial.palcos[i+3].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+3].disponible
      ) {
        this.lista2[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i+3].proceso) {
        this.lista2[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

    }

  }

  cargarLocalidadEnMapa9(){
  
    for(let i=0;i<3;i++){
      if (
        !this.localidadCargadaPreferecial.palcos[i].vendido &&
        !this.localidadCargadaPreferecial.palcos[i].reservado &&
        this.localidadCargadaPreferecial.palcos[i].disponible &&
        !this.localidadCargadaPreferecial.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

    }

  }
  
  
  cargarLocalidadEnMapa10(){
  
    for(let i=0;i<7;i++){
     

      if (
        this.localidadCargadaPreferecial.boletas[i].vendida 
       || this.localidadCargadaPreferecial.boletas[i].reserva 
      ) {
        this.lista1[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i].reservado) {
        this.lista1[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i].disponible) {
        this.lista1[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i].reservado 
        && !this.localidadCargadaPreferecial.boletas[i].vendida) {
        this.lista1[i] = {
          id:this.localidadCargadaPreferecial.boletas[i].id,
          valor: this.localidadCargadaPreferecial.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIP.boletas[i].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i].reserva 
      ) {
        this.lista13[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i].reservado) {
        this.lista13[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i].disponible) {
        this.lista13[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i].vendida) {
        this.lista13[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaGeneral.boletas[i+107].vendida 
       || this.localidadCargadaGeneral.boletas[i+107].reserva 
      ) {
        this.lista23[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+107].reservado) {
        this.lista23[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+107].disponible) {
        this.lista23[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+107].reservado 
        && !this.localidadCargadaGeneral.boletas[i+107].vendida) {
        this.lista23[i] = {
          id:this.localidadCargadaGeneral.boletas[i+107].id,
          valor: this.localidadCargadaGeneral.boletas[i+107].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].vendida 
       || this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].reserva 
      ) {
        this.lista32[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].reservado) {
        this.lista32[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].disponible) {
        this.lista32[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].reservado 
        && !this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].vendida) {
        this.lista32[i] = {
          id:this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].id,
          valor: this.localidadCargadaBoletasGeneralPiso2.boletas[i+107].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
     
    }

    for(let i=0;i<16;i++){
    
      if (
        this.localidadCargadaPreferecial.boletas[i+7].vendida 
       || this.localidadCargadaPreferecial.boletas[i+7].reserva 
      ) {
        this.lista2[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+7].reservado) {
        this.lista2[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+7].disponible) {
        this.lista2[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+7].reservado 
        && !this.localidadCargadaPreferecial.boletas[i+7].vendida) {
        this.lista2[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+7].id,
          valor: this.localidadCargadaPreferecial.boletas[i+7].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIP.boletas[i+7].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i+7].reserva 
      ) {
        this.lista14[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+7].reservado) {
        this.lista14[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+7].disponible) {
        this.lista14[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+7].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i+7].vendida) {
        this.lista14[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+7].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+7].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<27;i++){
    
      if (
        this.localidadCargadaPreferecial.boletas[i+23].vendida 
       || this.localidadCargadaPreferecial.boletas[i+23].reserva 
      ) {
        this.lista3[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+23].reservado) {
        this.lista3[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+23].disponible) {
        this.lista3[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+23].reservado 
        && !this.localidadCargadaPreferecial.boletas[i+23].vendida) {
        this.lista3[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+23].id,
          valor: this.localidadCargadaPreferecial.boletas[i+23].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
      if (
        this.localidadCargadaBoletasVIP.boletas[i+23].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i+23].reserva 
      ) {
        this.lista15[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+23].reservado) {
        this.lista15[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+23].disponible) {
        this.lista15[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+23].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i+23].vendida) {
        this.lista15[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+23].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+23].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    }

    for(let i=0;i<30;i++){
    
      if (
        this.localidadCargadaPreferecial.boletas[i+50].vendida 
       || this.localidadCargadaPreferecial.boletas[i+50].reserva 
      ) {
        this.lista4[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+50].reservado) {
        this.lista4[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+50].disponible) {
        this.lista4[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+50].reservado 
        && !this.localidadCargadaPreferecial.boletas[i+50].vendida) {
        this.lista4[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+50].id,
          valor: this.localidadCargadaPreferecial.boletas[i+50].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIP.boletas[i+50].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i+50].reserva 
      ) {
        this.lista16[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+50].reservado) {
        this.lista16[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+50].disponible) {
        this.lista16[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+50].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i+50].vendida) {
        this.lista16[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+50].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+50].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<33;i++){
    
      if (
        this.localidadCargadaPreferecial.boletas[i+80].vendida 
       || this.localidadCargadaPreferecial.boletas[i+80].reserva 
      ) {
        this.lista5[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+80].reservado) {
        this.lista5[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+80].disponible) {
        this.lista5[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+80].reservado 
        && !this.localidadCargadaPreferecial.boletas[i+80].vendida) {
        this.lista5[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+80].id,
          valor: this.localidadCargadaPreferecial.boletas[i+80].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIP.boletas[i+80].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i+80].reserva 
      ) {
        this.lista17[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+80].reservado) {
        this.lista17[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+80].disponible) {
        this.lista17[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+80].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i+80].vendida) {
        this.lista17[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+80].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+80].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<36;i++){
    
      if (
        this.localidadCargadaPreferecial.boletas[i+113].vendida 
       || this.localidadCargadaPreferecial.boletas[i+113].reserva 
      ) {
        this.lista6[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+113].reservado) {
        this.lista6[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+113].disponible) {
        this.lista6[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+113].reservado 
        && !this.localidadCargadaPreferecial.boletas[i+113].vendida) {
        this.lista6[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+113].id,
          valor: this.localidadCargadaPreferecial.boletas[i+113].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIP.boletas[i+113].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i+113].reserva 
      ) {
        this.lista18[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+113].reservado) {
        this.lista18[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+113].disponible) {
        this.lista18[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+113].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i+113].vendida) {
        this.lista18[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+113].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+113].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<13;i++){
    
      if (
        this.localidadCargadaPreferecial.boletas[i+149].vendida 
       || this.localidadCargadaPreferecial.boletas[i+149].reserva 
      ) {
        this.lista7[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+149].reservado) {
        this.lista7[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+149].disponible) {
        this.lista7[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+149].reservado 
        && !this.localidadCargadaPreferecial.boletas[i+149].vendida) {
        this.lista7[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+149].id,
          valor: this.localidadCargadaPreferecial.boletas[i+149].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIP.boletas[i+149].vendida 
       || this.localidadCargadaBoletasVIP.boletas[i+149].reserva 
      ) {
        this.lista19[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+149].reservado) {
        this.lista19[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+149].disponible) {
        this.lista19[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+149].reservado 
        && !this.localidadCargadaBoletasVIP.boletas[i+149].vendida) {
        this.lista19[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+149].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+149].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }
    
    for(let i=0;i<168;i++){
    
      if (
        this.localidadCargadaBoletas.boletas[i].vendida 
       || this.localidadCargadaBoletas.boletas[i].reserva 
      ) {
        this.lista8[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletas.boletas[i].reservado) {
        this.lista8[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i].disponible) {
        this.lista8[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i].reservado 
        && !this.localidadCargadaBoletas.boletas[i].vendida) {
        this.lista8[i] = {
          id:this.localidadCargadaBoletas.boletas[i].id,
          valor: this.localidadCargadaBoletas.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<4;i++){
    
      if (
        this.localidadCargadaBoletas.boletas[i+168].vendida 
       || this.localidadCargadaBoletas.boletas[i+168].reserva 
      ) {
        this.lista9[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletas.boletas[i+168].reservado) {
        this.lista9[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+168].disponible) {
        this.lista9[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+168].reservado 
        && !this.localidadCargadaBoletas.boletas[i+168].vendida) {
        this.lista9[i] = {
          id:this.localidadCargadaBoletas.boletas[i+168].id,
          valor: this.localidadCargadaBoletas.boletas[i+168].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletas.boletas[i+172].vendida 
       || this.localidadCargadaBoletas.boletas[i+172].reserva 
      ) {
        this.lista10[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletas.boletas[i+172].reservado) {
        this.lista10[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+172].disponible) {
        this.lista10[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+172].reservado 
        && !this.localidadCargadaBoletas.boletas[i+172].vendida) {
        this.lista10[i] = {
          id:this.localidadCargadaBoletas.boletas[i+172].id,
          valor: this.localidadCargadaBoletas.boletas[i+172].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletas.boletas[i+176].vendida 
       || this.localidadCargadaBoletas.boletas[i+176].reserva 
      ) {
        this.lista11[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletas.boletas[i+176].reservado) {
        this.lista11[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+176].disponible) {
        this.lista11[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+176].reservado 
        && !this.localidadCargadaBoletas.boletas[i+176].vendida) {
        this.lista11[i] = {
          id:this.localidadCargadaBoletas.boletas[i+176].id,
          valor: this.localidadCargadaBoletas.boletas[i+176].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletas.boletas[i+180].vendida 
       || this.localidadCargadaBoletas.boletas[i+180].reserva 
      ) {
        this.lista12[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletas.boletas[i+180].reservado) {
        this.lista12[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+180].disponible) {
        this.lista12[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletas.boletas[i+180].reservado 
        && !this.localidadCargadaBoletas.boletas[i+180].vendida) {
        this.lista12[i] = {
          id:this.localidadCargadaBoletas.boletas[i+180].id,
          valor: this.localidadCargadaBoletas.boletas[i+180].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<96;i++){
    
      if (
        this.localidadCargadaGeneral.boletas[i].vendida 
       || this.localidadCargadaGeneral.boletas[i].reserva 
      ) {
        this.lista20[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i].reservado) {
        this.lista20[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i].disponible) {
        this.lista20[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i].reservado 
        && !this.localidadCargadaGeneral.boletas[i].vendida) {
        this.lista20[i] = {
          id:this.localidadCargadaGeneral.boletas[i].id,
          valor: this.localidadCargadaGeneral.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasVIPPiso1.boletas[i].vendida 
       || this.localidadCargadaBoletasVIPPiso1.boletas[i].reserva 
      ) {
        this.lista26[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIPPiso1.boletas[i].reservado) {
        this.lista26[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIPPiso1.boletas[i].disponible) {
        this.lista26[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIPPiso1.boletas[i].reservado 
        && !this.localidadCargadaBoletasVIPPiso1.boletas[i].vendida) {
        this.lista26[i] = {
          id:this.localidadCargadaBoletasVIPPiso1.boletas[i].id,
          valor: this.localidadCargadaBoletasVIPPiso1.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasGeneralPiso2.boletas[i].vendida 
       || this.localidadCargadaBoletasGeneralPiso2.boletas[i].reserva 
      ) {
        this.lista29[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasGeneralPiso2.boletas[i].reservado) {
        this.lista29[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i].disponible) {
        this.lista29[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i].reservado 
        && !this.localidadCargadaBoletasGeneralPiso2.boletas[i].vendida) {
        this.lista29[i] = {
          id:this.localidadCargadaBoletasGeneralPiso2.boletas[i].id,
          valor: this.localidadCargadaBoletasGeneralPiso2.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<8;i++){
    
      if (
        this.localidadCargadaGeneral.boletas[i+96].vendida 
       || this.localidadCargadaGeneral.boletas[i+96].reserva 
      ) {
        this.lista21[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+96].reservado) {
        this.lista21[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+96].disponible) {
        this.lista21[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+96].reservado 
        && !this.localidadCargadaGeneral.boletas[i+96].vendida) {
        this.lista21[i] = {
          id:this.localidadCargadaGeneral.boletas[i+96].id,
          valor: this.localidadCargadaGeneral.boletas[i+96].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaGeneral.boletas[i+117].vendida 
       || this.localidadCargadaGeneral.boletas[i+117].reserva 
      ) {
        this.lista25[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+117].reservado) {
        this.lista25[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+117].disponible) {
        this.lista25[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+117].reservado 
        && !this.localidadCargadaGeneral.boletas[i+117].vendida) {
        this.lista25[i] = {
          id:this.localidadCargadaGeneral.boletas[i+117].id,
          valor: this.localidadCargadaGeneral.boletas[i+117].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].vendida 
       || this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].reserva 
      ) {
        this.lista30[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].reservado) {
        this.lista30[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].disponible) {
        this.lista30[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].reservado 
        && !this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].vendida) {
        this.lista30[i] = {
          id:this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].id,
          valor: this.localidadCargadaBoletasGeneralPiso2.boletas[i+96].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].vendida 
       || this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].reserva 
      ) {
        this.lista34[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].reservado) {
        this.lista34[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].disponible) {
        this.lista34[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].reservado 
        && !this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].vendida) {
        this.lista34[i] = {
          id:this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].id,
          valor: this.localidadCargadaBoletasGeneralPiso2.boletas[i+117].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }
    

    for(let i=0;i<3;i++){
    
      if (
        this.localidadCargadaGeneral.boletas[i+104].vendida 
       || this.localidadCargadaGeneral.boletas[i+104].reserva 
      ) {
        this.lista22[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+104].reservado) {
        this.lista22[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+104].disponible) {
        this.lista22[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+104].reservado 
        && !this.localidadCargadaGeneral.boletas[i+104].vendida) {
        this.lista22[i] = {
          id:this.localidadCargadaGeneral.boletas[i+104].id,
          valor: this.localidadCargadaGeneral.boletas[i+104].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaGeneral.boletas[i+114].vendida 
       || this.localidadCargadaGeneral.boletas[i+114].reserva 
      ) {
        this.lista24[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+114].reservado) {
        this.lista24[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+114].disponible) {
        this.lista24[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+114].reservado 
        && !this.localidadCargadaGeneral.boletas[i+114].vendida) {
        this.lista24[i] = {
          id:this.localidadCargadaGeneral.boletas[i+114].id,
          valor: this.localidadCargadaGeneral.boletas[i+114].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].vendida 
       || this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].reserva 
      ) {
        this.lista31[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].reservado) {
        this.lista31[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].disponible) {
        this.lista31[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].reservado 
        && !this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].vendida) {
        this.lista31[i] = {
          id:this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].id,
          valor: this.localidadCargadaBoletasGeneralPiso2.boletas[i+104].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

      if (
        this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].vendida 
       || this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].reserva 
      ) {
        this.lista33[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].reservado) {
        this.lista33[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].disponible) {
        this.lista33[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].reservado 
        && !this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].vendida) {
        this.lista33[i] = {
          id:this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].id,
          valor: this.localidadCargadaBoletasGeneralPiso2.boletas[i+114].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<9;i++){
    
      if (
        this.localidadCargadaBoletasVIPPiso1.boletas[i+96].vendida 
       || this.localidadCargadaBoletasVIPPiso1.boletas[i+96].reserva 
      ) {
        this.lista27[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIPPiso1.boletas[i+96].reservado) {
        this.lista27[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIPPiso1.boletas[i+96].disponible) {
        this.lista27[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIPPiso1.boletas[i+96].reservado 
        && !this.localidadCargadaBoletasVIPPiso1.boletas[i+96].vendida) {
        this.lista27[i] = {
          id:this.localidadCargadaBoletasVIPPiso1.boletas[i+96].id,
          valor: this.localidadCargadaBoletasVIPPiso1.boletas[i+96].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<20;i++){
    
      if (
        this.localidadCargadaBoletasVIPPiso1.boletas[i+105].vendida 
       || this.localidadCargadaBoletasVIPPiso1.boletas[i+105].reserva 
      ) {
        this.lista28[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIPPiso1.boletas[i+105].reservado) {
        this.lista28[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIPPiso1.boletas[i+105].disponible) {
        this.lista28[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIPPiso1.boletas[i+105].reservado 
        && !this.localidadCargadaBoletasVIPPiso1.boletas[i+105].vendida) {
        this.lista28[i] = {
          id:this.localidadCargadaBoletasVIPPiso1.boletas[i+105].id,
          valor: this.localidadCargadaBoletasVIPPiso1.boletas[i+105].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }
    
    }

  }
  

  cargarLocalidadEnMapa22() {

    for(let i=0;i<1;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i+9].vendido &&
        !this.localidadCargadaGeneral.palcos[i+9].reservado &&
        this.localidadCargadaGeneral.palcos[i+9].disponible &&
        !this.localidadCargadaGeneral.palcos[i+9].proceso
      ){
        this.lista9[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+9].numeroDentroDeEvento,
          localidad: 'monastery',
          id:this.localidadCargadaGeneral.palcos[i+9].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+9].vendido ||
        this.localidadCargadaGeneral.palcos[i+9].reservado ||
        !this.localidadCargadaGeneral.palcos[i+9].disponible
      ) {
        this.lista9[i] =  {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+9].proceso) {
        this.lista9[i]= {
          valor:'p',
          localidad: 'monastery',
          id:'p'
        }
      }

      this.lista13[i] = {
        valor:'v',
        localidad: 'promo',
        id:'v'
      }

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+9].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+9].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+9].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+9].proceso
      ){
        this.lista10[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+9].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+9].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+9].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+9].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+9].disponible
      ) {
        this.lista10[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+9].proceso) {
        this.lista10[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    for(let i=0;i<2;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i].vendido &&
        !this.localidadCargadaGeneral.palcos[i].reservado &&
        this.localidadCargadaGeneral.palcos[i].disponible &&
        !this.localidadCargadaGeneral.palcos[i].proceso
      ){
        this.lista3[i] = {
          valor:this.localidadCargadaGeneral.palcos[i].numeroDentroDeEvento,
          localidad: 'monastery',
          id:this.localidadCargadaGeneral.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista3[i] =  {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista3[i]= {
          valor:'p',
          localidad: 'monastery',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].proceso
      ){
        this.lista4[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].disponible
      ) {
        this.lista4[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i].proceso) {
        this.lista4[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }
    
    for(let i=0;i<5;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i+3].vendido &&
        !this.localidadCargadaGeneral.palcos[i+3].reservado &&
        this.localidadCargadaGeneral.palcos[i+3].disponible &&
        !this.localidadCargadaGeneral.palcos[i+3].proceso
      ){
        this.lista6[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+3].numeroDentroDeEvento,
          localidad: 'monastery',
          id:this.localidadCargadaGeneral.palcos[i+3].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+3].vendido ||
        this.localidadCargadaGeneral.palcos[i+3].reservado ||
        !this.localidadCargadaGeneral.palcos[i+3].disponible
      ) {
        this.lista6[i] =  {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+3].proceso) {
        this.lista6[i]= {
          valor:'p',
          localidad: 'monastery',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+3].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+3].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+3].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+3].proceso
      ){
        this.lista7[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+3].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+3].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+3].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+3].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+3].disponible
      ) {
        this.lista7[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+3].proceso) {
        this.lista7[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    for(let i=0;i<8;i++){
      this.lista1[i] = {
        valor:'v',
        localidad: 'promo',
        id:'v'
      }

      if (
        !this.localidadCargadaGeneral.palcos[i+14].vendido &&
        !this.localidadCargadaGeneral.palcos[i+14].reservado &&
        this.localidadCargadaGeneral.palcos[i+14].disponible &&
        !this.localidadCargadaGeneral.palcos[i+14].proceso
      ){
        this.lista11[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+14].numeroDentroDeEvento,
          localidad: 'monastery',
          id:this.localidadCargadaGeneral.palcos[i+14].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+14].vendido ||
        this.localidadCargadaGeneral.palcos[i+14].reservado ||
        !this.localidadCargadaGeneral.palcos[i+14].disponible
      ) {
        this.lista11[i] =  {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+14].proceso) {
        this.lista11[i]= {
          valor:'p',
          localidad: 'monastery',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+14].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+14].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+14].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+14].proceso
      ){
        this.lista12[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+14].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+14].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+14].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+14].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+14].disponible
      ) {
        this.lista12[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+14].proceso) {
        this.lista12[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      
    }
    for(let i=0;i<10;i++){
      this.lista2[i] = {
        valor:'v',
        localidad: 'promo',
        id:'v'
      }
    }

    for(let i=0;i<10;i++){
      
      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].proceso
      ){
        this.lista5[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].disponible
      ) {
        this.lista5[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+1].proceso) {
        this.lista5[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }
    }


    for(let i=0;i<12;i++){

      


      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].proceso
      ){
        this.lista8[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].disponible
      ) {
        this.lista8[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+12].proceso) {
        this.lista8[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

    }
    

  }

  cargarLocalidadEnMapa23() {

    
    for(let i=0;i<5;i++){
      
        this.lista1[i] = {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
        this.lista2[i] = {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
        this.lista3[i] = {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
        this.lista4[i] = {
          valor:'v',
          localidad: 'monastery',
          id:'v'
        }
    }

    for(let i=0;i<6;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i].vendido &&
        !this.localidadCargadaGeneral.palcos[i].reservado &&
        this.localidadCargadaGeneral.palcos[i].disponible &&
        !this.localidadCargadaGeneral.palcos[i].proceso
      ){
        this.lista5[i] = {
          valor:this.localidadCargadaGeneral.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista5[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista5[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaGeneral.palcos[i+6].vendido &&
        !this.localidadCargadaGeneral.palcos[i+6].reservado &&
        this.localidadCargadaGeneral.palcos[i+6].disponible &&
        !this.localidadCargadaGeneral.palcos[i+6].proceso
      ){
        this.lista6[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+6].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+6].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+6].vendido ||
        this.localidadCargadaGeneral.palcos[i+6].reservado ||
        !this.localidadCargadaGeneral.palcos[i+6].disponible
      ) {
        this.lista6[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+6].proceso) {
        this.lista6[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }
    
    for(let i=0;i<7;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i+12].vendido &&
        !this.localidadCargadaGeneral.palcos[i+12].reservado &&
        this.localidadCargadaGeneral.palcos[i+12].disponible &&
        !this.localidadCargadaGeneral.palcos[i+12].proceso
      ){
        this.lista7[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+12].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+12].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+12].vendido ||
        this.localidadCargadaGeneral.palcos[i+12].reservado ||
        !this.localidadCargadaGeneral.palcos[i+12].disponible
      ) {
        this.lista7[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+12].proceso) {
        this.lista7[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaGeneral.palcos[i+19].vendido &&
        !this.localidadCargadaGeneral.palcos[i+19].reservado &&
        this.localidadCargadaGeneral.palcos[i+19].disponible &&
        !this.localidadCargadaGeneral.palcos[i+19].proceso
      ){
        this.lista8[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+19].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+19].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+19].vendido ||
        this.localidadCargadaGeneral.palcos[i+19].reservado ||
        !this.localidadCargadaGeneral.palcos[i+19].disponible
      ) {
        this.lista8[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+19].proceso) {
        this.lista8[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaGeneral.palcos[i+26].vendido &&
        !this.localidadCargadaGeneral.palcos[i+26].reservado &&
        this.localidadCargadaGeneral.palcos[i+26].disponible &&
        !this.localidadCargadaGeneral.palcos[i+26].proceso
      ){
        this.lista9[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+26].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+26].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+26].vendido ||
        this.localidadCargadaGeneral.palcos[i+26].reservado ||
        !this.localidadCargadaGeneral.palcos[i+26].disponible
      ) {
        this.lista9[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+26].proceso) {
        this.lista9[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaGeneral.palcos[i+33].vendido &&
        !this.localidadCargadaGeneral.palcos[i+33].reservado &&
        this.localidadCargadaGeneral.palcos[i+33].disponible &&
        !this.localidadCargadaGeneral.palcos[i+33].proceso
      ){
        this.lista10[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+33].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+33].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+33].vendido ||
        this.localidadCargadaGeneral.palcos[i+33].reservado ||
        !this.localidadCargadaGeneral.palcos[i+33].disponible
      ) {
        this.lista10[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+33].proceso) {
        this.lista10[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
    }

    for(let i=0;i<9;i++){
      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+42].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+42].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+42].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+42].proceso
      ){
        this.lista17[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+42].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+42].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+42].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+42].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+42].disponible
      ) {
        this.lista17[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+42].proceso) {
        this.lista17[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+51].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+51].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+51].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+51].proceso
      ){
        this.lista18[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+51].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+51].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+51].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+51].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+51].disponible
      ) {
        this.lista18[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+51].proceso) {
        this.lista18[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }

      if (
        !this.localidadCargada.palcos[i].vendido &&
        !this.localidadCargada.palcos[i].reservado &&
        this.localidadCargada.palcos[i].disponible &&
        !this.localidadCargada.palcos[i].proceso
      ){
        this.lista30[i] = {
          valor:this.localidadCargada.palcos[i].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargada.palcos[i].id
          
        }
      }
      
      else if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista30[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista30[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargada.palcos[i+9].vendido &&
        !this.localidadCargada.palcos[i+9].reservado &&
        this.localidadCargada.palcos[i+9].disponible &&
        !this.localidadCargada.palcos[i+9].proceso
      ){
        this.lista31[i] = {
          valor:this.localidadCargada.palcos[i+9].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargada.palcos[i+9].id
          
        }
      }
      
      else if (
        this.localidadCargada.palcos[i+9].vendido ||
        this.localidadCargada.palcos[i+9].reservado ||
        !this.localidadCargada.palcos[i+9].disponible
      ) {
        this.lista31[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargada.palcos[i+9].proceso) {
        this.lista31[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

    }

    for(let i=0;i<10;i++){

      if (
        !this.localidadCargadaGeneral.palcos[i+40].vendido &&
        !this.localidadCargadaGeneral.palcos[i+40].reservado &&
        this.localidadCargadaGeneral.palcos[i+40].disponible &&
        !this.localidadCargadaGeneral.palcos[i+40].proceso
      ){
        this.lista11[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+40].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+40].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+40].vendido ||
        this.localidadCargadaGeneral.palcos[i+40].reservado ||
        !this.localidadCargadaGeneral.palcos[i+40].disponible
      ) {
        this.lista11[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+40].proceso) {
        this.lista11[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaGeneral.palcos[i+50].vendido &&
        !this.localidadCargadaGeneral.palcos[i+50].reservado &&
        this.localidadCargadaGeneral.palcos[i+50].disponible &&
        !this.localidadCargadaGeneral.palcos[i+50].proceso
      ){
        this.lista12[i] = {
          valor:this.localidadCargadaGeneral.palcos[i+50].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaGeneral.palcos[i+50].id
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i+50].vendido ||
        this.localidadCargadaGeneral.palcos[i+50].reservado ||
        !this.localidadCargadaGeneral.palcos[i+50].disponible
      ) {
        this.lista12[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaGeneral.palcos[i+50].proceso) {
        this.lista12[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }

      

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+22].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+22].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+22].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+22].proceso
      ){
        this.lista15[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+22].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+22].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+22].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+22].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+22].disponible
      ) {
        this.lista15[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+22].proceso) {
        this.lista15[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+32].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+32].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+32].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+32].proceso
      ){
        this.lista16[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+32].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+32].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+32].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+32].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+32].disponible
      ) {
        this.lista16[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+32].proceso) {
        this.lista16[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+60].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+60].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+60].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+60].proceso
      ){
        this.lista19[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+60].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+60].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+60].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+60].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+60].disponible
      ) {
        this.lista19[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+60].proceso) {
        this.lista19[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+70].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+70].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+70].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+70].proceso
      ){
        this.lista20[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+70].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+70].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+70].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+70].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+70].disponible
      ) {
        this.lista20[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+70].proceso) {
        this.lista20[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i].proceso
      ){
        this.lista21[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i].disponible
      ) {
        this.lista21[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i].proceso) {
        this.lista21[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].proceso
      ){
        this.lista22[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].disponible
      ) {
        this.lista22[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+10].proceso) {
        this.lista22[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].proceso
      ){
        this.lista24[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].disponible
      ) {
        this.lista24[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+40].proceso) {
        this.lista24[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].proceso
      ){
        this.lista25[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].disponible
      ) {
        this.lista25[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+50].proceso) {
        this.lista25[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }
      

    }
    for(let i=0;i<11;i++){
      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].proceso
      ){
        this.lista13[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i].disponible
      ) {
        this.lista13[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i].proceso) {
        this.lista13[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }
      
      if (
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+11].vendido &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+11].reservado &&
        this.localidadCargadaBoletasVIPPiso1.palcos[i+11].disponible &&
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+11].proceso
      ){
        this.lista14[i] = {
          valor:this.localidadCargadaBoletasVIPPiso1.palcos[i+11].numeroDentroDeEvento,
          localidad: 'promo',
          id:this.localidadCargadaBoletasVIPPiso1.palcos[i+11].id
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIPPiso1.palcos[i+11].vendido ||
        this.localidadCargadaBoletasVIPPiso1.palcos[i+11].reservado ||
        !this.localidadCargadaBoletasVIPPiso1.palcos[i+11].disponible
      ) {
        this.lista14[i] =  {
          valor:'v',
          localidad: 'promo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i+11].proceso) {
        this.lista14[i]= {
          valor:'p',
          localidad: 'promo',
          id:'p'
        }
      }

      
    }

    for(let i=0;i<20;i++){

      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].proceso
      ){
        this.lista23[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].disponible
      ) {
        this.lista23[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+20].proceso) {
        this.lista23[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].vendido &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].reservado &&
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].disponible &&
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].proceso
      ){
        this.lista26[i] = {
          valor:this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].vendido ||
        this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].reservado ||
        !this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].disponible
      ) {
        this.lista26[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasGeneralPiso2.palcos[i+60].proceso) {
        this.lista26[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIP.palcos[i].vendido &&
        !this.localidadCargadaBoletasVIP.palcos[i].reservado &&
        this.localidadCargadaBoletasVIP.palcos[i].disponible &&
        !this.localidadCargadaBoletasVIP.palcos[i].proceso
      ){
        this.lista27[i] = {
          valor:this.localidadCargadaBoletasVIP.palcos[i].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasVIP.palcos[i].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIP.palcos[i].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i].disponible
      ) {
        this.lista27[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIP.palcos[i].proceso) {
        this.lista27[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargadaBoletasVIP.palcos[i+130].vendido &&
        !this.localidadCargadaBoletasVIP.palcos[i+130].reservado &&
        this.localidadCargadaBoletasVIP.palcos[i+130].disponible &&
        !this.localidadCargadaBoletasVIP.palcos[i+130].proceso
      ){
        this.lista29[i] = {
          valor:this.localidadCargadaBoletasVIP.palcos[i+130].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasVIP.palcos[i+130].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIP.palcos[i+130].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+130].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+130].disponible
      ) {
        this.lista29[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIP.palcos[i+130].proceso) {
        this.lista29[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

      if (
        !this.localidadCargada.palcos[i+40].vendido &&
        !this.localidadCargada.palcos[i+40].reservado &&
        this.localidadCargada.palcos[i+40].disponible &&
        !this.localidadCargada.palcos[i+40].proceso
      ){
        this.lista33[i] = {
          valor:this.localidadCargada.palcos[i+40].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargada.palcos[i+40].id
          
        }
      }
      
      else if (
        this.localidadCargada.palcos[i+40].vendido ||
        this.localidadCargada.palcos[i+40].reservado ||
        !this.localidadCargada.palcos[i+40].disponible
      ) {
        this.lista33[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargada.palcos[i+40].proceso) {
        this.lista33[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }

    }
    
    for(let i=0;i<22;i++){
      if (
        !this.localidadCargada.palcos[i+18].vendido &&
        !this.localidadCargada.palcos[i+18].reservado &&
        this.localidadCargada.palcos[i+18].disponible &&
        !this.localidadCargada.palcos[i+18].proceso
      ){
        this.lista32[i] = {
          valor:this.localidadCargada.palcos[i+18].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargada.palcos[i+18].id
          
        }
      }
      
      else if (
        this.localidadCargada.palcos[i+18].vendido ||
        this.localidadCargada.palcos[i+18].reservado ||
        !this.localidadCargada.palcos[i+18].disponible
      ) {
        this.lista32[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargada.palcos[i+18].proceso) {
        this.lista32[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }
    }
    
    for(let i=0;i<110;i++){
      if (
        !this.localidadCargadaBoletasVIP.palcos[i+20].vendido &&
        !this.localidadCargadaBoletasVIP.palcos[i+20].reservado &&
        this.localidadCargadaBoletasVIP.palcos[i+20].disponible &&
        !this.localidadCargadaBoletasVIP.palcos[i+20].proceso
      ){
        this.lista28[i] = {
          valor:this.localidadCargadaBoletasVIP.palcos[i+20].numeroDentroDeEvento,
          localidad: 'fumeteo',
          id:this.localidadCargadaBoletasVIP.palcos[i+20].id
          
        }
      }
      
      else if (
        this.localidadCargadaBoletasVIP.palcos[i+20].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+20].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+20].disponible
      ) {
        this.lista28[i] =  {
          valor:'v',
          localidad: 'fumeteo',
          id:'v'
        }
      } else if (this.localidadCargadaBoletasVIP.palcos[i+20].proceso) {
        this.lista28[i]= {
          valor:'p',
          localidad: 'fumeteo',
          id:'p'
        }
      }
    }


  }


  cargarLocalidadEnMapa4(){

    for(let i=0;i<3;i++){

      if (
        !this.localidadCargadaPreferecial.palcos[i].vendido &&
        !this.localidadCargadaPreferecial.palcos[i].reservado &&
        this.localidadCargadaPreferecial.palcos[i].disponible &&
        !this.localidadCargadaPreferecial.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaPreferecial.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
          id:this.localidadCargadaPreferecial.palcos[i].id
        }
      }
      
      else if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
          id:'v'
        }
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
          id:'p'
        }
      }
      


      
    }

}
cargarLocalidadEnMapa5(){
  for(let i=0;i<2;i++){

    if (
      !this.localidadCargadaGeneral.palcos[i].vendido &&
      !this.localidadCargadaGeneral.palcos[i].reservado &&
      this.localidadCargadaGeneral.palcos[i].disponible &&
      !this.localidadCargadaGeneral.palcos[i].proceso
    ){
      this.lista1[i] = {
        valor:this.localidadCargadaGeneral.palcos[i].numeroDentroDeEvento,
        localidad: 'oro',
        id:this.localidadCargadaGeneral.palcos[i].id
      }
    }
    
    else if (
      this.localidadCargadaGeneral.palcos[i].vendido ||
      this.localidadCargadaGeneral.palcos[i].reservado ||
      !this.localidadCargadaGeneral.palcos[i].disponible
    ) {
      this.lista1[i] =  {
        valor:'v',
        localidad: 'oro',
        id:'v'
      }
    } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
      this.lista1[i]= {
        valor:'p',
        localidad: 'oro',
        id:'p'
      }
    }
    

    if (
      !this.localidadCargadaGeneral.palcos[i+2].vendido &&
      !this.localidadCargadaGeneral.palcos[i+2].reservado &&
      this.localidadCargadaGeneral.palcos[i+2].disponible &&
      !this.localidadCargadaGeneral.palcos[i+2].proceso
    ){
      this.lista2[i] = {
        valor:this.localidadCargadaGeneral.palcos[i+2].numeroDentroDeEvento,
        localidad: 'oro',
        id:this.localidadCargadaGeneral.palcos[i+2].id
      }
    }
    else if (
      this.localidadCargadaGeneral.palcos[i+2].vendido ||
      this.localidadCargadaGeneral.palcos[i+2].reservado ||
      !this.localidadCargadaGeneral.palcos[i+2].disponible
    ) {
      this.lista2[i] = {
        valor:'v',
        localidad: 'oro',
        
      }
      
    } else if (this.localidadCargadaGeneral.palcos[i+2].proceso) {
      this.lista2[i] = {
        valor:'p',
        localidad: 'oro',
        id:'p'
      }
    }

    if (
      !this.localidadCargadaGeneral.palcos[i+4].vendido &&
      !this.localidadCargadaGeneral.palcos[i+4].reservado &&
      this.localidadCargadaGeneral.palcos[i+4].disponible &&
      !this.localidadCargadaGeneral.palcos[i+4].proceso
    ){
      this.lista3[i] = {
        valor:this.localidadCargadaGeneral.palcos[i+4].numeroDentroDeEvento,
        localidad: 'oro',
        id:this.localidadCargadaGeneral.palcos[i+4].id
      }
    }
    else if (
      this.localidadCargadaGeneral.palcos[i+4].vendido ||
      this.localidadCargadaGeneral.palcos[i+4].reservado ||
      !this.localidadCargadaGeneral.palcos[i+4].disponible
    ) {
      this.lista3[i] = {
        valor:'v',
        localidad: 'oro',
        id:'v'
      }
      
    } else if (this.localidadCargadaGeneral.palcos[i+4].proceso) {
      this.lista3[i] = {
        valor:'p',
        localidad: 'oro',
        id:'p'
      }
    }
   
    if (
      !this.localidadCargadaGeneral.palcos[i+6].vendido &&
      !this.localidadCargadaGeneral.palcos[i+6].reservado &&
      this.localidadCargadaGeneral.palcos[i+6].disponible &&
      !this.localidadCargadaGeneral.palcos[i+6].proceso
    ){
      this.lista4[i] = {
        valor:this.localidadCargadaGeneral.palcos[i+6].numeroDentroDeEvento,
        localidad: 'oro',
        id:this.localidadCargadaGeneral.palcos[i+6].id
      }
    }
    else if (
      this.localidadCargadaGeneral.palcos[i+6].vendido ||
      this.localidadCargadaGeneral.palcos[i+6].reservado ||
      !this.localidadCargadaGeneral.palcos[i+6].disponible
    ) {
      this.lista4[i] = {
        valor:'v',
        localidad: 'oro',
        id:'v'
      }
      
    } else if (this.localidadCargadaGeneral.palcos[i+6].proceso) {
      this.lista4[i] = {
        valor:'p',
        localidad: 'oro',
        id:'p'
      }
    }


   
  }

  for(let i=0;i <5;i++) {


    if (
      !this.localidadCargadaBoletas.palcos[i].vendido &&
      !this.localidadCargadaBoletas.palcos[i].reservado &&
      this.localidadCargadaBoletas.palcos[i].disponible &&
      !this.localidadCargadaBoletas.palcos[i].proceso
    ){
      this.lista5[i] = {
        valor:this.localidadCargadaBoletas.palcos[i].numeroDentroDeEvento,
        localidad: 'prem',
        id:this.localidadCargadaBoletas.palcos[i].id
      }
    }
    else if (
      this.localidadCargadaBoletas.palcos[i].vendido ||
      this.localidadCargadaBoletas.palcos[i].reservado ||
      !this.localidadCargadaBoletas.palcos[i].disponible
    ) {
      this.lista5[i] = {
        valor:'v',
        localidad: 'prem',
        id:'v'
      }
      
    } else if (this.localidadCargadaBoletas.palcos[i].proceso) {
      this.lista5[i] = {
        valor:'p',
        localidad: 'prem',
        id:'p'
      }
    }

    if (
      !this.localidadCargadaBoletas.palcos[i+5].vendido &&
      !this.localidadCargadaBoletas.palcos[i+5].reservado &&
      this.localidadCargadaBoletas.palcos[i+5].disponible &&
      !this.localidadCargadaBoletas.palcos[i+5].proceso
    ){
      this.lista6[i] = {
        valor:this.localidadCargadaBoletas.palcos[i+5].numeroDentroDeEvento ,
        localidad: 'prem',
        id:this.localidadCargadaBoletas.palcos[i+5].id
      }
    }
    else if (
      this.localidadCargadaBoletas.palcos[i+5].vendido ||
      this.localidadCargadaBoletas.palcos[i+5].reservado ||
      !this.localidadCargadaBoletas.palcos[i+5].disponible
    ) {
      this.lista6[i] = {
        valor:'v',
        localidad: 'prem',
        id:'v'
      }
      
    } else if (this.localidadCargadaBoletas.palcos[i+5].proceso) {
      this.lista6[i] = {
        valor:'p',
        localidad: 'prem',
        id:'p'
      }
    }

    
  }

  for(let i=0;i<4;i++){
    if (
      !this.localidadCargadaBoletasVIPPiso1.palcos[i].vendido &&
      !this.localidadCargadaBoletasVIPPiso1.palcos[i].reservado &&
      this.localidadCargadaBoletasVIPPiso1.palcos[i].disponible &&
      !this.localidadCargadaBoletasVIPPiso1.palcos[i].proceso
    ){
      this.lista7[i] = {
        valor:this.localidadCargadaBoletasVIPPiso1.palcos[i].numeroDentroDeEvento,
        localidad: 'monastery',
        id:this.localidadCargadaBoletasVIPPiso1.palcos[i].id
      }
    }
    else if (
      this.localidadCargadaBoletasVIPPiso1.palcos[i].vendido ||
      this.localidadCargadaBoletasVIPPiso1.palcos[i].reservado ||
      !this.localidadCargadaBoletasVIPPiso1.palcos[i].disponible
    ) {
      this.lista7[i] = {
        valor:'v',
        localidad: 'monastery',
        id:'v'
      }
      
    } else if (this.localidadCargadaBoletasVIPPiso1.palcos[i].proceso) {
      this.lista7[i] = {
        valor:'p',
        localidad: 'monastery',
        id:'p'
      }
    }
  }
    
}
  cargarLocalidadEnMapa3(){
    for(let i=0;i<5;i++){
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista1[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista1[i].valor = 'p';
      }


      if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista3[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista3[i].valor = 'p';
      }

      if (
        this.localidadCargadaGeneral.palcos[i+5].vendido ||
        this.localidadCargadaGeneral.palcos[i+5].reservado ||
        !this.localidadCargadaGeneral.palcos[i+5].disponible
      ) {
        this.lista2[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i+5].proceso) {
        this.lista2[i].valor = 'p';
      }

      if (
        this.localidadCargada.palcos[i+5].vendido ||
        this.localidadCargada.palcos[i+5].reservado ||
        !this.localidadCargada.palcos[i+5].disponible
      ) {
        this.lista4[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+5].proceso) {
        this.lista4[i].valor = 'p';
      }
      
    }
    for(let i=0;i<4;i++){

     
    }

  
    
  }
  ponerNumerosMapa1() {
  
      this.lista1[0] = {
        valor:  1,
        localidad: 'oro',
      };
      this.lista2[0] = {
        valor:  2,
        localidad: 'oro',
      };

  

        
        this.lista3[0] = {
          valor: "M" + 1,
          localidad: 'vip',
        };
      
        this.lista3[1] = {
          valor: "M" + 3,
          localidad: 'vip',
        };

    
        this.lista4[0] = {
          valor: "M" + 2,
          localidad: 'vip',
        };
      
        this.lista4[1] = {
          valor: "M" + 4,
          localidad: 'vip',
        };

        this.lista5[0] = {
          valor: "M" + 5,
          localidad: 'vip',
        };
      
        this.lista5[1] = {
          valor: "M" + 7,
          localidad: 'vip',
        };

        this.lista6[0] = {
          valor: "M" + 6,
          localidad: 'vip',
        };
      
        this.lista6[1] = {
          valor: "M" + 8,
          localidad: 'vip',
        };

        this.lista7[0] = {
          valor: "M" + 9,
          localidad: 'vip',
        };
      
        this.lista7[1] = {
          valor: "M" + 11,
          localidad: 'vip',
        };

        this.lista8[0] = {
          valor: "M" + 10,
          localidad: 'vip',
        };
      
        this.lista8[1] = {
          valor: "M" + 12,
          localidad: 'vip',
        };

    

      this.lista9[0] = {
        valor:  'A',
        localidad: 'prem',
      };
      this.lista10[0] = {
        valor:  'C',
        localidad: 'prem',
      };

      this.lista11[0] = {
        valor:  'B',
        localidad: 'prem',
      };
      this.lista12[0] = {
        valor:  'D',
        localidad: 'prem',
      };
  }

  cargarLocalidadEnMapa1(){


    for(let i=0;i<20;i++){
      if (
        !this.localidadCargadaGeneral.palcos[i].vendido &&
        !this.localidadCargadaGeneral.palcos[i].reservado &&
        this.localidadCargadaGeneral.palcos[i].disponible &&
        !this.localidadCargadaGeneral.palcos[i].proceso
      ){
        this.lista1[i] = {
          valor:this.localidadCargadaGeneral.palcos[i].numeroDentroDeEvento,
          localidad: 'oro',
        }
      }
      
      else if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista1[i] =  {
          valor:'v',
          localidad: 'oro',
        }
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista1[i]= {
          valor:'p',
          localidad: 'oro',
        }
      }
    }


  }

ponerNumerosMapa11() {
  for (let i = 1; i <15; i++) {
    this.lista1[i - 1] = {
      valor: "D" + i,
      localidad: 'pre',
    };
    this.lista2[i - 1] = {
      valor: "D" + (i+14),
      localidad: 'pre',
    };
    this.lista3[i - 1] = {
      valor: "D" + (i+28),
      localidad: 'pre',
    };
    this.lista4[i - 1] = {
      valor: "D" + (i+42),
      localidad: 'pre',
    };
    this.lista5[i - 1] = {
      valor: "D" + (i+56),
      localidad: 'pre',
    };
    this.lista6[i - 1] = {
      valor: "D" + (i+70),
      localidad: 'pre',
    };
    this.lista7[i - 1] = {
      valor: "D" + (i+84),
      localidad: 'pre',
    };
    this.lista8[i - 1] = {
      valor: "D" + (i+98),
      localidad: 'pre',
    };
    this.lista9[i - 1] = {
      valor: "D" + (i+112),
      localidad: 'pre',
    };
    this.lista10[i - 1] = {
      valor: "D" + (i+126),
      localidad: 'pre',
    };
    this.lista11[i - 1] = {
      valor: "D" + (i+140),
      localidad: 'pre',
    };
    this.lista12[i - 1] = {
      valor: "D" + (i+154),
      localidad: 'pre',
    };
  }



  for (let i = 1; i <4; i++) {

    this.lista24[i - 1] = {
      valor: "C" + (i+55),
      localidad: 'vip',
    };
    this.lista31[i - 1] = {
      valor: "C" + (i+87),
      localidad: 'vip',
    };
    this.lista32[i - 1] = {
      valor: "C" + (i+90),
      localidad: 'vip',
    };

    this.lista55[i - 1] = {
      valor: "F" + (i+14),
      localidad: 'prem',
    };
    this.lista56[i - 1] = {
      valor: "F" + (i+17),
      localidad: 'prem',
    };
    this.lista57[i - 1] = {
      valor: "F" + (i+20),
      localidad: 'prem',
    };
    this.lista58[i - 1] = {
      valor: "F" + (i+23),
      localidad: 'prem',
    };
    this.lista59[i - 1] = {
      valor: "F" + (i+26),
      localidad: 'prem',
    };
  }

  for(let i =1; i<5;i++){
    this.lista25[i - 1] = {
      valor: "C" + (i+58),
      localidad: 'vip',
    };
  }

  for(let i =1; i<6;i++){
    this.lista13[i - 1] = {
      valor: "C" + (i),
      localidad: 'vip',
    };
    this.lista14[i - 1] = {
      valor: "C" + (i+5),
      localidad: 'vip',
    };
    this.lista15[i - 1] = {
      valor: "C" + (i+10),
      localidad: 'vip',
    };
    this.lista16[i - 1] = {
      valor: "C" + (i+15),
      localidad: 'vip',
    };
    this.lista17[i - 1] = {
      valor: "C" + (i+20),
      localidad: 'vip',
    };
    this.lista18[i - 1] = {
      valor: "C" + (i+25),
      localidad: 'vip',
    };
    this.lista19[i - 1] = {
      valor: "C" + (i+30),
      localidad: 'vip',
    };
    this.lista20[i - 1] = {
      valor: "C" + (i+35),
      localidad: 'vip',
    };
    this.lista21[i - 1] = {
      valor: "C" + (i+40),
      localidad: 'vip',
    };
    this.lista22[i - 1] = {
      valor: "C" + (i+45),
      localidad: 'vip',
    };
    this.lista23[i - 1] = {
      valor: "C" + (i+50),
      localidad: 'vip',
    };


    this.lista26[i - 1] = {
      valor: "C" + (i+62),
      localidad: 'vip',
    };
    this.lista27[i - 1] = {
      valor: "C" + (i+67),
      localidad: 'vip',
    };
    this.lista28[i - 1] = {
      valor: "C" + (i+72),
      localidad: 'vip',
    };
    
    this.lista29[i - 1] = {
      valor: "C" + (i+77),
      localidad: 'vip'
    };
    this.lista30[i - 1] = {
      valor: "C" + (i+82),
      localidad: 'vip',
    };

   
    this.lista33[i - 1] = {
      valor: "C" + (i+93),
      localidad: 'vip',
    };
    this.lista34[i - 1] = {
      valor: "C" + (i+98),
      localidad: 'vip',
    };
    this.lista35[i - 1] = {
      valor: "C" + (i+103),
      localidad: 'vip',
    };
    this.lista36[i - 1] = {
      valor: "C" + (i+108),
      localidad: 'vip',
    };
  }

  for(let i =1; i<12;i++){

    this.lista37[i - 1] = {
      valor: "B" + (i+121),
      localidad: 'oro',
    };
    this.lista38[i - 1] = {
      valor: "A" + (i+11),
      localidad: 'oro',
    };
    this.lista39[i - 1] = {
      valor: "A" + (i+22),
      localidad: 'oro',
    };


    this.lista50[i - 1] = {
      valor: "A" + (i+104),
      localidad: 'oro',
    };
    this.lista51[i - 1] = {
      valor: "A" + (i+115),
      localidad: 'oro',
    };
    this.lista52[i - 1] = {
      valor: "A" + (i+126),
      localidad: 'oro',
    };
    this.lista62[i - 1] = {
      valor: "B" + (i),
      localidad: 'oro',
    };
    this.lista63[i - 1] = {
      valor: "B" + (i+11),
      localidad: 'oro',
    };
    this.lista64[i - 1] = {
      valor: "B" + (i+22),
      localidad: 'oro',
    };
    this.lista65[i - 1] = {
      valor: "B" + (i+33),
      localidad: 'oro',
    };
    this.lista66[i - 1] = {
      valor: "B" + (i+44),
      localidad: 'oro',
    };
    this.lista67[i - 1] = {
      valor: "B" + (i+55),
      localidad: 'oro',
    };
    this.lista68[i - 1] = {
      valor: "B" + (i+66),
      localidad: 'oro',
    };
    this.lista69[i - 1] = {
      valor: "B" + (i+77),
      localidad: 'oro',
    };
    this.lista70[i - 1] = {
      valor: "B" + (i+88),
      localidad: 'oro',
    };
    this.lista71[i - 1] = {
      valor: "B" + (i+99),
      localidad: 'oro',
    };
    this.lista72[i - 1] = {
      valor: "B" + (i+110),
      localidad: 'oro',
    };
  }

  for(let i =1; i<13;i++){
    this.lista40[i - 1] = {
      valor: "A" + (i+33),
      localidad: 'oro',
    };
    this.lista41[i - 1] = {
      valor: "A" + (i+45),
      localidad: 'oro',
    };

    this.lista49[i - 1] = {
      valor: "A" + (i+92),
      localidad: 'oro',
    };

  }

  for(let i =1; i<6;i++){
    this.lista42[i - 1] = {
      valor: "A" + (i+57),
      localidad: 'oro',
    };
    this.lista43[i - 1] = {
      valor: "A" + (i+62),
      localidad: 'oro',
    };
    this.lista44[i - 1] = {
      valor: "A" + (i+67),
      localidad: 'oro',
    };
    this.lista45[i - 1] = {
      valor: "A" + (i+72),
      localidad: 'oro',
    };
    this.lista46[i - 1] = {
      valor: "A" + (i+77),
      localidad: 'oro',
    };
    this.lista47[i - 1] = {
      valor: "A" + (i+82),
      localidad: 'oro',
    };
    this.lista48[i - 1] = {
      valor: "A" + (i+87),
      localidad: 'oro',
    };
  }


  for (let i = 1; i <8; i++) {
    this.lista53[i - 1] = {
      valor: "F" + (i),
      localidad: 'prem',
    };
    this.lista54[i - 1] = {
      valor: "F" + (i+7),
      localidad: 'prem',
    };

    this.lista60[i - 1] = {
      valor: "F" + (i+29),
      localidad: 'prem',
    };
    this.lista61[i - 1] = {
      valor: "F" + (i+36),
      localidad: 'prem',
    };
  }

}


  cargarLocalidadEnMapa11() {

    for(let i = 0; i < 7;i++){
      
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista53[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista53[i].valor = 'p';
      }
      
      if (
        this.localidadCargadaGeneral.palcos[i+7].vendido ||
        this.localidadCargadaGeneral.palcos[i+7].reservado ||
        !this.localidadCargadaGeneral.palcos[i+7].disponible
      ) {
        this.lista54[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i+7].proceso) {
        this.lista54[i].valor = 'p';
      }

      if (
        this.localidadCargadaGeneral.palcos[i+29].vendido ||
        this.localidadCargadaGeneral.palcos[i+29].reservado ||
        !this.localidadCargadaGeneral.palcos[i+29].disponible
      ) {
        this.lista60[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i+29].proceso) {
        this.lista60[i].valor = 'p';
      }

      if (
        this.localidadCargadaGeneral.palcos[i+36].vendido ||
        this.localidadCargadaGeneral.palcos[i+36].reservado ||
        !this.localidadCargadaGeneral.palcos[i+36].disponible
      ) {
        this.lista61[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i+36].proceso) {
        this.lista61[i].valor = 'p';
      }
    }

    for (var i = 0; i < 14; i++) {
      if (
        this.localidadCargadaBoletasVIP.palcos[i].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i].disponible
      ) {
        this.lista1[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i].proceso) {
        this.lista1[i].valor = 'p';
      }


      if (
        this.localidadCargadaBoletasVIP.palcos[i+14].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+14].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+14].disponible
      ) {
        this.lista2[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+14].proceso) {
        this.lista2[i].valor = 'p';
      }

      if (
        this.localidadCargadaBoletasVIP.palcos[i+28].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+28].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+28].disponible
      ) {
        this.lista3[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+28].proceso) {
        this.lista3[i].valor = 'p';
      }
      
      if (
        this.localidadCargadaBoletasVIP.palcos[i+42].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+42].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+42].disponible
      ) {
        this.lista4[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+42].proceso) {
        this.lista4[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+56].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+56].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+56].disponible
      ) {
        this.lista5[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+56].proceso) {
        this.lista5[i].valor = 'p';
      }
 
      if (
        this.localidadCargadaBoletasVIP.palcos[i+70].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+70].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+70].disponible
      ) {
        this.lista6[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+70].proceso) {
        this.lista6[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+84].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+84].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+84].disponible
      ) {
        this.lista7[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+84].proceso) {
        this.lista7[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+98].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+98].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+98].disponible
      ) {
        this.lista8[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+98].proceso) {
        this.lista8[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+112].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+112].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+112].disponible
      ) {
        this.lista9[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+112].proceso) {
        this.lista9[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+126].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+126].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+126].disponible
      ) {
        this.lista10[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+126].proceso) {
        this.lista10[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+140].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+140].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+140].disponible
      ) {
        this.lista11[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+140].proceso) {
        this.lista11[i].valor = 'p';
      }
      if (
        this.localidadCargadaBoletasVIP.palcos[i+154].vendido ||
        this.localidadCargadaBoletasVIP.palcos[i+154].reservado ||
        !this.localidadCargadaBoletasVIP.palcos[i+154].disponible
      ) {
        this.lista12[i].valor = 'v';
      } else if (this.localidadCargadaBoletasVIP.palcos[i+154].proceso) {
        this.lista12[i].valor = 'p';
      }
  }

  for (var i = 0; i < 5; i++) {
    if (
      this.localidadCargadaBoletas.palcos[i].vendido ||
      this.localidadCargadaBoletas.palcos[i].reservado ||
      !this.localidadCargadaBoletas.palcos[i].disponible
    ) {
      this.lista13[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i].proceso) {
      this.lista13[i].valor = 'p';
    }


    if (
      this.localidadCargadaBoletas.palcos[i+5].vendido ||
      this.localidadCargadaBoletas.palcos[i+5].reservado ||
      !this.localidadCargadaBoletas.palcos[i+5].disponible
    ) {
      this.lista14[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+5].proceso) {
      this.lista14[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+10].vendido ||
      this.localidadCargadaBoletas.palcos[i+10].reservado ||
      !this.localidadCargadaBoletas.palcos[i+10].disponible
    ) {
      this.lista15[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+10].proceso) {
      this.lista15[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+15].vendido ||
      this.localidadCargadaBoletas.palcos[i+15].reservado ||
      !this.localidadCargadaBoletas.palcos[i+15].disponible
    ) {
      this.lista16[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+15].proceso) {
      this.lista16[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+20].vendido ||
      this.localidadCargadaBoletas.palcos[i+20].reservado ||
      !this.localidadCargadaBoletas.palcos[i+20].disponible
    ) {
      this.lista17[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+20].proceso) {
      this.lista17[i].valor = 'p';
    }

    if (
      this.localidadCargadaBoletas.palcos[i+25].vendido ||
      this.localidadCargadaBoletas.palcos[i+25].reservado ||
      !this.localidadCargadaBoletas.palcos[i+25].disponible
    ) {
      this.lista18[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+25].proceso) {
      this.lista18[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+30].vendido ||
      this.localidadCargadaBoletas.palcos[i+30].reservado ||
      !this.localidadCargadaBoletas.palcos[i+30].disponible
    ) {
      this.lista19[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+30].proceso) {
      this.lista19[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+35].vendido ||
      this.localidadCargadaBoletas.palcos[i+35].reservado ||
      !this.localidadCargadaBoletas.palcos[i+35].disponible
    ) {
      this.lista20[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+35].proceso) {
      this.lista20[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+40].vendido ||
      this.localidadCargadaBoletas.palcos[i+40].reservado ||
      !this.localidadCargadaBoletas.palcos[i+40].disponible
    ) {
      this.lista21[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+40].proceso) {
      this.lista21[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+45].vendido ||
      this.localidadCargadaBoletas.palcos[i+45].reservado ||
      !this.localidadCargadaBoletas.palcos[i+45].disponible
    ) {
      this.lista22[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+45].proceso) {
      this.lista22[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+50].vendido ||
      this.localidadCargadaBoletas.palcos[i+50].reservado ||
      !this.localidadCargadaBoletas.palcos[i+50].disponible
    ) {
      this.lista23[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+50].proceso) {
      this.lista23[i].valor = 'p';
    }

    if (
      this.localidadCargadaBoletas.palcos[i+62].vendido ||
      this.localidadCargadaBoletas.palcos[i+62].reservado ||
      !this.localidadCargadaBoletas.palcos[i+62].disponible
    ) {
      this.lista26[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+62].proceso) {
      this.lista26[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+67].vendido ||
      this.localidadCargadaBoletas.palcos[i+67].reservado ||
      !this.localidadCargadaBoletas.palcos[i+67].disponible
    ) {
      this.lista27[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+67].proceso) {
      this.lista27[i].valor = 'p';
    }

    if (
      this.localidadCargadaBoletas.palcos[i+72].vendido ||
      this.localidadCargadaBoletas.palcos[i+72].reservado ||
      !this.localidadCargadaBoletas.palcos[i+72].disponible
    ) {
      this.lista28[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+72].proceso) {
      this.lista28[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+77].vendido ||
      this.localidadCargadaBoletas.palcos[i+77].reservado ||
      !this.localidadCargadaBoletas.palcos[i+77].disponible
    ) {
      this.lista29[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+77].proceso) {
      this.lista29[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+82].vendido ||
      this.localidadCargadaBoletas.palcos[i+82].reservado ||
      !this.localidadCargadaBoletas.palcos[i+82].disponible
    ) {
      this.lista30[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+82].proceso) {
      this.lista30[i].valor = 'p';
    }

    if (
      this.localidadCargadaBoletas.palcos[i+93].vendido ||
      this.localidadCargadaBoletas.palcos[i+93].reservado ||
      !this.localidadCargadaBoletas.palcos[i+93].disponible
    ) {
      this.lista33[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+93].proceso) {
      this.lista33[i].valor = 'p';
    }
    
    if (
      this.localidadCargadaBoletas.palcos[i+98].vendido ||
      this.localidadCargadaBoletas.palcos[i+98].reservado ||
      !this.localidadCargadaBoletas.palcos[i+98].disponible
    ) {
      this.lista34[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+98].proceso) {
      this.lista34[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+103].vendido ||
      this.localidadCargadaBoletas.palcos[i+103].reservado ||
      !this.localidadCargadaBoletas.palcos[i+103].disponible
    ) {
      this.lista35[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+103].proceso) {
      this.lista35[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+108].vendido ||
      this.localidadCargadaBoletas.palcos[i+108].reservado ||
      !this.localidadCargadaBoletas.palcos[i+108].disponible
    ) {
      this.lista36[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+108].proceso) {
      this.lista36[i].valor = 'p';
    }



    if (
      this.localidadCargada.palcos[i+57].vendido ||
      this.localidadCargada.palcos[i+57].reservado ||
      !this.localidadCargada.palcos[i+57].disponible
    ) {
      this.lista42[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+57].proceso) {
      this.lista42[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+62].vendido ||
      this.localidadCargada.palcos[i+62].reservado ||
      !this.localidadCargada.palcos[i+62].disponible
    ) {
      this.lista43[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+62].proceso) {
      this.lista43[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+67].vendido ||
      this.localidadCargada.palcos[i+67].reservado ||
      !this.localidadCargada.palcos[i+67].disponible
    ) {
      this.lista44[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+67].proceso) {
      this.lista44[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+72].vendido ||
      this.localidadCargada.palcos[i+72].reservado ||
      !this.localidadCargada.palcos[i+72].disponible
    ) {
      this.lista45[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+72].proceso) {
      this.lista45[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+77].vendido ||
      this.localidadCargada.palcos[i+77].reservado ||
      !this.localidadCargada.palcos[i+77].disponible
    ) {
      this.lista46[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+77].proceso) {
      this.lista46[i].valor = 'p';
    }
    if (
      this.localidadCargada.palcos[i+82].vendido ||
      this.localidadCargada.palcos[i+82].reservado ||
      !this.localidadCargada.palcos[i+82].disponible
    ) {
      this.lista47[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+82].proceso) {
      this.lista47[i].valor = 'p';
    }
    if (
      this.localidadCargada.palcos[i+87].vendido ||
      this.localidadCargada.palcos[i+87].reservado ||
      !this.localidadCargada.palcos[i+87].disponible
    ) {
      this.lista48[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+87].proceso) {
      this.lista48[i].valor = 'p';
    }
  }
  for(let i =0;i<3;i++) {

    if (
      this.localidadCargadaGeneral.palcos[i+14].vendido ||
      this.localidadCargadaGeneral.palcos[i+14].reservado ||
      !this.localidadCargadaGeneral.palcos[i+14].disponible
    ) {
      this.lista55[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+14].proceso) {
      this.lista55[i].valor = 'p';
    }
    if (
      this.localidadCargadaGeneral.palcos[i+17].vendido ||
      this.localidadCargadaGeneral.palcos[i+17].reservado ||
      !this.localidadCargadaGeneral.palcos[i+17].disponible
    ) {
      this.lista56[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+17].proceso) {
      this.lista56[i].valor = 'p';
    }
    if (
      this.localidadCargadaGeneral.palcos[i+20].vendido ||
      this.localidadCargadaGeneral.palcos[i+20].reservado ||
      !this.localidadCargadaGeneral.palcos[i+20].disponible
    ) {
      this.lista57[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+20].proceso) {
      this.lista57[i].valor = 'p';
    }

    if (
      this.localidadCargadaGeneral.palcos[i+23].vendido ||
      this.localidadCargadaGeneral.palcos[i+23].reservado ||
      !this.localidadCargadaGeneral.palcos[i+23].disponible
    ) {
      this.lista58[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+23].proceso) {
      this.lista58[i].valor = 'p';
    }
    if (
      this.localidadCargadaGeneral.palcos[i+26].vendido ||
      this.localidadCargadaGeneral.palcos[i+26].reservado ||
      !this.localidadCargadaGeneral.palcos[i+26].disponible
    ) {
      this.lista59[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+26].proceso) {
      this.lista59[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+55].vendido ||
      this.localidadCargadaBoletas.palcos[i+55].reservado ||
      !this.localidadCargadaBoletas.palcos[i+55].disponible
    ) {
      this.lista24[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+55].proceso) {
      this.lista24[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+87].vendido ||
      this.localidadCargadaBoletas.palcos[i+87].reservado ||
      !this.localidadCargadaBoletas.palcos[i+87].disponible
    ) {
      this.lista31[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+87].proceso) {
      this.lista31[i].valor = 'p';
    }
    if (
      this.localidadCargadaBoletas.palcos[i+90].vendido ||
      this.localidadCargadaBoletas.palcos[i+90].reservado ||
      !this.localidadCargadaBoletas.palcos[i+90].disponible
    ) {
      this.lista32[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+90].proceso) {
      this.lista32[i].valor = 'p';
    }

  }
  for(let i =0;i<4;i++) {
    if (
      this.localidadCargadaBoletas.palcos[i+58].vendido ||
      this.localidadCargadaBoletas.palcos[i+58].reservado ||
      !this.localidadCargadaBoletas.palcos[i+58].disponible
    ) {
      this.lista25[i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+58].proceso) {
      this.lista25[i].valor = 'p';
    }
  }
    
  for(let i =0;i <11;i++){

    
    if (
      this.localidadCargadaPreferecial.palcos[i+121].vendido ||
      this.localidadCargadaPreferecial.palcos[i+121].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+121].disponible
    ) {
      this.lista37[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+121].proceso) {
      this.lista37[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+11].vendido ||
      this.localidadCargada.palcos[i+11].reservado ||
      !this.localidadCargada.palcos[i+11].disponible
    ) {
      this.lista38[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+11].proceso) {
      this.lista38[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+22].vendido ||
      this.localidadCargada.palcos[i+22].reservado ||
      !this.localidadCargada.palcos[i+22].disponible
    ) {
      this.lista39[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+22].proceso) {
      this.lista39[i].valor = 'p';
    }






    if (
      this.localidadCargadaPreferecial.palcos[i].vendido ||
      this.localidadCargadaPreferecial.palcos[i].reservado ||
      !this.localidadCargadaPreferecial.palcos[i].disponible
    ) {
      this.lista62[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
      this.lista62[i].valor = 'p';
    }

    if (
      this.localidadCargadaPreferecial.palcos[i+11].vendido ||
      this.localidadCargadaPreferecial.palcos[i+11].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+11].disponible
    ) {
      this.lista63[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+11].proceso) {
      this.lista63[i].valor = 'p';
    }

    if (
      this.localidadCargadaPreferecial.palcos[i+22].vendido ||
      this.localidadCargadaPreferecial.palcos[i+22].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+22].disponible
    ) {
      this.lista64[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+22].proceso) {
      this.lista64[i].valor = 'p';
    }
    
    if (
      this.localidadCargadaPreferecial.palcos[i+33].vendido ||
      this.localidadCargadaPreferecial.palcos[i+33].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+33].disponible
    ) {
      this.lista65[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+33].proceso) {
      this.lista65[i].valor = 'p';
    }
    if (
      this.localidadCargadaPreferecial.palcos[i+44].vendido ||
      this.localidadCargadaPreferecial.palcos[i+44].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+44].disponible
    ) {
      this.lista66[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+44].proceso) {
      this.lista66[i].valor = 'p';
    }
    if (
      this.localidadCargadaPreferecial.palcos[i+55].vendido ||
      this.localidadCargadaPreferecial.palcos[i+55].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+55].disponible
    ) {
      this.lista67[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+55].proceso) {
      this.lista67[i].valor = 'p';
    }

    if (
      this.localidadCargadaPreferecial.palcos[i+66].vendido ||
      this.localidadCargadaPreferecial.palcos[i+66].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+66].disponible
    ) {
      this.lista68[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+66].proceso) {
      this.lista68[i].valor = 'p';
    }
    if (
      this.localidadCargadaPreferecial.palcos[i+77].vendido ||
      this.localidadCargadaPreferecial.palcos[i+77].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+77].disponible
    ) {
      this.lista69[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+77].proceso) {
      this.lista69[i].valor = 'p';
    }
    if (
      this.localidadCargadaPreferecial.palcos[i+88].vendido ||
      this.localidadCargadaPreferecial.palcos[i+88].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+88].disponible
    ) {
      this.lista70[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+88].proceso) {
      this.lista70[i].valor = 'p';
    }
    if (
      this.localidadCargadaPreferecial.palcos[i+99].vendido ||
      this.localidadCargadaPreferecial.palcos[i+99].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+99].disponible
    ) {
      this.lista71[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+99].proceso) {
      this.lista71[i].valor = 'p';
    }

    if (
      this.localidadCargadaPreferecial.palcos[i+110].vendido ||
      this.localidadCargadaPreferecial.palcos[i+110].reservado ||
      !this.localidadCargadaPreferecial.palcos[i+110].disponible
    ) {
      this.lista72[i].valor = 'v';
    } else if (this.localidadCargadaPreferecial.palcos[i+110].proceso) {
      this.lista72[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i+104].vendido ||
      this.localidadCargada.palcos[i+104].reservado ||
      !this.localidadCargada.palcos[i+104].disponible
    ) {
      this.lista50[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+104].proceso) {
      this.lista50[i].valor = 'p';
    }
    if (
      this.localidadCargada.palcos[i+115].vendido ||
      this.localidadCargada.palcos[i+115].reservado ||
      !this.localidadCargada.palcos[i+115].disponible
    ) {
      this.lista51[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+115].proceso) {
      this.lista51[i].valor = 'p';
    }
    if (
      this.localidadCargada.palcos[i+126].vendido ||
      this.localidadCargada.palcos[i+126].reservado ||
      !this.localidadCargada.palcos[i+126].disponible
    ) {
      this.lista52[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i+126].proceso) {
      this.lista52[i].valor = 'p';
    }
  }
  
  for(let i =0; i<12;i++) {

  if (
    this.localidadCargada.palcos[i+33].vendido ||
    this.localidadCargada.palcos[i+33].reservado ||
    !this.localidadCargada.palcos[i+33].disponible
  ) {
    this.lista40[i].valor = 'v';
  } else if (this.localidadCargada.palcos[i+33].proceso) {
    this.lista40[i].valor = 'p';
  }

  if (
    this.localidadCargada.palcos[i+45].vendido ||
    this.localidadCargada.palcos[i+45].reservado ||
    !this.localidadCargada.palcos[i+45].disponible
  ) {
    this.lista41[i].valor = 'v';
  } else if (this.localidadCargada.palcos[i+45].proceso) {
    this.lista41[i].valor = 'p';
  }

  if (
    this.localidadCargada.palcos[i+92].vendido ||
    this.localidadCargada.palcos[i+92].reservado ||
    !this.localidadCargada.palcos[i+92].disponible
  ) {
    this.lista49[i].valor = 'v';
  } else if (this.localidadCargada.palcos[i+92].proceso) {
    this.lista49[i].valor = 'p';
  }
  }

  }


  agregarPalcoIndividual(numero) {
    
if(!this.usuarioBoolean)
  {
    if (
      numero != 'v' &&
      numero != 'p' &&
      numero != 'l' ) {
      if (!this.cargando &&this.cargadoTodo) {

        console.log(numero);
        
        if (this.contadorPalcos < 2 ) {
          this.cargando = true;
          this.palcoServicio
            .getPalcoParaCompraIndividual(this.evento.nombre, numero)
            .subscribe((response) => {
              this.palco = response;
              
              console.log(this.palco)



              this.referenceCode =
                'PALCO;' + this.usuarioEntidad.numeroDocumento + ',';
              if (this.palco == null) {
                alert('Agregar un Palco para continuar');
              } else {



                this.palcoServicio.getLocalidadDelPalco(this.palco.id).subscribe((response=>{response



         if(this.darCantidadDePalcosDisponiblesEtapas(response) >0){
                this.palcoServicio.reservarPalcoExacto(this.palco.id).subscribe(
                  (response) => {
                    response;

                    this.referenceCode =
                      this.referenceCode +
                      this.palco.id +
                      ',' +
                      this.evento.id +
                      ',' +
                      new Date();
                    this.cargando = false;

                    this.valorTotal =
                      this.palco.precio +
                      this.palco.servicio +
                      this.palco.servicioIva;

                    this.localidad = null;
                    this.valorLocalidadAgregada = 0;
                    this.valorBoletas = 0;

                 
                   

                    

                      this.AbrirCarrito();
                      if (!this.localidadCargada.efectivo) {
                        this.palcoServicio
                          .rechazarReservaPalco(this.palco.id)
                          .subscribe((response) => response);
                      } else {
                        this.palcoServicio
                          .rechazarReservaPalcoEfectivo(this.palco.id)
                          .subscribe((response) => {
                            response;
                          });
                      }
                  
                  },

                  (error) => {
                    error;
                    alert(
                      'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
                    );
                    this.cargando = false;
                    this.ngOnInit();
                  }
                );
              
                      
                  }
                else{
                  this.cargando = false;
                  this.ngOnInit();
                  alert("La etapa de esta localidad se ha agotado, espera unos minutos que se abrira la nueva etapa")
                }
                }))

              }
            });
        } else {
          alert('Solo puedes comprar 2 Palcos máximo por Evento');
        }

      }
      else {
        alert('Cargando por favor espere')
      }
      } 
    }


    else
    {
      this.openDialog();
      
    }



  }






  
  agregarPalcoIndividualID(numero,id) {
    
    if(!this.usuarioBoolean)
      {
        if (
          numero != 'v' &&
          numero != 'p' &&
          numero != 'l' ) {
          if (!this.cargando &&this.cargadoTodo) {
    
            console.log(numero);
            
            if (this.contadorPalcos < 2 ) {
              this.cargando = true;
              this.palcoServicio
                .getPalcoParaCompraIndividualID(id)
                .subscribe((response) => {
                  this.palco = response;
                  
                  console.log(this.palco)
    
    
    
                  this.referenceCode =
                    'PALCO;' + this.usuarioEntidad.numeroDocumento + ',';
                  if (this.palco == null) {
                    alert('Agregar un Palco para continuar');
                  } else {
    
    
    
                    this.palcoServicio.getLocalidadDelPalco(this.palco.id).subscribe((response=>{response
    
    
    
             if(this.darCantidadDePalcosDisponiblesEtapas(response) >0){
                    this.palcoServicio.reservarPalcoExacto(this.palco.id).subscribe(
                      (response) => {
                        response;
    
                        this.referenceCode =
                          this.referenceCode +
                          this.palco.id +
                          ',' +
                          this.evento.id +
                          ',' +
                          new Date();
                        this.cargando = false;
    
                        this.valorTotal =
                          this.palco.precio +
                          this.palco.servicio +
                          this.palco.servicioIva;
    
                        this.localidad = null;
                        this.valorLocalidadAgregada = 0;
                        this.valorBoletas = 0;
    
                     
                       
    
                        
    
                          this.AbrirCarrito();
                          if (!this.localidadCargada.efectivo) {
                            this.palcoServicio
                              .rechazarReservaPalco(this.palco.id)
                              .subscribe((response) => response);
                          } else {
                            this.palcoServicio
                              .rechazarReservaPalcoEfectivo(this.palco.id)
                              .subscribe((response) => {
                                response;
                              });
                          }
                      
                      },
    
                      (error) => {
                        error;
                        alert(
                          'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
                        );
                        this.cargando = false;
                        this.ngOnInit();
                      }
                    );
                  
                          
                      }
                    else{
                      this.cargando = false;
                      this.ngOnInit();
                      alert("La etapa de esta localidad se ha agotado, espera unos minutos que se abrira la nueva etapa")
                    }
                    }))
    
                  }
                });
            } else {
              alert('Solo puedes comprar 2 Palcos máximo por Evento');
            }
    
          }
          else {
            alert('Cargando por favor espere')
          }
          } 
        }
    
    
        else
        {
          this.openDialog();
          
        }
    
    
    
      }





agregarPalcoIndividualMultiplesDias(numero,id1,id2,id3) {
    
      if(!this.usuarioBoolean)
      {
        if (
          numero != 'v' &&
          numero != 'p' &&
          numero != 'l' ) {
          if (!this.cargando &&this.cargadoTodo) {
    
            console.log(numero);
            
  

              

              this.cargando = true;
              let ids:number[]=[id1,id2,id3];
                    this.palcoServicio.reservarPalcoExactoMultiples(ids).subscribe(
                      (response) => {
                        if(response.length>0){
                          
    
                          this.multiplesPalcos(response,ids);
                          console.log(response)

                          for(let i =0;i< response.length;i++) {
                            this.palcoServicio
                              .rechazarReservaPalco(response[i].id)
                              .subscribe((response) => response);
                            }
                          }
                          
                          else{

                            alert("No encontramos este palco disponible para ningún día")
                            this.ngOnInit();
                          }
                      },
    
                      (error) => {
                        error;
                        console.log(error)
                        alert(
                      
                          'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
                        );
                        this.cargando = false;
                        this.ngOnInit();
                      }
                    );

                
         
    
          }


          else {
            alert('Cargando por favor espere')
          }
          } 
        }
    
    
        else
        {
          this.openDialog();
          
        }
    
    
    
      }




      seleccionarLocalidadParaPalcoIndividual(id:number) {
        this.servicioLocalidad.getLocaliddadPorId(id, this.evento.nombre).subscribe((response) => {

          this.abrirTickets(response);
        })
      }

  
  abrirTickets(localidad: Localidad) {
    if (!this.usuarioBoolean) {
      if(!this.cargando && this.cargadoTodo)
      {
      if (this.contadorBoletas < 6 ) {
        this.referenceCode = 'TICKET;' + this.usuarioEntidad.numeroDocumento + ',';
        this.cantidadBoletas(localidad);
      }
      else {
        alert('Solo puedes comprar 6 Tickets máximo por este Evento');
      }
    }
    else{
      alert('Cargando por favor espere')
    }
    }

    else {
      alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registraté")
      this.openDialog();
    }
  }


seleccionarTicketExacto(item){


  if(item.seleccionado ==false){
  let idBoleta = item.id;

  if(idBoleta!=null){
  if (!this.usuarioBoolean) {

    if(!this.cargando && this.cargadoTodo){
    
    if (this.contadorBoletas < 6 ) {
      this.cargando=true
      this.servicioBoletas.reservarBoletaExacta(idBoleta).subscribe ((response)=>{
        if(response !=null){
          item.seleccionado=true;
          this.boletas.push(response)
          this.contadorBoletas = this.contadorBoletas + 1;
          this.cargando=false
        }
        if(this.boletas.length ==1){
          alert("Selecciona todos los tickets que deseas comprar y presiona en agregar al carrito en la parte inferior")
        }

      },
      (error)=>{
        alert("Selecciona otro Tickets, este ya fue seleccionado")
        let esmio =false;
        for(let i=0; i<this.boletas.length; i++){
          if(this.boletas[i].id == idBoleta){
         
            esmio=true
          }
        }
        if(!esmio)
        this.ngOnInit();
      }
      
      ) 
    
    }

    else {
      alert('Solo puedes comprar 6 Tickets máximo por este Evento');
    }
  }
  else{
    alert ("Cargando el mapa por favor vuelva a sell")
  }
  }

  else {
    alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registraté")
    this.openDialog();
  }
}
}
else if(item.seleccionado==true){
  this.deseleccionarTicket(item)
}
}

deseleccionarTicket(item){

  if(!this.cargando){
    this.cargando=true
  let idBoleta=item.id;


  for(let i=0; i<this.boletas.length; i++){
    if(this.boletas[i].id == idBoleta){
      this.boletas.splice(i,1)
      this.contadorBoletas = this.contadorBoletas - 1;
   
      this.servicioBoletas.cambiarReservado(idBoleta).subscribe((response)=>{
        response;
        item.seleccionado=false;
        this.cargando=false
      })
    }
  }
}
}

agregarAlCarritoTickets(){
  this.referenceCode = 'TICKET;' + this.usuarioEntidad.numeroDocumento + ',';
  for(var i =0; i < this.boletas.length; i++){
    this.referenceCode  = this.referenceCode+ this.boletas[i].id +"_"
    this.valorTotal = this.valorTotal + this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicioIva
  }

  this.referenceCode = this.referenceCode + "-1"
  this.referenceCode = this.referenceCode +"," + this.evento.id +"," + new Date()
  
  this.AbrirCarritoTicket()
}




AbrirCarritoTicket(): void {
    
  const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
    width: '100%',
    height: '85%',

    data: {
      valorTotal: this.valorTotal,
      boletas: this.boletas,
      evento: this.evento,
      usuarioEntidad: this.usuarioEntidad,
      referenceCode: this.referenceCode,
      efectivo: false,
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




  seleccionarLocalidad(localidad1: Localidad, localidad2: Localidad) {
    if (!this.usuarioBoolean) {
      if (this.contadorBoletas < 6 && !this.cargando && this.cargadoTodo) {
        this.referenceCode = 'TICKET;' + this.usuarioEntidad.numeroDocumento + ',';
        this.seleccion(localidad1,localidad2);
      }
      else {
        alert('Solo puedes comprar 6 Tickets máximo por este Evento');
      }
    }

    else {
      alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registraté")
      this.openDialog();
    }
  }



  seleccion(localidad1: Localidad, localidad2: Localidad) {
   

    const dialogRef = this.dialog.open(LocalidadSeleccionComponent, {
      width: '600px',


      data: {
        localidad1: localidad1,
        localidad2: localidad2,
        referenceCode: this.referenceCode,
        codigoVenta: this.codigoVenta,
        usuarioEntidad: this.usuarioEntidad,
        contadorBoletas: this.contadorBoletas,
        evento: this.evento,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();

      this.ngOnInit();

    });
  }



  cantidadBoletas(localidad: Localidad) {
    let efectivo = localidad.efectivo;

    const dialogRef = this.dialog.open(CantidadBoletasComponent, {
      width: '600px',


      data: {
        idLocalidad: localidad.id,
        referenceCode: this.referenceCode,
        efectivo: efectivo,
        evento: this.evento,
        contadorBoletas: this.contadorBoletas,
        codigoVenta: this.codigoVenta,
        usuarioEntidad: this.usuarioEntidad,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();

      this.ngOnInit();

    });
  }
}
