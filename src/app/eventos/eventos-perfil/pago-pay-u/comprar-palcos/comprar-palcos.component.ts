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
  localidadCargadaPreferecial:Localidad;

  localidadCargadaBoletas: Localidad;
  localidadCargadaBoletasVIP:Localidad;
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
  ) {}

  ngOnInit(): void {
    
    this.codigoVenta =''
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
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
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
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
      oculto:null
    };
    this.codigoVenta =='';
    this.route.paramMap.subscribe((params)=>{
      this.codigoVenta = params.get('codigoVenta')
    })
    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');
      this.idLocalidad = params.get('idLocalidad');

      this.service.getEventoId(this.miId).subscribe((response) => {
        this.handleGetSuccesfull(response);

      




        // if (this.evento.mapa == 'mapa3') {
        //   this.etapaServicio
        //     .getAllEtapasVisiblesDeEvento(this.evento.id, true)
        //     .subscribe((response) => {
        //       this.etapas = response;

        //       this.ponerNumerosMapa3();

        //       for (let i = 0; i < this.etapas.length; i += 1) {
        //         for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {
        //           if (
        //             this.etapas[i].localidades[j].nombre == 'Palcos General'
        //           ) {
        //             this.localidadCargadaGeneral =
        //               this.etapas[i].localidades[j];
        //           }

        //           if (this.etapas[i].localidades[j].nombre == 'Palcos VIP') {
        //             this.localidadCargada = this.etapas[i].localidades[j];
        //           }
        //           if (this.etapas[i].localidades[j].nombre == 'Zona Libre') {
        //             this.localidadCargadaBoletas =
        //               this.etapas[i].localidades[j];
        //           }
        //           if (this.etapas[i].localidades[j].nombre == 'Zona Libre VIP') {
        //             this.localidadCargadaBoletasVIP =
        //               this.etapas[i].localidades[j];
        //           }
        //         }
        //       }

        //       this.cargarLocalidadEnMapa3();
        //       this.cargadoTodo = true;
        //     });
        // }
        if (this.evento.mapa == 'mapa4') {
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {
              this.etapas = response;
              this.ponerNumerosMapa4();

              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {
                  if (this.etapas[i].localidades[j].nombre == 'Palcos VIP') {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                  }

                  if (
                    this.etapas[i].localidades[j].nombre == 'Palcos Platino'
                  ) {
                    this.localidadCargada = this.etapas[i].localidades[j];
                  }
                }
              }

              this.cargarLocalidadEnMapa4();
              this.cargadoTodo = true;
            });
        }


        if (this.evento.mapa == 'mapa5') {
          
          
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {
              this.ponerNumerosMapa5();
              this.etapas = response;

              

              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'Palcos VIP'
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                      
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Palcos Exclusive') {
                    this.localidadCargada = this.etapas[i].localidades[j];
                    
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Palcos Preferencial') {
                    this.localidadCargadaPreferecial = this.etapas[i].localidades[j];
                 
                  }


                  else if (this.etapas[i].localidades[j].nombre == 'General') {
                    this.localidadCargadaBoletas =
                      this.etapas[i].localidades[j];
                     
                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Platino') {
                    this.localidadCargadaBoletasVIP =
                      this.etapas[i].localidades[j];
                 
                  }
                }
              }

              this.cargarLocalidadEnMapa5();
              this.cargadoTodo = true;
            });
        }


        if (this.evento.mapa == 'mapa1' || this.evento.mapa == 'mapa2') {
          this.cargarMapa1()
          this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {
            this.etapas = response;

            for (let i = 0; i < this.etapas.length; i += 1) {
              for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {
               
                if (this.etapas[i].localidades[j].nombre == 'Palco'|| this.etapas[i].localidades[j].nombre == 'Palcos') {
                  
                  this.localidadCargada =
                    this.etapas[i].localidades[j];
                    
              
                }

                else if (
                  this.etapas[i].localidades[j].nombre == 'Perreo al aire libre'
                ) {
                  this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                }
              }
            }

            this.cargarLocalidadMapa1();
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
    if(response.visible || response.oculto){
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
          this.referenceCode = 'PALCO: ' + this.usuarioEntidad.usuario + '/';
          if (this.localidad == null) {
            alert('Agregar un Palco para continuar');
          } else {
            this.palcoServicio.reservarPalco(this.localidad.id).subscribe(
              (response) => {
                this.palco = response;
                this.referenceCode =
                  this.referenceCode +
                  this.palco.nombre +
                  ':' +
                  this.palco.id +
                  '/';
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
        codigoVenta:this.codigoVenta,
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

  darCantidadDePalcos(localidad: Localidad) {
    var contador = 0;
    for (var i = 0; i < localidad.palcos.length; i = i + 1) {
      if (!localidad.palcos[i].vendido && !localidad.palcos[i].reservado) {
        contador = contador + 1;
      }
    }
    return contador;
  }


    ponerNumerosMapa5() {
   
    for (let i = 1; i < 6; i += 1) {
      this.lista1[i - 1] = {
        valor: i ,
        localidad: 'vip',
      };
      this.lista2[i - 1] = {
        valor: i+5 ,
        localidad: 'vip',
      };
      this.lista3[i - 1] = {
        valor: i +10,
        localidad: 'pre',
      };
      this.lista4[i - 1] = {
        valor: i +15,
        localidad: 'pre',
      };
      this.lista5[i - 1] = {
        valor: i +20,
        localidad: 'pre',
      };
      this.lista6[i - 1] = {
        valor: i +25,
        localidad: 'pre',
      };

      this.lista7[i - 1] = {
        valor: i +30,
        localidad: '',
      };
      this.lista8[i - 1] = {
        valor: i +35,
        localidad: '',
      };
      this.lista9[i - 1] = {
        valor: i +40,
        localidad: '',
      };
    }
  }


  // ponerNumerosMapa3() {
  //   for (let i = 1; i < 10; i += 1) {
  //     this.lista1[i - 1] = {
  //       valor: i + 3,
  //       localidad: '',
  //     };
  //     this.lista3[i - 1] = {
  //       valor: i + 28,
  //       localidad: '',
  //     };
  //     this.lista5[i - 1] = {
  //       valor: i + 53,
  //       localidad: '',
  //     };
  //     this.lista7[i - 1] = {
  //       valor: i + 78,
  //       localidad: '',
  //     };
  //     this.lista9[i - 1] = {
  //       valor: i + 103,
  //       localidad: '',
  //     };
  //     this.lista11[i - 1] = {
  //       valor: i + 128,
  //       localidad: '',
  //     };
  //     this.lista13[i - 1] = {
  //       valor: i + 153,
  //       localidad: '',
  //     };
  //     this.lista15[i - 1] = {
  //       valor: i + 178,
  //       localidad: '',
  //     };
  //     this.lista17[i - 1] = {
  //       valor: i + 203,
  //       localidad: '',
  //     };
  //     this.lista19[i - 1] = {
  //       valor: i + 228,
  //       localidad: '',
  //     };
  //     this.lista21[i - 1] = {
  //       valor: i + 253,
  //       localidad: '',
  //     };
  //     this.lista23[i - 1] = {
  //       valor: i + 278,
  //       localidad: '',
  //     };
  //     this.lista25[i - 1] = {
  //       valor: i + 303,
  //       localidad: '',
  //     };
  //     this.lista27[i - 1] = {
  //       valor: i + 328,
  //       localidad: '',
  //     };
  //     this.lista29[i - 1] = {
  //       valor: i + 353,
  //       localidad: '',
  //     };
   
  //   }

  //   for (let i = 1; i < 11; i += 1) {
  //     this.lista2[i - 1] = {
  //       valor: i + 12,
  //       localidad: '',
  //     };

  //     this.lista4[i - 1] = {
  //       valor: i + 37,
  //       localidad: '',
  //     };
  //     this.lista6[i - 1] = {
  //       valor: i + 62,
  //       localidad: '',
  //     };
  //     this.lista8[i - 1] = {
  //       valor: i + 87,
  //       localidad: '',
  //     };
  //     this.lista10[i - 1] = {
  //       valor: i + 112,
  //       localidad: '',
  //     };
  //     this.lista12[i - 1] = {
  //       valor: i + 137,
  //       localidad: '',
  //     };
  //     this.lista14[i - 1] = {
  //       valor: i + 162,
  //       localidad: '',
  //     };
  //     this.lista16[i - 1] = {
  //       valor: i + 187,
  //       localidad: '',
  //     };
  //     this.lista18[i - 1] = {
  //       valor: i + 212,
  //       localidad: '',
  //     };
  //     this.lista20[i - 1] = {
  //       valor: i + 237,
  //       localidad: '',
  //     };
  //     this.lista22[i - 1] = {
  //       valor: i + 262,
  //       localidad: '',
  //     };
  //     this.lista24[i - 1] = {
  //       valor: i + 287,
  //       localidad: '',
  //     };
  //     this.lista26[i - 1] = {
  //       valor: i + 312,
  //       localidad: '',
  //     };
  //     this.lista28[i - 1] = {
  //       valor: i + 337,
  //       localidad: '',
  //     };
  //     this.lista30[i - 1] = {
  //       valor: i + 362,
  //       localidad: '',
  //     };
   
  //   }
  // }

  // cargarLocalidadEnMapa3() {
  //   if (
  //     this.localidadCargada.nombre == 'Palcos VIP' &&
  //     this.evento.mapa == 'mapa3'
  //   ) {
  //     for (let i = 0; i < this.localidadCargada.palcos.length; i += 1) {
  //       if (0 <= i && i <= 5) {
  //         this.lista1[i + 3].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista1[i + 3].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista1[i + 3].valor = 'p';
  //         }
  //       }
  //        else if (6 <= i && i <= 12) {
  //         this.lista2[i - 6].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista2[i - 6].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista2[i - 6].valor = 'p';
  //         }
  //       } else if (13 <= i && i <= 18) {
  //         this.lista3[i - 10].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista3[i - 10].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista3[i - 10].valor = 'p';
  //         }
  //       } else if (19 <= i && i <= 25) {
  //         this.lista4[i - 19].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista4[i - 19].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista4[i - 19].valor = 'p';
  //         }
  //       } else if (26 <= i && i <= 31) {
  //         this.lista5[i - 23].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista5[i - 23].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista5[i - 23].valor = 'p';
  //         }
  //       } else if (32 <= i && i <= 38) {
  //         this.lista6[i - 32].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista6[i - 32].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista6[i - 32].valor = 'p';
  //         }
  //       } else if (39 <= i && i <= 44) {
  //         this.lista7[i - 36].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista7[i - 36].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista7[i - 36].valor = 'p';
  //         }
  //       } else if (45 <= i && i <= 51) {
  //         this.lista8[i - 45].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista8[i - 45].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista8[i - 45].valor = 'p';
  //         }
  //       } else if (52 <= i && i <= 57) {
  //         this.lista9[i - 49].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista9[i - 49].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista9[i - 49].valor = 'p';
  //         }
  //       } else if (58 <= i && i <= 64) {
  //         this.lista10[i - 58].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista10[i - 58].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista10[i - 58].valor = 'p';
  //         }
  //       } else if (65 <= i && i <= 70) {
  //         this.lista11[i - 62].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista11[i - 62].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista11[i - 62].valor = 'p';
  //         }
  //       } else if (71 <= i && i <= 77) {
  //         this.lista12[i - 71].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista12[i - 71].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista12[i - 71].valor = 'p';
  //         }
  //       } else if (78 <= i && i <= 83) {
  //         this.lista13[i - 75].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista13[i - 75].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista13[i - 75].valor = 'p';
  //         }
  //       } else if (84 <= i && i <= 90) {
  //         this.lista14[i - 84].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista14[i - 84].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista14[i - 84].valor = 'p';
  //         }
  //       } else if (91 <= i && i <= 96) {
  //         this.lista15[i - 88].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista15[i - 88].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista15[i - 88].valor = 'p';
  //         }
  //       } else if (97 <= i && i <= 103) {
  //         this.lista16[i - 97].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista16[i - 97].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista16[i - 97].valor = 'p';
  //         }
  //       } else if (104 <= i && i <= 109) {
  //         this.lista17[i - 101].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista17[i - 101].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista17[i - 101].valor = 'p';
  //         }
  //       } else if (110 <= i && i <= 116) {
  //         this.lista18[i - 110].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista18[i - 110].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista18[i - 110].valor = 'p';
  //         }
  //       } else if (117 <= i && i <= 122) {
  //         this.lista19[i - 114].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista19[i - 114].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista19[i - 114].valor = 'p';
  //         }
  //       } else if (123 <= i && i <= 129) {
  //         this.lista20[i - 123].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista20[i - 123].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista20[i - 123].valor = 'p';
  //         }
  //       } else if (130 <= i && i <= 135) {
  //         this.lista21[i - 127].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista21[i - 127].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista21[i - 127].valor = 'p';
  //         }
  //       } else if (136 <= i && i <= 142) {
  //         this.lista22[i - 136].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista22[i - 136].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista22[i - 136].valor = 'p';
  //         }
  //       } else if (143 <= i && i <= 148) {
  //         this.lista23[i - 140].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista23[i - 140].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista23[i - 140].valor = 'p';
  //         }
  //       } else if (149 <= i && i <= 155) {
  //         this.lista24[i - 149].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista24[i - 149].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista24[i - 149].valor = 'p';
  //         }
  //       } else if (156 <= i && i <= 161) {
  //         this.lista25[i - 153].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista25[i - 153].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista25[i - 153].valor = 'p';
  //         }
  //       } else if (162 <= i && i <= 168) {
  //         this.lista26[i - 162].localidad = 'vip';
  //         if (
  //           this.localidadCargada.palcos[i].vendido ||
  //           this.localidadCargada.palcos[i].reservado ||
  //           !this.localidadCargada.palcos[i].disponible
  //         ) {
  //           this.lista26[i - 162].valor = 'v';
  //         } else if (this.localidadCargada.palcos[i].proceso) {
  //           this.lista26[i - 162].valor = 'p';
  //         }
  //       }
  //     }
  //   }

  //   if (
  //     this.localidadCargadaGeneral.nombre == 'Palcos General' &&
  //     this.evento.mapa == 'mapa3'
  //   ) {
  //     for (let i = 0; i < this.localidadCargadaGeneral.palcos.length; i += 1) {
  //       if (0 <= i && i <= 2) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista1[i].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista1[i].valor = 'p';
  //         }
  //       } else if (6 <= i && i <= 8) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista2[i + 1].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista2[i + 1].valor = 'p';
  //         }
  //       } else if (12 <= i && i <= 14) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista3[i - 12].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista3[i - 12].valor = 'p';
  //         }
  //       } else if (18 <= i && i <= 20) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista4[i - 11].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista4[i - 11].valor = 'p';
  //         }
  //       } else if (24 <= i && i <= 26) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista5[i - 24].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista5[i - 24].valor = 'p';
  //         }
  //       } else if (30 <= i && i <= 32) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista6[i - 23].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista6[i - 23].valor = 'p';
  //         }
  //       } else if (36 <= i && i <= 38) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista7[i - 36].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista7[i - 36].valor = 'p';
  //         }
  //       } else if (42 <= i && i <= 44) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista8[i - 35].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista8[i - 35].valor = 'p';
  //         }
  //       } else if (48 <= i && i <= 50) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista9[i - 48].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista9[i - 48].valor = 'p';
  //         }
  //       } else if (54 <= i && i <= 56) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista10[i - 47].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista10[i - 47].valor = 'p';
  //         }
  //       } else if (60 <= i && i <= 62) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista11[i - 60].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista11[i - 60].valor = 'p';
  //         }
  //       } else if (66 <= i && i <= 68) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista12[i - 59].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista12[i - 59].valor = 'p';
  //         }
  //       } else if (72 <= i && i <= 74) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista13[i - 72].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista13[i - 72].valor = 'p';
  //         }
  //       } else if (78 <= i && i <= 80) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista14[i - 71].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista14[i - 71].valor = 'p';
  //         }
  //       } else if (84 <= i && i <= 86) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista15[i - 84].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista15[i - 84].valor = 'p';
  //         }
  //       } else if (90 <= i && i <= 92) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista16[i - 83].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista16[i - 83].valor = 'p';
  //         }
  //       } else if (96 <= i && i <= 98) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista17[i - 96].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista17[i - 96].valor = 'p';
  //         }
  //       } else if (102 <= i && i <= 104) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista18[i - 95].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista18[i - 95].valor = 'p';
  //         }
  //       } else if (108 <= i && i <= 110) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista19[i - 108].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista19[i - 108].valor = 'p';
  //         }
  //       } else if (114 <= i && i <= 116) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista20[i - 107].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista20[i - 107].valor = 'p';
  //         }
  //       } else if (120 <= i && i <= 122) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista21[i - 120].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista21[i - 120].valor = 'p';
  //         }
  //       } else if (126 <= i && i <= 128) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista22[i - 119].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista22[i - 119].valor = 'p';
  //         }
  //       } else if (132 <= i && i <= 134) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista23[i - 132].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista23[i - 132].valor = 'p';
  //         }
  //       } else if (138 <= i && i <= 140) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista24[i - 131].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista24[i - 131].valor = 'p';
  //         }
  //       } else if (144 <= i && i <= 146) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista25[i - 144].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista25[i - 144].valor = 'p';
  //         }
  //       } else if (150 <= i && i <= 152) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista26[i - 143].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista26[i - 143].valor = 'p';
  //         }
  //       } else if (156 <= i && i <= 164) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista27[i - 156].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista27[i - 156].valor = 'p';
  //         }
  //       } else if (168 <= i && i <= 177) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista28[i - 168].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista28[i - 168].valor = 'p';
  //         }
  //       } else if (181 <= i && i <= 189) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i + 3].vendido ||
  //           this.localidadCargadaGeneral.palcos[i + 3].reservado ||
  //           this.localidadCargadaGeneral.palcos[i + 3].disponible == false
  //         ) {
  //           this.lista29[i - 181].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i + 3].proceso) {
  //           this.lista29[i - 181].valor = 'p';
  //         }
  //       } else if (193 <= i && i <= 202) {
  //         if (
  //           this.localidadCargadaGeneral.palcos[i].vendido ||
  //           this.localidadCargadaGeneral.palcos[i].reservado ||
  //           this.localidadCargadaGeneral.palcos[i].disponible == false
  //         ) {
  //           this.lista30[i - 193].valor = 'v';
  //         } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
  //           this.lista30[i - 193].valor = 'p';
  //         }
  //       } 
  //     }
  //   }
  // }

  cargarMapa1() {
    for (let i = 1; i < 13; i += 1) {
      this.lista1[i - 1] = i;
      this.lista2[i - 1] = i + 12;
    }
    for (let i = 1; i < 15; i += 1) {
      this.lista3[i - 1] = i + 24;
      this.lista4[i - 1] = i + 38;
      this.lista5[i - 1] = i + 52;
      this.lista6[i - 1] = i + 66;
    }
    for (let i = 1; i < 8; i += 1) {
      this.lista7[i - 1] = i + 80;
      this.lista8[i - 1] = i + 87;
    }
    for (let i = 1; i < 7; i += 1) {
      this.lista9[i - 1] = i + 94;
      this.lista10[i - 1] = i + 100;
      this.lista11[i - 1] = i + 106;
      this.lista12[i - 1] = i + 112;
    }

    for (let i = 1; i < 10; i += 1) {
      this.lista13[i - 1] = i + 118;
      this.lista14[i - 1] = i + 127;
      this.lista15[i - 1] = i + 136;
      this.lista16[i - 1] = i + 145;
    }

    for (let i = 1; i < 17; i += 1) {
      this.lista17[i - 1] = i + 154;
    }
    for (let i = 1; i < 15; i += 1) {
      this.lista18[i - 1] = i + 170;
    }

    for (let i = 1; i < 3; i += 1) {
      this.lista19[i - 1] = i + 184;
    }
  }

  cargarLocalidadMapa1() {
    for (let j = 0; j < this.localidadCargada.palcos.length; j = j + 1) {
      if (
        this.localidadCargada.palcos[j].vendido ||
        this.localidadCargada.palcos[j].reservado ||
        !this.localidadCargada.palcos[j].disponible
      ) {
        if (j >= 0 && j <= 11) {
          this.lista1[j] = 'v';
        } else if (j > 11 && j <= 23) {
          this.lista2[j - 12] = 'v';
        } else if (j > 23 && j <= 37) {
          this.lista3[j - 24] = 'v';
        } else if (j > 37 && j <= 51) {
          this.lista4[j - 38] = 'v';
        } else if (j > 51 && j <= 65) {
          this.lista5[j - 52] = 'v';
        } else if (j > 65 && j <= 79) {
          this.lista6[j - 66] = 'v';
        } else if (j > 79 && j <= 86) {
          this.lista7[j - 80] = 'v';
        } else if (j > 86 && j <= 93) {
          this.lista8[j - 87] = 'v';
        } else if (j > 93 && j <= 99) {
          this.lista9[j - 94] = 'v';
        } else if (j > 99 && j <= 105) {
          this.lista10[j - 100] = 'v';
        } else if (j > 105 && j <= 111) {
          this.lista11[j - 106] = 'v';
        } else if (j > 111 && j <= 117) {
          this.lista12[j - 112] = 'v';
        } else if (j > 117 && j <= 126) {
          this.lista13[j - 118] = 'v';
        } else if (j > 126 && j <= 135) {
          this.lista14[j - 127] = 'v';
        } else if (j > 135 && j <= 144) {
          this.lista15[j - 136] = 'v';
        } else if (j > 144 && j <= 153) {
          this.lista16[j - 145] = 'v';
        } else if (j > 153 && j <= 169) {
          this.lista17[j - 154] = 'v';
        } else if (j > 169 && j <= 183) {
          this.lista18[j - 170] = 'v';
        } else if (j > 183 && j <= 185) {
          this.lista19[j - 184] = 'v';
        }
      } else if (this.localidadCargada.palcos[j].proceso) {
        if (j >= 0 && j <= 11) {
          this.lista1[j] = 'p';
        } else if (j > 11 && j <= 23) {
          this.lista2[j - 12] = 'p';
        } else if (j > 23 && j <= 37) {
          this.lista3[j - 24] = 'p';
        } else if (j > 37 && j <= 51) {
          this.lista4[j - 38] = 'p';
        } else if (j > 51 && j <= 65) {
          this.lista5[j - 52] = 'p';
        } else if (j > 65 && j <= 79) {
          this.lista6[j - 66] = 'p';
        } else if (j > 79 && j <= 86) {
          this.lista7[j - 80] = 'p';
        } else if (j > 86 && j <= 93) {
          this.lista8[j - 87] = 'p';
        } else if (j > 93 && j <= 99) {
          this.lista9[j - 94] = 'p';
        } else if (j > 99 && j <= 105) {
          this.lista10[j - 100] = 'p';
        } else if (j > 105 && j <= 111) {
          this.lista11[j - 106] = 'p';
        } else if (j > 111 && j <= 117) {
          this.lista12[j - 112] = 'p';
        } else if (j > 117 && j <= 126) {
          this.lista13[j - 118] = 'p';
        } else if (j > 126 && j <= 135) {
          this.lista14[j - 127] = 'p';
        } else if (j > 135 && j <= 144) {
          this.lista15[j - 136] = 'p';
        } else if (j > 144 && j <= 153) {
          this.lista16[j - 145] = 'p';
        } else if (j > 153 && j <= 169) {
          this.lista17[j - 154] = 'p';
        } else if (j > 169 && j <= 183) {
          this.lista18[j - 170] = 'p';
        } else if (j > 183 && j <= 185) {
          this.lista19[j - 184] = 'p';
        }
      }
    }
  }

  ponerNumerosMapa4() {
    for (let i = 1; i < 26; i += 1) {
      this.lista1[i - 1] = {
        valor: i,
        localidad: '',
      };
      this.lista2[i - 1] = {
        valor: i + 25,
        localidad: '',
      };
      this.lista3[i - 1] = {
        valor: i + 50,
        localidad: '',
      };
      this.lista4[i - 1] = {
        valor: i + 75,
        localidad: '',
      };
      this.lista5[i - 1] = {
        valor: i + 100,
        localidad: '',
      };
      this.lista6[i - 1] = {
        valor: i + 125,
        localidad: '',
      };
      this.lista7[i - 1] = {
        valor: i + 150,
        localidad: '',
      };
      this.lista8[i - 1] = {
        valor: i + 175,
        localidad: '',
      };
      this.lista9[i - 1] = {
        valor: i + 200,
        localidad: '',
      };
      this.lista10[i - 1] = {
        valor: i + 225,
        localidad: '',
      };
      this.lista11[i - 1] = {
        valor: i + 250,
        localidad: '',
      };
      this.lista12[i - 1] = {
        valor: i + 275,
        localidad: '',
      };
      this.lista13[i - 1] = {
        valor: i + 300,
        localidad: '',
      };
      this.lista14[i - 1] = {
        valor: i + 325,
        localidad: '',
      };
      this.lista15[i - 1] = {
        valor: i + 350,
        localidad: '',
      };
      this.lista16[i - 1] = {
        valor: i + 375,
        localidad: '',
      };
      this.lista17[i - 1] = {
        valor: i + 400,
        localidad: '',
      };
      this.lista18[i - 1] = {
        valor: i + 425,
        localidad: '',
      };
    }
  }

  cargarLocalidadEnMapa4() {
    if (
      this.localidadCargada.nombre == 'Palcos Platino' &&
      this.evento.mapa == 'mapa4'
    ) {
      for (let i = 0; i < this.localidadCargada.palcos.length; i += 1) {
        if (0 <= i && i <= 13) {
          this.lista1[i + 6].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista1[i + 6].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista1[i + 6].valor = 'p';
          }
        } else if (14 <= i && i <= 27) {
          this.lista2[i - 8].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista2[i - 8].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista2[i - 8].valor = 'p';
          }
        } else if (28 <= i && i <= 41) {
          this.lista3[i - 22].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista3[i - 22].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista3[i - 22].valor = 'p';
          }
        } else if (42 <= i && i <= 55) {
          this.lista4[i - 36].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista4[i - 36].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista4[i - 36].valor = 'p';
          }
        } else if (56 <= i && i <= 69) {
          this.lista5[i - 50].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista5[i - 50].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista5[i - 50].valor = 'p';
          }
        } else if (70 <= i && i <= 83) {
          this.lista6[i - 64].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista6[i - 64].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista6[i - 64].valor = 'p';
          }
        } else if (84 <= i && i <= 97) {
          this.lista7[i - 78].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista7[i - 78].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista7[i - 78].valor = 'p';
          }
        } else if (98 <= i && i <= 111) {
          this.lista8[i - 92].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista8[i - 92].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista8[i - 92].valor = 'p';
          }
        } else if (112 <= i && i <= 125) {
          this.lista9[i - 106].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista9[i - 106].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista9[i - 106].valor = 'p';
          }
        } else if (126 <= i && i <= 139) {
          this.lista10[i - 120].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista10[i - 120].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista10[i - 120].valor = 'p';
          }
        } else if (140 <= i && i <= 153) {
          this.lista11[i - 134].localidad = 'vip';
          if (
            this.localidadCargada.palcos[i].vendido ||
            this.localidadCargada.palcos[i].reservado ||
            !this.localidadCargada.palcos[i].disponible
          ) {
            this.lista11[i - 134].valor = 'v';
          } else if (this.localidadCargada.palcos[i].proceso) {
            this.lista11[i - 134].valor = 'p';
          }
        }

        if (
          this.localidadCargadaGeneral.nombre == 'Palcos VIP' &&
          this.evento.mapa == 'mapa4'
        ) {
          for (
            let i = 0;
            i < this.localidadCargadaGeneral.palcos.length;
            i += 1
          ) {
            if (0 <= i && i <= 5) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista1[i].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista1[i].valor = 'p';
              }
            } else if (6 <= i && i <= 10) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista1[i + 14].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista1[i + 14].valor = 'p';
              }
            } else if (11 <= i && i <= 16) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista2[i - 11].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista2[i - 11].valor = 'p';
              }
            } else if (17 <= i && i <= 21) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista2[i + 3].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista2[i + 3].valor = 'p';
              }
            } else if (22 <= i && i <= 27) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista3[i - 22].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista3[i - 22].valor = 'p';
              }
            } else if (28 <= i && i <= 32) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista3[i - 8].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista3[i - 8].valor = 'p';
              }
            } else if (33 <= i && i <= 38) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista4[i - 33].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista4[i - 33].valor = 'p';
              }
            } else if (39 <= i && i <= 43) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista4[i - 19].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista4[i - 19].valor = 'p';
              }
            } else if (44 <= i && i <= 49) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista5[i - 44].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista5[i - 44].valor = 'p';
              }
            } else if (50 <= i && i <= 54) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista5[i - 30].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista5[i - 30].valor = 'p';
              }
            } else if (55 <= i && i <= 60) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista6[i - 55].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista6[i - 55].valor = 'p';
              }
            } else if (61 <= i && i <= 65) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista6[i - 41].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista6[i - 41].valor = 'p';
              }
            } else if (66 <= i && i <= 71) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista7[i - 66].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista7[i - 66].valor = 'p';
              }
            } else if (72 <= i && i <= 76) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista7[i - 52].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista7[i - 52].valor = 'p';
              }
            } else if (77 <= i && i <= 82) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista8[i - 77].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista8[i - 77].valor = 'p';
              }
            } else if (83 <= i && i <= 87) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista8[i - 63].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista8[i - 63].valor = 'p';
              }
            } else if (88 <= i && i <= 93) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista9[i - 88].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista9[i - 88].valor = 'p';
              }
            } else if (94 <= i && i <= 98) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista9[i - 74].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista9[i - 74].valor = 'p';
              }
            } else if (99 <= i && i <= 104) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista10[i - 99].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista10[i - 99].valor = 'p';
              }
            } else if (105 <= i && i <= 109) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista10[i - 85].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista10[i - 85].valor = 'p';
              }
            } else if (110 <= i && i <= 115) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista11[i - 110].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista11[i - 110].valor = 'p';
              }
            } else if (116 <= i && i <= 120) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista11[i - 96].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista11[i - 96].valor = 'p';
              }
            } else if (121 <= i && i <= 145) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista12[i - 121].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista12[i - 121].valor = 'p';
              }
            } else if (146 <= i && i <= 170) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista13[i - 146].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista13[i - 146].valor = 'p';
              }
            } else if (171 <= i && i <= 195) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista14[i - 171].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista14[i - 171].valor = 'p';
              }
            } else if (196 <= i && i <= 220) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista15[i - 196].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista15[i - 196].valor = 'p';
              }
            } else if (221 <= i && i <= 245) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista16[i - 221].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista16[i - 221].valor = 'p';
              }
            } else if (246 <= i && i <= 270) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista17[i - 246].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista17[i - 246].valor = 'p';
              }
            } else if (271 <= i && i <= 295) {
              if (
                this.localidadCargadaGeneral.palcos[i].vendido ||
                this.localidadCargadaGeneral.palcos[i].reservado ||
                this.localidadCargadaGeneral.palcos[i].disponible == false
              ) {
                this.lista18[i - 271].valor = 'v';
              } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
                this.lista18[i - 271].valor = 'p';
              }
            }
          }
        }
      }
    }
  }


  

  cargarLocalidadEnMapa5() {

    for(var i = 0; i < this.localidadCargada.palcos.length;i=i+1){

    if(i>=0 && i<5)
    {
      if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista1[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista1[i].valor = 'p';
      }
    }
   else if(i>=5 && i<10){
      if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista2[i-5].valor = 'v';
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista2[i-5].valor = 'p';
      }
    }
    }


    for(var i = 0; i < this.localidadCargadaGeneral.palcos.length;i=i+1){


      if(i>=0 && i<5)
    {
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista3[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista3[i].valor = 'p';
      }
    }
   else if(i>=5 && i<10){
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista4[i-5].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista4[i-5].valor = 'p';
      }
    }

    else if(i>=10 && i<15){
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista5[i-10].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista5[i-10].valor = 'p';
      }
    }

    else if(i>=15 && i<20){
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista6[i-15].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista6[i-15].valor = 'p';
      }
    }

    }
    for(var i = 0; i < this.localidadCargadaPreferecial.palcos.length;i=i+1){

      if(i>=0 && i<5)
      {
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
     else if(i>=5 && i<10){
        if (
          this.localidadCargadaPreferecial.palcos[i].vendido ||
          this.localidadCargadaPreferecial.palcos[i].reservado ||
          !this.localidadCargadaPreferecial.palcos[i].disponible
        ) {
          this.lista8[i-5].valor = 'v';
        } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
          this.lista8[i-5].valor = 'p';
        }
      }
  
      else if(i>=10 && i<15){
        if (
          this.localidadCargadaPreferecial.palcos[i].vendido ||
          this.localidadCargadaPreferecial.palcos[i].reservado ||
          !this.localidadCargadaPreferecial.palcos[i].disponible
        ) {
          this.lista9[i-10].valor = 'v';
        } else if (this.localidadCargadaPreferecial.palcos[i].proceso) {
          this.lista9[i-10].valor = 'p';
        }
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
      if (this.contadorBoletas < 6 && !this.cargando &&this.cargadoTodo) {
        this.referenceCode = 'TICKET;'+this.usuarioEntidad.numeroDocumento + ',';
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

  cantidadBoletas(localidad: Localidad) {
    let efectivo = localidad.efectivo;

    const dialogRef = this.dialog.open(CantidadBoletasComponent, {
      width: '600px',
     

      data: {
        idLocalidad:localidad.id,
        referenceCode: this.referenceCode,
        efectivo: efectivo,
        evento:this.evento,
        contadorBoletas:this.contadorBoletas,
        codigoVenta:this.codigoVenta,
        usuarioEntidad: this.usuarioEntidad,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();

          this.ngOnInit();
        
    });
  }
}
