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
  etapa: Etapa;
  boletaBoolean: boolean;
  contadorPalcos;
  palco: Palco;
  localidad: Localidad;
  valorBoletas;

  cargando = false;
  cargadoTodo=false
  idLocalidad;
  localidadCargada: Localidad;
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: EventoDataService,
    private palcoServicio: PalcosDataService,
    private etapaServicio: EtapasDataService,
    private autenticador: HardcodedAutheticationService,
    private router: Router,
    private dataServicio: UsuariosDataService
  ) {}

  ngOnInit(): void {
    this.valorBoletas = 0;
    this.contadorPalcos = 0;
    this.valorTotal = 0;
    this.usuarioBoolean = true;

    this.valorLocalidadAgregada = 0;

    this.boletaBoolean = false;
    this.referenceCode = 'PALCO: ';
    this.IVA = IVA;

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

    this.localidadCargada = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [{
      
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
          proceso:null
       

      }],
      servicioPorcentaje: null,
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
      proceso:null
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
        id:null,
        name:null,
        url:null
      },
      visible: false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null
    };

    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');
      this.idLocalidad = params.get('idLocalidad');

      this.service.getEventoId(this.miId).subscribe((response) => {
        this.handleGetSuccesfull(response);
        this.etapaServicio
          .getAllEtapasVisiblesDeEvento(this.evento.id, true)
          .subscribe((response) => {
            this.manejar(response);
            var i = 0;
            while (i < this.etapa.localidades.length) {
              if (this.etapa.localidades[i].id == this.idLocalidad) {
                this.localidadCargada = this.etapa.localidades[i];
                i = this.etapa.localidades.length;
              }
              i = i + 1;
            }
            for (
              let j = 0;
              j < this.localidadCargada.palcos.length;
              j = j + 1
            ) {
              if (
                this.localidadCargada.palcos[j].vendido ||
                this.localidadCargada.palcos[j].reservado
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
              }
              else if (
                this.localidadCargada.palcos[j].proceso 
              ) {
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
            this.cargadoTodo =true;
          });

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
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  handleGetSuccesfull(response) {
    if (response.visible) {
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
            this.palcoServicio
              .reservarPalco(this.localidad.id)
              .subscribe((response) => {
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
                  this.palco.servicio * IVA;
                var md5 = new Md5();

                this.localidad = null;
                this.valorLocalidadAgregada = 0;
                this.valorBoletas = 0;
                this.AbrirCarrito();
                this.palcoServicio
                  .rechazarReservaPalco(this.palco.id)
                  .subscribe((response) => response);
              });
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
    const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
      width: '100%',
      height: '85%',

      data: {
        valorTotal: this.valorTotal,
        palco: this.palco,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        
        referenceCode: this.referenceCode,
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
    this.etapa = response;
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



  agregarPalcoIndividual(numero) {
    if (numero!='v' && numero!='p' && !this.cargando && this.cargadoTodo) {

      if(!this.usuarioBoolean ){
        
      if (this.contadorPalcos < 2 && !this.cargando) {
        this.cargando = true;
        this.palcoServicio
          .getPalcoParaCompraIndividual(this.evento.nombre, numero)
          .subscribe((response) => {
            this.palco = response;
            this.referenceCode =
              'PALCO:' + this.usuarioEntidad.numeroDocumento + ',';
            if (this.palco == null) {
              alert('Agregar un Palco para continuar');
            } else {
              this.palcoServicio
                .reservarPalcoExacto(this.palco.id)
                .subscribe((response) => {
                  response;

                  this.referenceCode =
                    this.referenceCode + this.palco.id + ','+this.palco.nombreEvento+',' + new Date();
                  this.cargando = false;

                  this.valorTotal =
                    this.palco.precio +
                    this.palco.servicio +
                    this.localidadCargada.servicioPorcentaje;
 
     
         
        
                  this.localidad = null;
                  this.valorLocalidadAgregada = 0;
                  this.valorBoletas = 0;
                  this.AbrirCarrito();
                  this.palcoServicio
                    .rechazarReservaPalco(this.palco.id)
                    .subscribe((response) => response);
                },
                
                (error)=>{
                  error
                  alert("Alguien aca de seleccionar este palco, intenta seleccionar otro")
                  this.cargando = false
                  this.ngOnInit()

                }
                
                );
            }
          });
      } else {
        alert('Solo puedes comprar 2 Palcos máximo por Evento');
      }
    }
    else{
      this.openDialog();
    }

    } 
    
    
    
    else {
     
    }
  }
}
