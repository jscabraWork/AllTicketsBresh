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
import { updateFor } from 'typescript';
import { Etapa } from '../../etapa.model';
import { IVA } from 'src/app/app.constants';
import { Md5 } from 'ts-md5';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { AdicionalComponent } from '../adicional/adicional.component';
import { CantidadBoletasComponent } from '../cantidad-boletas/cantidad-boletas.component';
import { LocalidadSeleccionComponent } from '../localidad-seleccion/localidad-seleccion.component';

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
  contadorBoletas;
  codigoVenta;
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: EventoDataService,
    private palcoServicio: PalcosDataService,
    private etapaServicio: EtapasDataService,
    private autenticador: HardcodedAutheticationService,
    private router: Router,
    private dataServicio: UsuariosDataService,
    private servicioLocalidad: LocalidadesDataService
  ) { }

  ngOnInit(): void {
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
      boletas: [],
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };

    this.localidadCargadaPreferecial = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
    this.localidadCargadaGeneral = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
    this.localidadCargadaBoletas = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
    this.localidadCargadaBoletasVIP = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
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
    };

    this.usuarioEntidad = {
      nombre: '',
      numeroDocumento: null,
      tipoDocumento: '',
      usuario: '',
      contrasena: '',
      celular: null,
      correo: '',
      direccion: '',
      publicidad: null,
      boletas: [],
      palcos: [],
    };
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
      mapaImagen: {
        id: null,
        name: null,
        url: null,
      },
      visible: false,
      soldout: false,
      mensaje: null,
      imagenFinal: null,
      fechaApertura: null,
      urlMapa: null,
      adicionales: [],
      oculto: null,
      dineroEntregado:null,
      ciudadNombre:null
    };
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







        if (this.evento.mapa == 'mapa6') {

          this.ponerNumerosMapa6();
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'Primera Fila'
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Segunda Fila') {
                    this.localidadCargada = this.etapas[i].localidades[j];

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Tercera Fila') {
                    this.localidadCargadaPreferecial = this.etapas[i].localidades[j];

                  }


                  else if (this.etapas[i].localidades[j].nombre == 'Cuarta Fila') {
                    this.localidadCargadaBoletas =
                      this.etapas[i].localidades[j];

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Zona Play') {
                    this.localidadCargadaBoletasVIP =
                      this.etapas[i].localidades[j];

                  }
                }
              }

              this.cargarLocalidadEnMapa6();
              this.cargadoTodo = true;
            });
        }

        else if (this.evento.mapa == 'mapa8') {

          this.ponerNumerosMapa8();
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'Palco Oro'
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Palco Plata') {
                    this.localidadCargada = this.etapas[i].localidades[j];

                  }
                  else if (this.etapas[i].localidades[j].nombre == 'VIP') {
                    this.localidadCargadaBoletasVIP =
                      this.etapas[i].localidades[j];

                  }
                }
              }

              this.cargarLocalidadEnMapa8();
              this.cargadoTodo = true;
            });
        }
        else if (this.evento.mapa == 'mapa7') {

          this.ponerNumerosMapa7();
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'First Rows'
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'A') {
                    this.localidadCargada = this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'B') {
                    this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                    

                  }


                  else if (this.etapas[i].localidades[j].nombre == 'C') {
                    this.localidadCargadaBoletas =
                      this.etapas[i].localidades[j];
                    
                  }


                }
              }

              this.cargarLocalidadEnMapa7();
              this.cargadoTodo = true;
            });
        }

        
      


        else if (this.evento.mapa == 'mapa10') {

          this.ponerNumerosMapa10();
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'PALCOS BACKSTAGE'
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                     

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'PALCOS PABLO FIERRO') {
                    this.localidadCargada = this.etapas[i].localidades[j];

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'EARLY') {
                    this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                    

                  }


                  else if (this.etapas[i].localidades[j].nombre == 'ANYTIME') {
                    this.localidadCargadaBoletas =
                      this.etapas[i].localidades[j];
                    
                  }
                  else if (this.etapas[i].localidades[j].nombre == 'BACKSTAGE TICKETS') {
                    this.localidadCargadaBoletasVIP =
                      this.etapas[i].localidades[j];
                    
                  }

                 
                }
              }

              this.cargarLocalidadEnMapa10();
              this.cargadoTodo = true;
            });
        }





        else if (this.evento.mapa == 'mapa11') {

          this.ponerNumerosMapa11();
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'Palcos FRAT'
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                }

                  else if (this.etapas[i].localidades[j].nombre == 'Palcos A') {
                    this.localidadCargada = this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Palcos B') {
                    this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                    

                  }


                  else if (this.etapas[i].localidades[j].nombre == 'Palcos C') {
                    this.localidadCargadaBoletas =
                      this.etapas[i].localidades[j];
                      
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Palcos D') {
                    this.localidadCargadaBoletasVIP =
                      this.etapas[i].localidades[j];
                    
                    
                  }
                }
              }

              this.cargarLocalidadEnMapa11();
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

                this.referenceCode = "PALCO;" + this.usuarioEntidad.numeroDocumento + "," + this.palco.id + "," + this.evento.nombre + "," + new Date();
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
  

  ponerNumerosMapa6() {
    for (let i = 1; i < 7; i += 1) {
      this.lista1[i - 1] = {
        valor: i,
        localidad: 'vip',
      };
      this.lista2[i - 1] = {
        valor: i + 6,
        localidad: 'pre',
      };
      this.lista3[i - 1] = {
        valor: i + 12,
        localidad: 'pre',
      };
      this.lista4[i - 1] = {
        valor: i + 18,
        localidad: 'pre',
      };

    }

  }


  ponerNumerosMapa8() {

    for (let i = 0; i < 6; i += 1) {
      this.lista10[i] = {
        valor: "v",
        localidad: 'v',
      };
    }

    for (let i = 1; i < 8; i += 1) {
      this.lista1[i - 1] = {
        valor: i+12,
        localidad: 'vip',
      };
      this.lista2[i - 1] = {
        valor: i + 19,
        localidad: 'vip',
      };
      this.lista3[i - 1] = {
        valor: i + 26,
        localidad: 'vip',
      };
      this.lista4[i - 1] = {
        valor: i + 33,
        localidad: 'vip',
      };
      this.lista5[i - 1] = {
        valor: i + 40,
        localidad: 'oro',
      };
      this.lista6[i - 1] = {
        valor: i + 47,
        localidad: 'oro',
      };
      this.lista7[i - 1] = {
        valor: i + 54,
        localidad: 'oro',
      };
    }

  }



  ponerNumerosMapa10(){


    this.lista1[0]={
      valor:"A",
      localidad:'oro'
    }
    this.lista1[1]={
      valor:"B",
      localidad:'oro'
    }
    this.lista1[2]={
      valor:"C",
      localidad:'oro'
    }
    this.lista1[3]={
      valor:"D",
      localidad:'oro'
    }
    for(let i=0;i<2;i++) {
      this.lista2[i]={
        valor:i+1,
        localidad:'vip'
      }
      this.lista3[i]={
        valor:i+3,
        localidad:'vip'
      }
      this.lista4[i]={
        valor:i+5,
        localidad:'vip'
      }
      this.lista5[i]={
        valor:i+7,
        localidad:'vip'
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
      valor: "A" + (i),
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
  ponerNumerosMapa7() {
    for (let i = 1; i < 13; i += 1) {
      this.lista1[i - 1] = {
        valor: "C" + i,
        localidad: 'pre',
      };
      this.lista2[i - 1] = {
        valor: "C" + (i + 12),
        localidad: 'pre',
      };
      this.lista3[i - 1] = {
        valor: "C" + (i + 24),
        localidad: 'pre',
      };
      this.lista7[i - 1] = {
        valor: "B" + i,
        localidad: 'vip',
      };
      this.lista9[i - 1] = {
        valor: "B" + (i + 23),
        localidad: 'vip',
      };
    }
    for (let i = 1; i < 12; i += 1) {
      this.lista8[i - 1] = {
        valor: "B" + (i + 12),
        localidad: 'vip',
      };
      this.lista10[i - 1] = {
        valor: "B" + (i + 35),
        localidad: 'vip',
      };
      this.lista14[i - 1] = {
        valor: "A" + (i + 35),
        localidad: 'vip',
      };
    }
    this.lista16[0] = {
      valor: "A" + (75),
      localidad: 'vip',
    };
    this.lista15[0] = {
      valor: "A" + (74),
      localidad: 'vip',
    };


    let j = 0
    for (let i = 12; i > 1; i = i - 1) {

      this.lista4[i - i + j] = {
        valor: "C" + (i + 35),
        localidad: 'pre',
      };
      this.lista5[i - i + j] = {
        valor: "C" + (i + 46),
        localidad: 'pre',
      };

      this.lista12[i - i + j] = {
        valor: "B" + (i + 45),
        localidad: 'vip',
      };
      this.lista11[i - i + j] = {
        valor: "B" + (i + 56),
        localidad: 'vip',
      };



      j++
    }
    j = 0
    for (let i = 13; i > 1; i = i - 1) {

      this.lista13[i - i + j] = {
        valor: "A" + (i + 52),
        localidad: 'vip',
      };
      j++
    }

    j = 0
    for (let i = 11; i > 1; i = i - 1) {
     
        this.lista6[i - i + j] = {
          valor: "C" + (i + 57),
          localidad: 'pre',
        };
      
      

      j++
    }

    for (let i = 1; i < 10; i++) {
      this.lista17[i - 1] = {
        valor: "A" + (i + 3),
        localidad: 'vip',
      };
    }
    this.lista18[0] = {
      valor: "A" + (90),
      localidad: 'vip',
    };
    this.lista18[1] = {
      valor: "A" + (73),
      localidad: 'vip',
    };
    this.lista18[2] = {
      valor: "A" + (35),
      localidad: 'vip',
    };
    this.lista19[0] = {
      valor: "A" + (47),
      localidad: 'vip',
    };
    this.lista19[1] = {
      valor: "A" + (76),
      localidad: 'vip',
    };

    this.lista20[0] = {
      valor: "A" + (89),
      localidad: 'vip',
    };
    this.lista20[1] = {
      valor: "A" + (72),
      localidad: 'vip',
    };
    this.lista20[2] = {
      valor: "A" + (34),
      localidad: 'vip',
    };
    this.lista20[3] = {
      valor: "A" + (3),
      localidad: 'vip',
    };


    this.lista21[0] = {
      valor: "A" + (13),
      localidad: 'vip',
    };
    this.lista21[1] = {
      valor: "A" + (48),
      localidad: 'vip',
    };
    this.lista21[2] = {
      valor: "A" + (77),
      localidad: 'vip',
    };



    this.lista22[0] = {
      valor: "A" + (14),
      localidad: 'vip',
    };
    this.lista22[1] = {
      valor: "A" + (49),
      localidad: 'vip',
    };
    this.lista22[2] = {
      valor: "A" + (78),
      localidad: 'vip',
    };

    this.lista23[0] = {
      valor: "A" + (88),
      localidad: 'vip',
    };
    this.lista23[1] = {
      valor: "A" + (71),
      localidad: 'vip',
    };
    this.lista23[2] = {
      valor: "A" + (33),
      localidad: 'vip',
    };
    this.lista23[3] = {
      valor: "A" + (2),
      localidad: 'vip',
    };




    this.lista24[0] = {
      valor: "A" + (87),
      localidad: 'vip',
    };
    this.lista24[1] = {
      valor: "A" + (70),
      localidad: 'vip',
    };
    this.lista24[2] = {
      valor: "A" + (32),
      localidad: 'vip',
    };
    this.lista24[3] = {
      valor: "A" + (1),
      localidad: 'vip',
    };


    this.lista25[0] = {
      valor: "A" + (15),
      localidad: 'vip',
    };
    this.lista25[1] = {
      valor: "A" + (50),
      localidad: 'vip',
    };
    this.lista25[2] = {
      valor: "A" + (79),
      localidad: 'vip',
    };




    this.lista26[0] = {
      valor: "A" + (94),
      localidad: 'vip',
    };
    this.lista26[1] = {
      valor: "A" + (86),
      localidad: 'vip',
    };
    this.lista26[2] = {
      valor: "A" + (69),
      localidad: 'vip',
    };
    this.lista26[3] = {
      valor: "A" + (31),
      localidad: 'vip',
    };


    this.lista27[0] = {
      valor: "A" + (16),
      localidad: 'vip',
    };





    this.lista28[0] = {
      valor: "A" + (93),
      localidad: 'vip',
    };
    this.lista28[1] = {
      valor: "A" + (85),
      localidad: 'vip',
    };
    this.lista28[2] = {
      valor: "A" + (68),
      localidad: 'vip',
    };
    this.lista28[3] = {
      valor: "A" + (30),
      localidad: 'vip',
    };


    this.lista29[0] = {
      valor: "A" + (17),
      localidad: 'vip',
    };









    this.lista31[0] = {
      valor: "A" + (92),
      localidad: 'vip',
    };
    this.lista31[1] = {
      valor: "A" + (84),
      localidad: 'vip',
    };
    this.lista31[2] = {
      valor: "A" + (67),
      localidad: 'vip',
    };
    this.lista31[3] = {
      valor: "A" + (29),
      localidad: 'vip',
    };


    this.lista30[0] = {
      valor: "A" + (18),
      localidad: 'vip',
    };

    this.lista30[1] = {
      valor: "A" + (51),
      localidad: 'vip',
    };
    this.lista30[2] = {
      valor: "A" + (80),
      localidad: 'vip',
    };







    this.lista32[0] = {
      valor: "A" + (91),
      localidad: 'vip',
    };
    this.lista32[1] = {
      valor: "A" + (83),
      localidad: 'vip',
    };
    this.lista32[2] = {
      valor: "A" + (66),
      localidad: 'vip',
    };
    this.lista32[3] = {
      valor: "A" + (28),
      localidad: 'vip',
    };


    this.lista33[0] = {
      valor: "A" + (19),
      localidad: 'vip',
    };

    this.lista33[1] = {
      valor: "A" + (52),
      localidad: 'vip',
    };
    this.lista33[2] = {
      valor: "A" + (81),
      localidad: 'vip',
    };

    j = 0;
    for (let i = 9; i > 1; i--) {
      this.lista34[i - i + j] = {
        valor: "A" + (i + 18),
        localidad: 'vip',
      };
      j++;
    }
    //i9
    this.lista34.push(
      {
        valor: "A53",
        localidad: 'vip',
      })
    //i10
    this.lista34.push(
      {
        valor: "A82",
        localidad: 'vip',
      }
    )

    this.lista35[0] = {
      valor: "C100",
      localidad: 'pre',
    }
    this.lista35[1] = {
      valor: "C90",
      localidad: 'pre',
    }
    this.lista35[2] = {
      valor: "C80",
      localidad: 'pre',
    }
    this.lista35[3] = {
      valor: "C70",
      localidad: 'pre',
    }

    this.lista36[0] = {
      valor: "C101",
      localidad: 'pre',
    }
    this.lista36[1] = {
      valor: "C91",
      localidad: 'pre',
    }
    this.lista36[2] = {
      valor: "C81",
      localidad: 'pre',
    }
    this.lista36[3] = {
      valor: "C71",
      localidad: 'pre',
    }

    this.lista37[0] = {
      valor: "C102",
      localidad: 'pre',
    }
    this.lista37[1] = {
      valor: "C92",
      localidad: 'pre',
    }
    this.lista37[2] = {
      valor: "C82",
      localidad: 'pre',
    }
    this.lista37[3] = {
      valor: "C72",
      localidad: 'pre',
    }



    this.lista38[0] = {
      valor: "C103",
      localidad: 'pre',
    }
    this.lista38[1] = {
      valor: "C93",
      localidad: 'pre',
    }
    this.lista38[2] = {
      valor: "C83",
      localidad: 'pre',
    }
    this.lista38[3] = {
      valor: "C73",
      localidad: 'pre',
    }


    this.lista39[0] = {
      valor: "C104",
      localidad: 'pre',
    }
    this.lista39[1] = {
      valor: "C94",
      localidad: 'pre',
    }
    this.lista39[2] = {
      valor: "C84",
      localidad: 'pre',
    }
    this.lista39[3] = {
      valor: "C74",
      localidad: 'pre',
    }


    this.lista40[0] = {
      valor: "C105",
      localidad: 'pre',
    }
    this.lista40[1] = {
      valor: "C95",
      localidad: 'pre',
    }
    this.lista40[2] = {
      valor: "C85",
      localidad: 'pre',
    }
    this.lista40[3] = {
      valor: "C75",
      localidad: 'pre',
    }

    this.lista41[0] = {
      valor: "C106",
      localidad: 'pre',
    }
    this.lista41[1] = {
      valor: "C96",
      localidad: 'pre',
    }
    this.lista41[2] = {
      valor: "C86",
      localidad: 'pre',
    }
    this.lista41[3] = {
      valor: "C76",
      localidad: 'pre',
    }



    this.lista42[0] = {
      valor: "C107",
      localidad: 'pre',
    }
    this.lista42[1] = {
      valor: "C97",
      localidad: 'pre',
    }
    this.lista42[2] = {
      valor: "C87",
      localidad: 'pre',
    }
    this.lista42[3] = {
      valor: "C77",
      localidad: 'pre',
    }



    this.lista43[0] = {
      valor: "C108",
      localidad: 'pre',
    }
    this.lista43[1] = {
      valor: "C98",
      localidad: 'pre',
    }
    this.lista43[2] = {
      valor: "C88",
      localidad: 'pre',
    }
    this.lista43[3] = {
      valor: "C78",
      localidad: 'pre',
    }


    this.lista44[0] = {
      valor: "C109",
      localidad: 'pre',
    }
    this.lista44[1] = {
      valor: "C99",
      localidad: 'pre',
    }
    this.lista44[2] = {
      valor: "C89",
      localidad: 'pre',
    }
    this.lista44[3] = {
      valor: "C79",
      localidad: 'pre',
    }

    j = 0
    for (let i = 8; i > 1; i--) {
      this.lista45[i - i + j] = {
        valor: "PF" + (i + 29),
        localidad: 'pre',
      }
      j++;
    }
    j = 0
    this.lista46.push(
      {
        valor: "PF38",
        localidad: 'pre',
      }
    )
    for (let i = 6; i > 1; i--) {
      this.lista46[i - i + j + 1] = {
        valor: "PF" + (i + 8),
        localidad: 'pre',
      }
      j++;
    }
    this.lista46.push(
      {
        valor: "PF30",
        localidad: 'pre',
      }
    )
    this.lista47.push(
      {
        valor: "PF39",
        localidad: 'pre',
      }
    )
    this.lista47.push(
      {
        valor: "PF15",
        localidad: 'pre',
      }
    )




    this.lista48.push(
      {
        valor: "PF40",
        localidad: 'pre',
      }
    )
    this.lista48.push(
      {
        valor: "PF16",
        localidad: 'pre',
      }
    )


    this.lista49.push(
      {
        valor: "PF17",
        localidad: 'pre',
      }
    )
    this.lista49.push(
      {
        valor: "PF1",
        localidad: 'pre',
      }
    )



    this.lista50.push(
      {
        valor: "PF9",
        localidad: 'pre',
      }
    )
    this.lista50.push(
      {
        valor: "PF29",
        localidad: 'pre',
      }
    )


    this.lista51.push(
      {
        valor: "PF8",
        localidad: 'pre',
      }
    )
    this.lista51.push(
      {
        valor: "PF28",
        localidad: 'pre',
      }
    )

    this.lista52.push(
      {
        valor: "PF7",
        localidad: 'pre',
      }
    )
    this.lista52.push(
      {
        valor: "PF27",
        localidad: 'pre',
      }
    )



    this.lista53.push(
      {
        valor: "PF18",
        localidad: 'pre',
      }
    )
    for (let i = 1; i < 6; i++) {
      this.lista53.push(
        {
          valor: "PF" + (i + 1),
          localidad: 'pre',
        }
      )
    }
    this.lista53.push(
      {
        valor: "PF26",
        localidad: 'pre',
      }
    )

    for (let i = 1; i < 8; i++) {
      this.lista54.push(
        {
          valor: "PF" + (i + 18),
          localidad: 'pre',
        }
      )
    }
  }



  cargarLocalidadEnMapa10(){
    for(let i=0; i < this.localidadCargadaGeneral.palcos.length; i=i+1) {
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista1[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista1[i].valor = 'p';
      }
    }
    for(let i =0;i < 2;i=i+1){
      if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista2[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista2[i].valor = 'p';
      }

      if (
        this.localidadCargada.palcos[i+2].vendido ||
        this.localidadCargada.palcos[i+2].reservado ||
        !this.localidadCargada.palcos[i+2].disponible
      ) {
        this.lista3[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+2].proceso) {
        this.lista3[i].valor = 'p';
      }


      if (
        this.localidadCargada.palcos[i+4].vendido ||
        this.localidadCargada.palcos[i+4].reservado ||
        !this.localidadCargada.palcos[i+4].disponible
      ) {
        this.lista4[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+4].proceso) {
        this.lista4[i].valor = 'p';
      }

      if (
        this.localidadCargada.palcos[i+6].vendido ||
        this.localidadCargada.palcos[i+6].reservado ||
        !this.localidadCargada.palcos[i+6].disponible
      ) {
        this.lista5[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+6].proceso) {
        this.lista5[i].valor = 'p';
      }


    }
  }

  


  cargarLocalidadEnMapa7() {
    for (let i = 0; i <46; i++) {
      if (0 <= i && i < 12) {
        if (
          this.localidadCargadaPreferecial.palcos[i].vendido ||
          this.localidadCargadaPreferecial.palcos[i].reservado ||
          !this.localidadCargadaPreferecial.palcos[i].disponible
        ) {
          this.lista7[i].valor = 'v';
        } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
          this.lista7[i].valor = 'p';
        }
      }

      if (12 <= i && i < 23) {
        
        if (
          this.localidadCargadaPreferecial.palcos[i].vendido ||
          this.localidadCargadaPreferecial.palcos[i].reservado ||
          !this.localidadCargadaPreferecial.palcos[i].disponible
        ) {
          this.lista8[i - 12].valor = 'v';
        } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
          this.lista8[i - 12].valor = 'p';
        }

      }

      if (23 <= i && i < 35) {
        
        if (
          this.localidadCargadaPreferecial.palcos[i].vendido ||
          this.localidadCargadaPreferecial.palcos[i].reservado ||
          !this.localidadCargadaPreferecial.palcos[i].disponible
        ) {
          this.lista9[i - 23].valor = 'v';
        } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
          this.lista9[i - 23].valor = 'p';
        }

        


      }
      if (35 <= i && i < 47) {
        if (
          this.localidadCargadaPreferecial.palcos[i].vendido ||
          this.localidadCargadaPreferecial.palcos[i].reservado ||
          !this.localidadCargadaPreferecial.palcos[i].disponible
        ) {
          this.lista10[i - 35].valor = 'v';
        } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
          this.lista10[i - 35].valor = 'p';
        }

      }

      for(let i=0;i< 11;i++){
        if (
          this.localidadCargada.palcos[i+35].vendido ||
          this.localidadCargada.palcos[i+35].reservado ||
          !this.localidadCargada.palcos[i+35].disponible
        ) {
          this.lista14[i].valor = 'v';
        } else if (this.localidadCargada.palcos[i+35].proceso) {
          this.lista14[i].valor = 'p';
        }
  
      }

      for(let i=0;i< 9;i++){
      if (
        this.localidadCargada.palcos[i+3].vendido ||
        this.localidadCargada.palcos[i+3].reservado ||
        !this.localidadCargada.palcos[i+3].disponible
      ) {
        this.lista17[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+3].proceso) {
        this.lista17[i].valor = 'p';
      }
    }


    if (
      this.localidadCargada.palcos[88].vendido ||
      this.localidadCargada.palcos[88].reservado ||
      !this.localidadCargada.palcos[88].disponible
    ) {
      this.lista20[0].valor = 'v';
    } else if (this.localidadCargada.palcos[88].proceso) {
      this.lista20[0].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[71].vendido ||
      this.localidadCargada.palcos[71].reservado ||
      !this.localidadCargada.palcos[71].disponible
    ) {
      this.lista20[1].valor = 'v';
    } else if (this.localidadCargada.palcos[71].proceso) {
      this.lista20[1].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[33].vendido ||
      this.localidadCargada.palcos[33].reservado ||
      !this.localidadCargada.palcos[33].disponible
    ) {
      this.lista20[2].valor = 'v';
    } else if (this.localidadCargada.palcos[33].proceso) {
      this.lista20[2].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[2].vendido ||
      this.localidadCargada.palcos[2].reservado ||
      !this.localidadCargada.palcos[2].disponible
    ) {
      this.lista20[3].valor = 'v';
    } else if (this.localidadCargada.palcos[2].proceso) {
      this.lista20[3].valor = 'p'
    }





    if (
      this.localidadCargada.palcos[87].vendido ||
      this.localidadCargada.palcos[87].reservado ||
      !this.localidadCargada.palcos[87].disponible
    ) {
      this.lista23[0].valor = 'v';
    } else if (this.localidadCargada.palcos[87].proceso) {
      this.lista23[0].valor = 'p'
    }



    if (
      this.localidadCargada.palcos[70].vendido ||
      this.localidadCargada.palcos[70].reservado ||
      !this.localidadCargada.palcos[70].disponible
    ) {
      this.lista23[1].valor = 'v';
    } else if (this.localidadCargada.palcos[70].proceso) {
      this.lista23[1].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[32].vendido ||
      this.localidadCargada.palcos[32].reservado ||
      !this.localidadCargada.palcos[32].disponible
    ) {
      this.lista23[2].valor = 'v';
    } else if (this.localidadCargada.palcos[32].proceso) {
      this.lista23[2].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[1].vendido ||
      this.localidadCargada.palcos[1].reservado ||
      !this.localidadCargada.palcos[1].disponible
    ) {
      this.lista23[3].valor = 'v';
    } else if (this.localidadCargada.palcos[1].proceso) {
      this.lista23[3].valor = 'p'
    }









    

    if (
      this.localidadCargada.palcos[13].vendido ||
      this.localidadCargada.palcos[13].reservado ||
      !this.localidadCargada.palcos[13].disponible
    ) {
      this.lista22[0].valor = 'v';
    } else if (this.localidadCargada.palcos[13].proceso) {
      this.lista22[0].valor = 'p'
    }



    if (
      this.localidadCargada.palcos[48].vendido ||
      this.localidadCargada.palcos[48].reservado ||
      !this.localidadCargada.palcos[48].disponible
    ) {
      this.lista22[1].valor = 'v';
    } else if (this.localidadCargada.palcos[48].proceso) {
      this.lista22[1].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[77].vendido ||
      this.localidadCargada.palcos[77].reservado ||
      !this.localidadCargada.palcos[77].disponible
    ) {
      this.lista22[2].valor = 'v';
    } else if (this.localidadCargada.palcos[77].proceso) {
      this.lista22[2].valor = 'p'
    }







    

    if (
      this.localidadCargada.palcos[14].vendido ||
      this.localidadCargada.palcos[14].reservado ||
      !this.localidadCargada.palcos[14].disponible
    ) {
      this.lista25[0].valor = 'v';
    } else if (this.localidadCargada.palcos[14].proceso) {
      this.lista25[0].valor = 'p'
    }



    if (
      this.localidadCargada.palcos[49].vendido ||
      this.localidadCargada.palcos[49].reservado ||
      !this.localidadCargada.palcos[49].disponible
    ) {
      this.lista25[1].valor = 'v';
    } else if (this.localidadCargada.palcos[49].proceso) {
      this.lista25[1].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[78].vendido ||
      this.localidadCargada.palcos[78].reservado ||
      !this.localidadCargada.palcos[78].disponible
    ) {
      this.lista25[2].valor = 'v';
    } else if (this.localidadCargada.palcos[78].proceso) {
      this.lista25[2].valor = 'p'
    }


   









    

    if (
      this.localidadCargada.palcos[86].vendido ||
      this.localidadCargada.palcos[86].reservado ||
      !this.localidadCargada.palcos[86].disponible
    ) {
      this.lista24[0].valor = 'v';
    } else if (this.localidadCargada.palcos[86].proceso) {
      this.lista24[0].valor = 'p'
    }



    if (
      this.localidadCargada.palcos[69].vendido ||
      this.localidadCargada.palcos[69].reservado ||
      !this.localidadCargada.palcos[69].disponible
    ) {
      this.lista24[1].valor = 'v';
    } else if (this.localidadCargada.palcos[69].proceso) {
      this.lista24[1].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[31].vendido ||
      this.localidadCargada.palcos[31].reservado ||
      !this.localidadCargada.palcos[31].disponible
    ) {
      this.lista24[2].valor = 'v';
    } else if (this.localidadCargada.palcos[31].proceso) {
      this.lista24[2].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[0].vendido ||
      this.localidadCargada.palcos[0].reservado ||
      !this.localidadCargada.palcos[0].disponible
    ) {
      this.lista24[3].valor = 'v';
    } else if (this.localidadCargada.palcos[0].proceso) {
      this.lista24[3].valor = 'p'
    }


    
    if (
      this.localidadCargada.palcos[15].vendido ||
      this.localidadCargada.palcos[15].reservado ||
      !this.localidadCargada.palcos[15].disponible
    ) {
      this.lista27[0].valor = 'v';
    } else if (this.localidadCargada.palcos[15].proceso) {
      this.lista27[0].valor = 'p'
    }





    if (
      this.localidadCargada.palcos[93].vendido ||
      this.localidadCargada.palcos[93].reservado ||
      !this.localidadCargada.palcos[93].disponible
    ) {
      this.lista26[0].valor = 'v';
    } else if (this.localidadCargada.palcos[93].proceso) {
      this.lista26[0].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[85].vendido ||
      this.localidadCargada.palcos[85].reservado ||
      !this.localidadCargada.palcos[85].disponible
    ) {
      this.lista26[1].valor = 'v';
    } else if (this.localidadCargada.palcos[85].proceso) {
      this.lista26[1].valor = 'p'
    }
    
    if (
      this.localidadCargada.palcos[68].vendido ||
      this.localidadCargada.palcos[68].reservado ||
      !this.localidadCargada.palcos[68].disponible
    ) {
      this.lista26[2].valor = 'v';
    } else if (this.localidadCargada.palcos[68].proceso) {
      this.lista26[2].valor = 'p'
    }
    
    if (
      this.localidadCargada.palcos[30].vendido ||
      this.localidadCargada.palcos[30].reservado ||
      !this.localidadCargada.palcos[30].disponible
    ) {
      this.lista26[3].valor = 'v';
    } else if (this.localidadCargada.palcos[30].proceso) {
      this.lista26[3].valor = 'p'
    }





    if (
      this.localidadCargada.palcos[16].vendido ||
      this.localidadCargada.palcos[16].reservado ||
      !this.localidadCargada.palcos[16].disponible
    ) {
      this.lista29[0].valor = 'v';
    } else if (this.localidadCargada.palcos[16].proceso) {
      this.lista29[0].valor = 'p'
    }



    if (
      this.localidadCargada.palcos[17].vendido ||
      this.localidadCargada.palcos[17].reservado ||
      !this.localidadCargada.palcos[17].disponible
    ) {
      this.lista30[0].valor = 'v';
    } else if (this.localidadCargada.palcos[17].proceso) {
      this.lista30[0].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[50].vendido ||
      this.localidadCargada.palcos[50].reservado ||
      !this.localidadCargada.palcos[50].disponible
    ) {
      this.lista30[1].valor = 'v';
    } else if (this.localidadCargada.palcos[50].proceso) {
      this.lista30[1].valor = 'p'
    } if (
      this.localidadCargada.palcos[79].vendido ||
      this.localidadCargada.palcos[79].reservado ||
      !this.localidadCargada.palcos[79].disponible
    ) {
      this.lista30[2].valor = 'v';
    } else if (this.localidadCargada.palcos[79].proceso) {
      this.lista30[2].valor = 'p'
    }







    if (
      this.localidadCargada.palcos[91].vendido ||
      this.localidadCargada.palcos[91].reservado ||
      !this.localidadCargada.palcos[91].disponible
    ) {
      this.lista31[0].valor = 'v';
    } else if (this.localidadCargada.palcos[91].proceso) {
      this.lista31[0].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[83].vendido ||
      this.localidadCargada.palcos[83].reservado ||
      !this.localidadCargada.palcos[83].disponible
    ) {
      this.lista31[1].valor = 'v';
    } else if (this.localidadCargada.palcos[83].proceso) {
      this.lista31[1].valor = 'p'
    } 
    
    if (
      this.localidadCargada.palcos[66].vendido ||
      this.localidadCargada.palcos[66].reservado ||
      !this.localidadCargada.palcos[66].disponible
    ) {
      this.lista31[2].valor = 'v';
    } else if (this.localidadCargada.palcos[66].proceso) {
      this.lista31[2].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[28].vendido ||
      this.localidadCargada.palcos[28].reservado ||
      !this.localidadCargada.palcos[28].disponible
    ) {
      this.lista31[3].valor = 'v';
    } else if (this.localidadCargada.palcos[28].proceso) {
      this.lista31[3].valor = 'p'
    }




    if (
      this.localidadCargada.palcos[92].vendido ||
      this.localidadCargada.palcos[92].reservado ||
      !this.localidadCargada.palcos[92].disponible
    ) {
      this.lista28[0].valor = 'v';
    } else if (this.localidadCargada.palcos[92].proceso) {
      this.lista28[0].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[84].vendido ||
      this.localidadCargada.palcos[84].reservado ||
      !this.localidadCargada.palcos[84].disponible
    ) {
      this.lista28[1].valor = 'v';
    } else if (this.localidadCargada.palcos[84].proceso) {
      this.lista28[1].valor = 'p'
    }
    
    if (
      this.localidadCargada.palcos[67].vendido ||
      this.localidadCargada.palcos[67].reservado ||
      !this.localidadCargada.palcos[67].disponible
    ) {
      this.lista28[2].valor = 'v';
    } else if (this.localidadCargada.palcos[67].proceso) {
      this.lista28[2].valor = 'p'
    }
    
    if (
      this.localidadCargada.palcos[29].vendido ||
      this.localidadCargada.palcos[29].reservado ||
      !this.localidadCargada.palcos[29].disponible
    ) {
      this.lista28[3].valor = 'v';
    } else if (this.localidadCargada.palcos[29].proceso) {
      this.lista28[3].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[17].vendido ||
      this.localidadCargada.palcos[17].reservado ||
      !this.localidadCargada.palcos[17].disponible
    ) {
      this.lista30[0].valor = 'v';
    } else if (this.localidadCargada.palcos[17].proceso) {
      this.lista30[0].valor = 'p'
    }




    if (
      this.localidadCargada.palcos[18].vendido ||
      this.localidadCargada.palcos[18].reservado ||
      !this.localidadCargada.palcos[18].disponible
    ) {
      this.lista33[0].valor = 'v';
    } else if (this.localidadCargada.palcos[18].proceso) {
      this.lista33[0].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[51].vendido ||
      this.localidadCargada.palcos[51].reservado ||
      !this.localidadCargada.palcos[51].disponible
    ) {
      this.lista33[1].valor = 'v';
    } else if (this.localidadCargada.palcos[51].proceso) {
      this.lista33[1].valor = 'p'
    }
    
    
    if (
      this.localidadCargada.palcos[80].vendido ||
      this.localidadCargada.palcos[80].reservado ||
      !this.localidadCargada.palcos[80].disponible
    ) {
      this.lista33[2].valor = 'v';
    } else if (this.localidadCargada.palcos[80].proceso) {
      this.lista33[2].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[90].vendido ||
      this.localidadCargada.palcos[90].reservado ||
      !this.localidadCargada.palcos[90].disponible
    ) {
      this.lista32[0].valor = 'v';
    } else if (this.localidadCargada.palcos[90].proceso) {
      this.lista32[0].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[82].vendido ||
      this.localidadCargada.palcos[82].reservado ||
      !this.localidadCargada.palcos[82].disponible
    ) {
      
      this.lista32[1].valor = 'v';
    } else if (this.localidadCargada.palcos[82].proceso) {
      this.lista32[1].valor = 'p'
    }
    
    if (
      this.localidadCargada.palcos[65].vendido ||
      this.localidadCargada.palcos[65].reservado ||
      !this.localidadCargada.palcos[65].disponible
    ) {
      this.lista32[2].valor = 'v';
    } else if (this.localidadCargada.palcos[65].proceso) {
      this.lista32[2].valor = 'p'
    }
    
    if (
      this.localidadCargada.palcos[27].vendido ||
      this.localidadCargada.palcos[27].reservado ||
      !this.localidadCargada.palcos[27].disponible
    ) {
      this.lista32[3].valor = 'v';
    } else if (this.localidadCargada.palcos[27].proceso) {
      this.lista32[3].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[89].vendido ||
      this.localidadCargada.palcos[89].reservado ||
      !this.localidadCargada.palcos[89].disponible
    ) {
      this.lista18[0].valor = 'v';
    } else if (this.localidadCargada.palcos[89].proceso) {
      this.lista18[0].valor = 'p'
    }
  
    if (
      this.localidadCargada.palcos[72].vendido ||
      this.localidadCargada.palcos[72].reservado ||
      !this.localidadCargada.palcos[72].disponible
    ) {
      this.lista18[1].valor = 'v';
    } else if (this.localidadCargada.palcos[72].proceso) {
      this.lista18[1].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[34].vendido ||
      this.localidadCargada.palcos[34].reservado ||
      !this.localidadCargada.palcos[34].disponible
    ) {
      this.lista18[2].valor = 'v';
    } else if (this.localidadCargada.palcos[34].proceso) {
      this.lista18[2].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[75].vendido ||
      this.localidadCargada.palcos[75].reservado ||
      !this.localidadCargada.palcos[75].disponible
    ) {
      this.lista19[1].valor = 'v';
    } else if (this.localidadCargada.palcos[75].proceso) {
      this.lista19[1].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[46].vendido ||
      this.localidadCargada.palcos[46].reservado ||
      !this.localidadCargada.palcos[46].disponible
    ) {
      this.lista19[0].valor = 'v';
    } else if (this.localidadCargada.palcos[46].proceso) {
      this.lista19[0].valor = 'p'
    }



    
    if (
      this.localidadCargada.palcos[12].vendido ||
      this.localidadCargada.palcos[12].reservado ||
      !this.localidadCargada.palcos[12].disponible
    ) {
      this.lista21[0].valor = 'v';
    } else if (this.localidadCargada.palcos[12].proceso) {
      this.lista21[0].valor = 'p'
    }


    if (
      this.localidadCargada.palcos[47].vendido ||
      this.localidadCargada.palcos[47].reservado ||
      !this.localidadCargada.palcos[47].disponible
    ) {
      this.lista21[1].valor = 'v';
    } else if (this.localidadCargada.palcos[47].proceso) {
      this.lista21[1].valor = 'p'
    }



    if (
      this.localidadCargada.palcos[76].vendido ||
      this.localidadCargada.palcos[76].reservado ||
      !this.localidadCargada.palcos[76].disponible
    ) {
      this.lista21[2].valor = 'v';
    } else if (this.localidadCargada.palcos[76].proceso) {
      this.lista21[2].valor = 'p'
    }

    for(let i=8 ;i >=1;i--){
      if (
        this.localidadCargada.palcos[i+18].vendido ||
        this.localidadCargada.palcos[i+18].reservado ||
        !this.localidadCargada.palcos[i+18].disponible
      ) {
        this.lista34[8-i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+18].proceso) {
        this.lista34[8-i].valor = 'p'
      }
  
    }

    if (
      this.localidadCargada.palcos[52].vendido ||
      this.localidadCargada.palcos[52].reservado ||
      !this.localidadCargada.palcos[52].disponible
    ) {
      this.lista34[8].valor = 'v';
    } else if (this.localidadCargada.palcos[52].proceso) {
      this.lista34[8].valor = 'p'
    }

    if (
      this.localidadCargada.palcos[81].vendido ||
      this.localidadCargada.palcos[81].reservado ||
      !this.localidadCargada.palcos[81].disponible
    ) {
      this.lista34[9].valor = 'v';
    } else if (this.localidadCargada.palcos[81].proceso) {
      this.lista34[9].valor = 'p'
    }



    for(let i=12 ;i >=1;i--){
      if (
        this.localidadCargada.palcos[i+52].vendido ||
        this.localidadCargada.palcos[i+52].reservado ||
        !this.localidadCargada.palcos[i+52].disponible
      ) {
        this.lista13[12-i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+52].proceso) {
        this.lista13[12-i].valor = 'p'
      }
  
      }

      for(let i=0 ;i <7;i++){
        if (
          this.localidadCargadaGeneral.palcos[i+18].vendido ||
          this.localidadCargadaGeneral.palcos[i+18].reservado ||
          !this.localidadCargadaGeneral.palcos[i+18].disponible
        ) {
          this.lista54[i].valor = 'v';
        } else if (this.localidadCargadaGeneral.palcos[i+18].proceso) {
          this.lista54[i].valor = 'p'
        }
    
        }
        

        if (
          this.localidadCargadaGeneral.palcos[17].vendido ||
          this.localidadCargadaGeneral.palcos[17].reservado ||
          !this.localidadCargadaGeneral.palcos[17].disponible
        ) {
          this.lista53[0].valor = 'v';
        } else if (this.localidadCargadaGeneral.palcos[17].proceso) {
          this.lista53[0].valor = 'p'
        }
        
        for(let i=1 ;i <6;i++){
          if (
            this.localidadCargadaGeneral.palcos[i].vendido ||
            this.localidadCargadaGeneral.palcos[i].reservado ||
            !this.localidadCargadaGeneral.palcos[i].disponible
          ) {
            this.lista53[i].valor = 'v';
          } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
            this.lista53[i].valor = 'p'
          }
      
          }


          if (
            this.localidadCargadaGeneral.palcos[6].vendido ||
            this.localidadCargadaGeneral.palcos[6].reservado ||
            !this.localidadCargadaGeneral.palcos[6].disponible
          ) {
            this.lista52[0].valor = 'v';
          } else if (this.localidadCargadaGeneral.palcos[6].proceso) {
            this.lista52[0].valor = 'p'
          }

          if (
            this.localidadCargadaGeneral.palcos[26].vendido ||
            this.localidadCargadaGeneral.palcos[26].reservado ||
            !this.localidadCargadaGeneral.palcos[26].disponible
          ) {
            this.lista52[1].valor = 'v';
          } else if (this.localidadCargadaGeneral.palcos[26].proceso) {
            this.lista52[1].valor = 'p'
          }




          

          if (
            this.localidadCargadaGeneral.palcos[25].vendido ||
            this.localidadCargadaGeneral.palcos[25].reservado ||
            !this.localidadCargadaGeneral.palcos[25].disponible
          ) {
            this.lista53[6].valor = 'v';
          } else if (this.localidadCargadaGeneral.palcos[25].proceso) {
            this.lista53[6].valor = 'p'
          }



          if (
            this.localidadCargadaGeneral.palcos[25].vendido ||
            this.localidadCargadaGeneral.palcos[25].reservado ||
            !this.localidadCargadaGeneral.palcos[25].disponible
          ) {
            this.lista53[6].valor = 'v';
          } else if (this.localidadCargadaGeneral.palcos[25].proceso) {
            this.lista53[6].valor = 'p'
          }




      for(let i=0;i<36;i++){
        if (0 <= i && i < 12) {
          if (
            this.localidadCargadaBoletas.palcos[i].vendido ||
            this.localidadCargadaBoletas.palcos[i].reservado ||
            !this.localidadCargadaBoletas.palcos[i].disponible
          ) {
            this.lista1[i].valor = 'v';
          } else if (this.localidadCargadaBoletas.palcos[i].proceso) {
            this.lista1[i].valor = 'p';
          }


          if (
            this.localidadCargadaBoletas.palcos[i+12].vendido ||
            this.localidadCargadaBoletas.palcos[i+12].reservado ||
            !this.localidadCargadaBoletas.palcos[i+12].disponible
          ) {
            this.lista2[i].valor = 'v';
          } else if (this.localidadCargadaBoletas.palcos[i+12].proceso) {
            this.lista2[i].valor = 'p';
          }

          if (
            this.localidadCargadaBoletas.palcos[i+24].vendido ||
            this.localidadCargadaBoletas.palcos[i+24].reservado ||
            !this.localidadCargadaBoletas.palcos[i+24].disponible
          ) {
            this.lista3[i].valor = 'v';
          } else if (this.localidadCargadaBoletas.palcos[i+24].proceso) {
            this.lista3[i].valor = 'p';
          }

       

          
        }
        
      }
    }


    if (
      this.localidadCargadaGeneral.palcos[16].vendido ||
      this.localidadCargadaGeneral.palcos[16].reservado ||
      !this.localidadCargadaGeneral.palcos[16].disponible
    ) {
      this.lista49[0].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[16].proceso) {
      this.lista49[0].valor = 'p'
    }

    if (
      this.localidadCargadaGeneral.palcos[0].vendido ||
      this.localidadCargadaGeneral.palcos[0].reservado ||
      !this.localidadCargadaGeneral.palcos[0].disponible
    ) {
      this.lista49[1].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[0].proceso) {
      this.lista49[1].valor = 'p'
    }



    if (
      this.localidadCargadaGeneral.palcos[16].vendido ||
      this.localidadCargadaGeneral.palcos[16].reservado ||
      !this.localidadCargadaGeneral.palcos[16].disponible
    ) {
      this.lista51[0].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[16].proceso) {
      this.lista51[0].valor = 'p'
    }

    if (
      this.localidadCargadaGeneral.palcos[27].vendido ||
      this.localidadCargadaGeneral.palcos[27].reservado ||
      !this.localidadCargadaGeneral.palcos[27].disponible
    ) {
      this.lista51[1].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[27].proceso) {
      this.lista51[1].valor = 'p'
    }

    
    if (
      this.localidadCargadaGeneral.palcos[39].vendido ||
      this.localidadCargadaGeneral.palcos[39].reservado ||
      !this.localidadCargadaGeneral.palcos[39].disponible
    ) {
      this.lista48[0].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[39].proceso) {
      this.lista48[0].valor = 'p'
    }

    if (
      this.localidadCargadaGeneral.palcos[15].vendido ||
      this.localidadCargadaGeneral.palcos[15].reservado ||
      !this.localidadCargadaGeneral.palcos[15].disponible
    ) {
      this.lista48[1].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[15].proceso) {
      this.lista48[1].valor = 'p'
    }


    for(let i =11;i>=1;i--){
      if (
        this.localidadCargadaPreferecial.palcos[i+45].vendido ||
        this.localidadCargadaPreferecial.palcos[i+45].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+45].disponible
      ) {
        this.lista12[11-i].valor = 'v';
      } else if (this.localidadCargadaPreferecial.palcos[i+45].proceso) {
        this.lista12[11-i ].valor = 'p';
      }

      if (
        this.localidadCargadaPreferecial.palcos[i+56].vendido ||
        this.localidadCargadaPreferecial.palcos[i+56].reservado ||
        !this.localidadCargadaPreferecial.palcos[i+56].disponible
      ) {
        this.lista11[11-i].valor = 'v';
      } else if (this.localidadCargadaPreferecial.palcos[i+56].proceso) {
        this.lista11[11-i ].valor = 'p';
      }

      if (
        this.localidadCargadaBoletas.palcos[i+35].vendido ||
        this.localidadCargadaBoletas.palcos[i+35].reservado ||
        !this.localidadCargadaBoletas.palcos[i+35].disponible
      ) {
        this.lista4[11-i].valor = 'v';
      } else if (this.localidadCargadaBoletas.palcos[i+35].proceso) {
        this.lista4[11-i ].valor = 'p';
      }

      if (
        this.localidadCargadaBoletas.palcos[i+46].vendido ||
        this.localidadCargadaBoletas.palcos[i+46].reservado ||
        !this.localidadCargadaBoletas.palcos[i+46].disponible
      ) {
        this.lista5[11-i].valor = 'v';
      } else if (this.localidadCargadaBoletas.palcos[i+46].proceso) {
        this.lista5[11-i ].valor = 'p';
      }
  }

  for(let i =10;i>=1;i--){
    if (
      this.localidadCargadaBoletas.palcos[i+57].vendido ||
      this.localidadCargadaBoletas.palcos[i+57].reservado ||
      !this.localidadCargadaBoletas.palcos[i+57].disponible
    ) {
      this.lista6[10-i].valor = 'v';
    } else if (this.localidadCargadaBoletas.palcos[i+57].proceso) {
      this.lista6[10-i ].valor = 'p';
    }
  }

  if (
    this.localidadCargadaGeneral.palcos[8].vendido ||
    this.localidadCargadaGeneral.palcos[8].reservado ||
    !this.localidadCargadaGeneral.palcos[8].disponible
  ) {
    this.lista50[0].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[8].proceso) {
    this.lista50[0].valor = 'p'
  }

  if (
    this.localidadCargadaGeneral.palcos[28].vendido ||
    this.localidadCargadaGeneral.palcos[28].reservado ||
    !this.localidadCargadaGeneral.palcos[28].disponible
  ) {
    this.lista50[1].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[28].proceso) {
    this.lista50[1].valor = 'p'
  }


  if (
    this.localidadCargadaGeneral.palcos[38].vendido ||
    this.localidadCargadaGeneral.palcos[38].reservado ||
    !this.localidadCargadaGeneral.palcos[38].disponible
  ) {
    this.lista47[0].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[8].proceso) {
    this.lista47[0].valor = 'p'
  }


  if (
    this.localidadCargadaGeneral.palcos[37].vendido ||
    this.localidadCargadaGeneral.palcos[37].reservado ||
    !this.localidadCargadaGeneral.palcos[37].disponible
  ) {
    this.lista46[0].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[37].proceso) {
    this.lista46[0].valor = 'p'
  }

  if (
    this.localidadCargadaGeneral.palcos[13].vendido ||
    this.localidadCargadaGeneral.palcos[13].reservado ||
    !this.localidadCargadaGeneral.palcos[13].disponible
  ) {
    this.lista46[1].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[13].proceso) {
    this.lista46[1].valor = 'p'
  }

  if (
    this.localidadCargadaGeneral.palcos[12].vendido ||
    this.localidadCargadaGeneral.palcos[12].reservado ||
    !this.localidadCargadaGeneral.palcos[12].disponible
  ) {
    this.lista46[2].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[12].proceso) {
    this.lista46[2].valor = 'p'
  }

  if (
    this.localidadCargadaGeneral.palcos[11].vendido ||
    this.localidadCargadaGeneral.palcos[11].reservado ||
    !this.localidadCargadaGeneral.palcos[11].disponible
  ) {
    this.lista46[3].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[11].proceso) {
    this.lista46[3].valor = 'p'
  }
  if (
    this.localidadCargadaGeneral.palcos[10].vendido ||
    this.localidadCargadaGeneral.palcos[10].reservado ||
    !this.localidadCargadaGeneral.palcos[10].disponible
  ) {
    this.lista46[4].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[10].proceso) {
    this.lista46[4].valor = 'p'
  }
  if (
    this.localidadCargadaGeneral.palcos[9].vendido ||
    this.localidadCargadaGeneral.palcos[9].reservado ||
    !this.localidadCargadaGeneral.palcos[9].disponible
  ) {
    this.lista46[5].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[9].proceso) {
    this.lista46[5].valor = 'p'
  }


  if (
    this.localidadCargadaGeneral.palcos[29].vendido ||
    this.localidadCargadaGeneral.palcos[29].reservado ||
    !this.localidadCargadaGeneral.palcos[29].disponible
  ) {
    this.lista46[6].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[29].proceso) {
    this.lista46[6].valor = 'p'
  }


for(let i =7;i >0;i--){
  if (
    this.localidadCargadaGeneral.palcos[i+29].vendido ||
    this.localidadCargadaGeneral.palcos[i+29].reservado ||
    !this.localidadCargadaGeneral.palcos[i+29].disponible
  ) {
    this.lista45[7-i].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[i+29].proceso) {
    this.lista45[7-i].valor = 'p'
  }

}







  if (
    this.localidadCargadaGeneral.palcos[14].vendido ||
    this.localidadCargadaGeneral.palcos[14].reservado ||
    !this.localidadCargadaGeneral.palcos[14].disponible
  )

  {

    this.lista47[1].valor = 'v';
  } else if (this.localidadCargadaGeneral.palcos[14].proceso) {
    this.lista47[1].valor = 'p'
  }



  if (
    this.localidadCargadaBoletas.palcos[99].vendido ||
    this.localidadCargadaBoletas.palcos[99].reservado ||
    !this.localidadCargadaBoletas.palcos[99].disponible
  ) {
    this.lista35[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[99].proceso) {
    this.lista35[0].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[89].vendido ||
    this.localidadCargadaBoletas.palcos[89].reservado ||
    !this.localidadCargadaBoletas.palcos[89].disponible
  ) {
    this.lista35[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[89].proceso) {
    this.lista35[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[79].vendido ||
    this.localidadCargadaBoletas.palcos[79].reservado ||
    !this.localidadCargadaBoletas.palcos[79].disponible
  ) {
    this.lista35[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[79].proceso) {
    this.lista35[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[69].vendido ||
    this.localidadCargadaBoletas.palcos[69].reservado ||
    !this.localidadCargadaBoletas.palcos[69].disponible
  ) {
    this.lista35[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[69].proceso) {
    this.lista35[3].valor = 'p';
  }










  if (
    this.localidadCargadaBoletas.palcos[100].vendido ||
    this.localidadCargadaBoletas.palcos[100].reservado ||
    !this.localidadCargadaBoletas.palcos[100].disponible
  ) {
    this.lista36[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[100].proceso) {
    this.lista36[0].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[90].vendido ||
    this.localidadCargadaBoletas.palcos[90].reservado ||
    !this.localidadCargadaBoletas.palcos[90].disponible
  ) {
    this.lista36[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[90].proceso) {
    this.lista36[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[80].vendido ||
    this.localidadCargadaBoletas.palcos[80].reservado ||
    !this.localidadCargadaBoletas.palcos[80].disponible
  ) {
    this.lista36[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[80].proceso) {
    this.lista36[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[70].vendido ||
    this.localidadCargadaBoletas.palcos[70].reservado ||
    !this.localidadCargadaBoletas.palcos[70].disponible
  ) {
    this.lista36[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[70].proceso) {
    this.lista36[3].valor = 'p';
  }




  

  if (
    this.localidadCargadaBoletas.palcos[101].vendido ||
    this.localidadCargadaBoletas.palcos[101].reservado ||
    !this.localidadCargadaBoletas.palcos[101].disponible
  ) {
    this.lista37[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[101].proceso) {
    this.lista37[0].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[91].vendido ||
    this.localidadCargadaBoletas.palcos[91].reservado ||
    !this.localidadCargadaBoletas.palcos[91].disponible
  ) {
    this.lista37[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[91].proceso) {
    this.lista37[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[81].vendido ||
    this.localidadCargadaBoletas.palcos[81].reservado ||
    !this.localidadCargadaBoletas.palcos[81].disponible
  ) {
    this.lista37[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[81].proceso) {
    this.lista37[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[71].vendido ||
    this.localidadCargadaBoletas.palcos[71].reservado ||
    !this.localidadCargadaBoletas.palcos[71].disponible
  ) {
    this.lista37[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[71].proceso) {
    this.lista37[3].valor = 'p';
  }













  if (
    this.localidadCargadaBoletas.palcos[102].vendido ||
    this.localidadCargadaBoletas.palcos[102].reservado ||
    !this.localidadCargadaBoletas.palcos[102].disponible
  ) {
    this.lista38[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[102].proceso) {
    this.lista38[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[92].vendido ||
    this.localidadCargadaBoletas.palcos[92].reservado ||
    !this.localidadCargadaBoletas.palcos[92].disponible
  ) {
    this.lista38[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[92].proceso) {
    this.lista38[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[82].vendido ||
    this.localidadCargadaBoletas.palcos[82].reservado ||
    !this.localidadCargadaBoletas.palcos[82].disponible
  ) {
    this.lista38[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[82].proceso) {
    this.lista38[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[72].vendido ||
    this.localidadCargadaBoletas.palcos[72].reservado ||
    !this.localidadCargadaBoletas.palcos[72].disponible
  ) {
    this.lista38[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[72].proceso) {
    this.lista38[3].valor = 'p';
  }






  if (
    this.localidadCargadaBoletas.palcos[103].vendido ||
    this.localidadCargadaBoletas.palcos[103].reservado ||
    !this.localidadCargadaBoletas.palcos[103].disponible
  ) {
    this.lista39[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[103].proceso) {
    this.lista39[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[93].vendido ||
    this.localidadCargadaBoletas.palcos[93].reservado ||
    !this.localidadCargadaBoletas.palcos[93].disponible
  ) {
    this.lista39[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[93].proceso) {
    this.lista39[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[83].vendido ||
    this.localidadCargadaBoletas.palcos[83].reservado ||
    !this.localidadCargadaBoletas.palcos[83].disponible
  ) {
    this.lista39[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[83].proceso) {
    this.lista39[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[73].vendido ||
    this.localidadCargadaBoletas.palcos[73].reservado ||
    !this.localidadCargadaBoletas.palcos[73].disponible
  ) {
    this.lista39[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[73].proceso) {
    this.lista39[3].valor = 'p';
  }




  
  if (
    this.localidadCargadaBoletas.palcos[104].vendido ||
    this.localidadCargadaBoletas.palcos[104].reservado ||
    !this.localidadCargadaBoletas.palcos[104].disponible
  ) {
    this.lista40[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[104].proceso) {
    this.lista40[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[94].vendido ||
    this.localidadCargadaBoletas.palcos[94].reservado ||
    !this.localidadCargadaBoletas.palcos[94].disponible
  ) {
    this.lista40[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[94].proceso) {
    this.lista40[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[84].vendido ||
    this.localidadCargadaBoletas.palcos[84].reservado ||
    !this.localidadCargadaBoletas.palcos[84].disponible
  ) {
    this.lista40[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[84].proceso) {
    this.lista40[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[74].vendido ||
    this.localidadCargadaBoletas.palcos[74].reservado ||
    !this.localidadCargadaBoletas.palcos[74].disponible
  ) {
    this.lista40[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[74].proceso) {
    this.lista40[3].valor = 'p';
  }






  
  if (
    this.localidadCargadaBoletas.palcos[105].vendido ||
    this.localidadCargadaBoletas.palcos[105].reservado ||
    !this.localidadCargadaBoletas.palcos[105].disponible
  ) {
    this.lista41[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[105].proceso) {
    this.lista41[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[95].vendido ||
    this.localidadCargadaBoletas.palcos[95].reservado ||
    !this.localidadCargadaBoletas.palcos[95].disponible
  ) {
    this.lista41[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[95].proceso) {
    this.lista41[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[85].vendido ||
    this.localidadCargadaBoletas.palcos[85].reservado ||
    !this.localidadCargadaBoletas.palcos[85].disponible
  ) {
    this.lista41[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[85].proceso) {
    this.lista41[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[75].vendido ||
    this.localidadCargadaBoletas.palcos[75].reservado ||
    !this.localidadCargadaBoletas.palcos[75].disponible
  ) {
    this.lista41[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[75].proceso) {
    this.lista41[3].valor = 'p';
  }




  
  
  if (
    this.localidadCargadaBoletas.palcos[106].vendido ||
    this.localidadCargadaBoletas.palcos[106].reservado ||
    !this.localidadCargadaBoletas.palcos[106].disponible
  ) {
    this.lista42[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[106].proceso) {
    this.lista42[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[96].vendido ||
    this.localidadCargadaBoletas.palcos[96].reservado ||
    !this.localidadCargadaBoletas.palcos[96].disponible
  ) {
    this.lista42[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[96].proceso) {
    this.lista42[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[86].vendido ||
    this.localidadCargadaBoletas.palcos[86].reservado ||
    !this.localidadCargadaBoletas.palcos[86].disponible
  ) {
    this.lista42[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[86].proceso) {
    this.lista42[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[76].vendido ||
    this.localidadCargadaBoletas.palcos[76].reservado ||
    !this.localidadCargadaBoletas.palcos[76].disponible
  ) {
    this.lista42[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[76].proceso) {
    this.lista42[3].valor = 'p';
  }
  





  
  if (
    this.localidadCargadaBoletas.palcos[107].vendido ||
    this.localidadCargadaBoletas.palcos[107].reservado ||
    !this.localidadCargadaBoletas.palcos[107].disponible
  ) {
    this.lista43[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[107].proceso) {
    this.lista43[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[97].vendido ||
    this.localidadCargadaBoletas.palcos[97].reservado ||
    !this.localidadCargadaBoletas.palcos[97].disponible
  ) {
    this.lista43[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[97].proceso) {
    this.lista43[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[87].vendido ||
    this.localidadCargadaBoletas.palcos[87].reservado ||
    !this.localidadCargadaBoletas.palcos[87].disponible
  ) {
    this.lista43[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[87].proceso) {
    this.lista43[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[77].vendido ||
    this.localidadCargadaBoletas.palcos[77].reservado ||
    !this.localidadCargadaBoletas.palcos[77].disponible
  ) {
    this.lista43[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[77].proceso) {
    this.lista43[3].valor = 'p';
  }




  
  if (
    this.localidadCargadaBoletas.palcos[108].vendido ||
    this.localidadCargadaBoletas.palcos[108].reservado ||
    !this.localidadCargadaBoletas.palcos[108].disponible
  ) {
    this.lista44[0].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[108].proceso) {
    this.lista44[0].valor = 'p';
  }
  if (
    this.localidadCargadaBoletas.palcos[98].vendido ||
    this.localidadCargadaBoletas.palcos[98].reservado ||
    !this.localidadCargadaBoletas.palcos[98].disponible
  ) {
    this.lista44[1].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[98].proceso) {
    this.lista44[1].valor = 'p';
  }

  if (
    this.localidadCargadaBoletas.palcos[88].vendido ||
    this.localidadCargadaBoletas.palcos[88].reservado ||
    !this.localidadCargadaBoletas.palcos[88].disponible
  ) {
    this.lista44[2].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[88].proceso) {
    this.lista43[2].valor = 'p';
  }


  if (
    this.localidadCargadaBoletas.palcos[78].vendido ||
    this.localidadCargadaBoletas.palcos[78].reservado ||
    !this.localidadCargadaBoletas.palcos[78].disponible
  ) {
    this.lista44[3].valor = 'v';
  } else if (this.localidadCargadaBoletas.palcos[78].proceso) {
    this.lista44[3].valor = 'p'
  }

  

  if (
    this.localidadCargada.palcos[73].vendido ||
    this.localidadCargada.palcos[73].reservado ||
    !this.localidadCargada.palcos[73].disponible
  ) {
    this.lista15[0].valor = 'v';
  } else if (this.localidadCargada.palcos[73].proceso) {
    this.lista15[0].valor = 'p'
  }



  if (
    this.localidadCargada.palcos[74].vendido ||
    this.localidadCargada.palcos[74].reservado ||
    !this.localidadCargada.palcos[74].disponible
  ) {
    this.lista16[0].valor = 'v';
  } else if (this.localidadCargada.palcos[74].proceso) {
    this.lista16[0].valor = 'p'
  }
}

cargarLocalidadEnMapa8() {


  for(let i=0;i<7;i++) {
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
      this.localidadCargadaGeneral.palcos[i+7].vendido ||
      this.localidadCargadaGeneral.palcos[i+7].reservado ||
      !this.localidadCargadaGeneral.palcos[i+7].disponible
    ) {
      this.lista2[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+7].proceso) {
      this.lista2[i].valor = 'p';
    }

    if (
      this.localidadCargadaGeneral.palcos[i+14].vendido ||
      this.localidadCargadaGeneral.palcos[i+14].reservado ||
      !this.localidadCargadaGeneral.palcos[i+14].disponible
    ) {
      this.lista3[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+14].proceso) {
      this.lista3[i].valor = 'p';
    }


    if (
      this.localidadCargadaGeneral.palcos[i+21].vendido ||
      this.localidadCargadaGeneral.palcos[i+21].reservado ||
      !this.localidadCargadaGeneral.palcos[i+21].disponible
    ) {
      this.lista4[i].valor = 'v';
    } else if (this.localidadCargadaGeneral.palcos[i+21].proceso) {
      this.lista4[i].valor = 'p';
    }

    if (
      this.localidadCargada.palcos[i].vendido ||
      this.localidadCargada.palcos[i].reservado ||
      !this.localidadCargada.palcos[i].disponible
    ) {
      this.lista5[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i].proceso) {
      this.lista5[i].valor = 'p';
    }



  }

  

}


  cargarLocalidadEnMapa6() {

    for (var i = 0; i < this.localidadCargadaGeneral.palcos.length; i++) {
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista1[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista1[i].valor = 'p';
      }
    }
    for (var i = 0; i < this.localidadCargada.palcos.length; i++) {
      if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista2[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista2[i].valor = 'p';
      }
    }
    for (var i = 0; i < this.localidadCargadaPreferecial.palcos.length; i++) {
      if (
        this.localidadCargadaPreferecial.palcos[i].vendido ||
        this.localidadCargadaPreferecial.palcos[i].reservado ||
        !this.localidadCargadaPreferecial.palcos[i].disponible
      ) {
        this.lista3[i].valor = 'v';
      } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
        this.lista3[i].valor = 'p';
      }
    }
    for (var i = 0; i < this.localidadCargadaBoletas.palcos.length; i++) {
      if (
        this.localidadCargadaBoletas.palcos[i].vendido ||
        this.localidadCargadaBoletas.palcos[i].reservado ||
        !this.localidadCargadaBoletas.palcos[i].disponible
      ) {
        this.lista4[i].valor = 'v';
      } else if (this.localidadCargadaBoletas.palcos[i].proceso) {
        this.lista4[i].valor = 'p';
      }
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
      this.localidadCargada.palcos[i].vendido ||
      this.localidadCargada.palcos[i].reservado ||
      !this.localidadCargada.palcos[i].disponible
    ) {
      this.lista37[i].valor = 'v';
    } else if (this.localidadCargada.palcos[i].proceso) {
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
    if (
      numero != 'v' &&
      numero != 'p' &&
      numero != 'l' &&
      !this.cargando &&
      this.cargadoTodo
    ) {
      if (!this.usuarioBoolean) {
        if (this.contadorPalcos < 2 && !this.cargando) {
          this.cargando = true;
          this.palcoServicio
            .getPalcoParaCompraIndividual(this.evento.nombre, numero)
            .subscribe((response) => {
              this.palco = response;




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
                      this.palco.nombreEvento +
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
      } else {
        this.openDialog();
      }
    }
  }

  
  abrirTickets(localidad: Localidad) {
    if (!this.usuarioBoolean) {
      if (this.contadorBoletas < 6 && !this.cargando && this.cargadoTodo) {
        this.referenceCode = 'TICKET;' + this.usuarioEntidad.numeroDocumento + ',';
        this.cantidadBoletas(localidad);
      }
      else {
        alert('Solo puedes comprar 6 Tickets máximo por este Evento');
      }
    }

    else {
      alert('Ingresa a tu cuenta AllTickets para poder realizar la compra')
      this.openDialog();
    }
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
      alert('Ingresa a tu cuenta AllTickets para poder realizar la compra')
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
