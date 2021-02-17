import { Md5 } from 'ts-md5/dist/md5';
import { Asistente } from './../../../../administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';
import { IVA } from './../../../../app.constants';
import { EventoDataService } from './../../../../service/data/evento-data.service';
import { EtapasDataService } from './../../../../service/data/etapas-data.service';
import { BoletasDataService } from './../../../../service/data/boletas-data.service';
import { HardcodedAutheticationService } from './../../../../service/hardcoded-authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Localidad } from './../../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../../../boleta.model';
import { Evento } from './../../../evento.model';
import { Component, OnInit } from '@angular/core';
import { Etapa } from '../../etapa.model';
import { MatDialog } from '@angular/material/dialog';
import { CarritoDeComprasComponent } from '../carrito-de-compras/carrito-de-compras.component';

@Component({
  selector: 'app-regalar-boleta',
  templateUrl: './regalar-boleta.component.html',
  styleUrls: ['./regalar-boleta.component.css'],
})
export class RegalarBoletaComponent implements OnInit {
  miId;
  IVA;
  valorTotal: number;
  evento: Evento;
  boletas: Boleta[] = [];
  localidadesCompradas: Localidad[] = [];
  merchantId: number;
  accountId: number;
  referenceCode: string;
  signature: string;
  ApiKey: string;
  valorLocalidadAgregada: number;
  contadorBoletas;
  etapa: Etapa;
  boletaBoolean: boolean;

  asistente: Asistente;
  boletaN: number;
  localidad: Localidad;
  idLocalidad;
  url = 'https://checkout.payulatam.com/ppp-web-gateway-payu/';
  cargando = false;
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private service: EventoDataService,
    private etapaServicio: EtapasDataService,
    private servicioBoletas: BoletasDataService,
    private autenticador: HardcodedAutheticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.valorTotal = 0;

    this.valorLocalidadAgregada = 0;
    this.contadorBoletas = 0;
    this.boletaN = 0;
    this.boletaBoolean = false;

    this.IVA = IVA;
    this.merchantId = 703263; // 508029
    this.accountId = 706326; //  512321
    this.ApiKey = 'tyrs5RFaKLs72kHWaZW3WB91B0'; // 4Vj8eK4rloUd272L48hsrarnUA

    this.asistente = {
      boletas: [],
      celular: null,
      correo: null,
      nombre: null,
      numeroDocumento: null,
    };
    this.referenceCode = 'TICKETREGALO: ';
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
    };
    this.localidad = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [],
    };

    this.etapa = {
      evento: null,
      id: null,
      localidades: [],
      nombre: 'PRUEBA',
      visible: null,
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
                this.localidad = this.etapa.localidades[i];
                i = this.etapa.localidades.length;
              }
              i = i + 1;
            }
          });
      });
    });
  }

  manejar(response) {
    this.etapa = response;
  }
  handleGetSuccesfull(response) {
    if (response.visible) {
      this.evento = response;
    }
  }

  numeroBoletasPorVenderYNoReservadas(localidad: Localidad) {
    var contador = 0;
    for (var i = 0; i < localidad.boletas.length; i++) {
      if (
        localidad.boletas[i].reservado == false &&
        localidad.boletas[i].vendida == false
      ) {
        contador = contador + 1;
      }
    }

    return contador;
  }

  reservarBoletasSillasExactas(localidad: Localidad) {
    var lista: Boleta[] = [];

    this.servicioBoletas
      .getBoletasVendidasYReservado(this.evento.id, localidad.id, false, false)
      .subscribe((response) => {
        lista = response;
        if (lista.length > 0) {
          this.boletas = response;

          this.referenceCode =
            'TICKET REGALO: /' +
            this.asistente.correo +
            lista[0].localidadNombre +
            ':' +
            lista[0].id +
            '/';

          this.servicioBoletas
            .reservarBoletaIndividual(this.evento.id, localidad.id, lista[0])
            .subscribe((data) => {
              data;
              this.valorTotal =
                this.valorTotal +
                localidad.precio +
                localidad.servicio +
                localidad.servicio * IVA;
              var md5 = new Md5();

              this.signature = md5
                .appendStr(
                  this.ApiKey +
                    '~' +
                    this.merchantId +
                    '~' +
                    this.referenceCode +
                    '~' +
                    this.valorTotal +
                    '~COP'
                )
                .end()
                .toString();
              this.servicioBoletas
                .rechazarReservaBoleta(lista)
                .subscribe((response) => response);
            });
        } else {
          alert('No quedan boletas en esta localidad, prueba más tarde');
        }
      });
  }

  reservarBoletasPorLocalidad(localidad: Localidad) {
    if (this.localidadesCompradas.length < 6) {
      this.localidadesCompradas.push(localidad);
      this.valorLocalidadAgregada =
        this.valorLocalidadAgregada +
        localidad.precio +
        localidad.servicio +
        localidad.servicio * IVA;
    } else {
      alert('Maximo puedes comprar 6 tickets');
    }
  }

  quitaBoletaLocalidad(localidad: Localidad) {
    if (this.localidadesCompradas.length > 0) {
      var terminado = false;
      for (
        var i = 0;
        i < this.localidadesCompradas.length && !terminado;
        i = i + 1
      ) {
        if (this.localidadesCompradas[i].id == localidad.id) {
          this.localidadesCompradas.splice(i, 1);
          this.valorLocalidadAgregada =
            this.valorLocalidadAgregada -
            (localidad.precio + localidad.servicio + localidad.servicio * 0.19);
          terminado = true;
        }
      }
    } else {
      alert('No tienes Tickets seleccionados');
    }
  }

  reservarBoletasLocalidad() {
    

    if (this.localidadesCompradas.length <= 6) {
      if (this.localidadesCompradas.length > 0) {
       this.referenceCode= this.referenceCode + this.asistente.numeroDocumento+"/";
        this.servicioBoletas
          .reservarBoletaLocalidad(
            this.evento.id,
            this.localidadesCompradas[0].id,
            this.localidadesCompradas.length
          )
          .subscribe((response) => {
            this.boletas = response;
            if (response != null) {
              for (var i = 0; this.boletas.length > i; i = i + 1) {
                var md5 = new Md5();
                this.referenceCode =
                  this.referenceCode +
                  this.boletas[i].localidadNombre +
                  ':' +
                  this.boletas[i].id +
                  '/';
                this.valorTotal =
                  this.valorTotal +
                  this.boletas[i].precio +
                  this.boletas[i].servicio +
                  this.boletas[i].servicio * IVA;
                this.signature = md5
                  .appendStr(
                    this.ApiKey +
                      '~' +
                      this.merchantId +
                      '~' +
                      this.referenceCode +
                      '~' +
                      this.valorTotal +
                      '~COP'
                  )
                  .end()
                  .toString();
                if (i == this.boletas.length - 1) {
                  this.AbrirCarrito();
                }
              }

              this.servicioBoletas
                .rechazarReservaBoleta(this.boletas)
                .subscribe((response) => response);
            } else {
              alert('No quedan boletas en esta localidad, prueba más tarde');
            }
          });

        this.localidadesCompradas = [];
        this.valorLocalidadAgregada = 0;
      } else {
        alert('Agrega una boleta');
      }
    } else {
      alert('Solo puedes comprar máximo 6 boletas');
    }
  }

  AbrirCarrito(): void {
    const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
      width: '100%',
      height: '85%',

      data: {
        valorTotal: this.valorTotal,
        boletas: this.boletas,
        evento: this.evento,
        asistente: this.asistente,
        signature: this.signature,
        referenceCode: this.referenceCode,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.servicioBoletas
        .rechazarReservaBoletaInstantaneamente(this.boletas)
        .subscribe((response) => response);

      this.dialog.closeAll();
      this.boletas = [];
      this.localidadesCompradas = [];
      this.valorLocalidadAgregada = 0;
      this.valorTotal = 0;
      this.referenceCode = 'TICKET: /';
      this.signature = null;
    });
  }
}
