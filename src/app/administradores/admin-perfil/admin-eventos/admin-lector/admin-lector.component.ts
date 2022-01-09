import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { Palco } from '../admin-palcos/palco.model';

import { LectorDataService } from 'src/app/service/data/lector-data.service';
import { UsuariosDataService } from 'src/app/service/data/usuarios-data.service';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';

@Component({
  selector: 'app-admin-lector',
  templateUrl: './admin-lector.component.html',
  styleUrls: ['./admin-lector.component.css'],
})
export class AdminLectorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private servicioEvento: EventoDataService,
    private lectorService: LectorDataService,
    private clienteService: UsuariosDataService,
    private boletaService: BoletasDataService
  ) {}
  listaClientes: Cliente[] = [];
  boleta: Boleta;
  cliente: Cliente;
  idPalco;
  miId;
  mensaje: string;
  evento: Evento;
  texto: string;
  palco: Palco;
  cuposPalco: number[];
  entrarPersonas: number;
  cargando: boolean;
  clienteBuscar: Cliente;
  buscarNumeroCC: number;
  ngOnInit(): void {
    this.reiniciar();

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
      soldout: false,
      mensaje: null,
      imagenFinal: null,
      fechaApertura: null,
      urlMapa: null,
      adicionales: [],
      oculto: null,
      dineroEntregado: null,
      ciudadNombre: null,
      localidadesProducto:[],
      visibleAP:null,
    };

    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');
      this.refrescar();
    });
  }

  marcarComoUtilizada(boleta:Boleta){
    this.boletaService.marcarComoUtiliza(boleta.id).subscribe((response)=>{
      response
      alert("Se marco como utilizada la boleta: " + boleta.id)
      this.manejarBusquedaCliente();
    },
    (error)=>{
      alert("Intenta nuevamente")
    }
    )
  }

  refrescar() {
    this.servicioEvento
      .getEventoId(this.miId)
      .subscribe((response) => this.handleGetSuccesfull(response));
  }

  handleGetSuccesfull(r) {
    this.evento = r;
  }

  manejar() {
    this.reiniciar();

    this.lectorService.getPalco(this.texto).subscribe(
      (response) => {
        this.recibirLectura(response);
      },

      (error) => {
        this.mensaje = 'Codigo QR NO valido';
      }
    );
  }

  recibirLectura(response) {

    console.log(response)
    if(response !=null)
    {
      this.palco = response.palco;
      this.boleta = response.boleta;
      this.texto = '';
      console.log(this.palco);
      if (this.palco != null) {
        if (
          this.palco.vendido == true &&
          this.palco.precioParcialPagado >=
            this.palco.servicio + this.palco.precio + this.palco.servicioIva
        ) {
          if (this.palco.personasAdentro == this.palco.personasMaximas) {
            this.mensaje = 'PALCO LLENO';
          } else {
            this.mensaje = 'Codigo QR Valido';
          }
          this.listaClientes = response.clientes;
          let cantidad =
            this.palco.personasMaximas - this.palco.personasAdentro;
          for (let i = 1; i <= cantidad; i++) {
            this.cuposPalco.push(i);
          }
        } else {
          this.mensaje = 'Este palco no ha sido pagado en su totalidad';
        }
      } else if (this.boleta != null) {
        if (this.boleta.utilizada == false) {
          this.mensaje = 'Codigo QR Valido';
          this.cliente = response.cliente;
        } else {
          this.mensaje = 'Este QR ya ha sido utilizado';
        }
      }
    } else {
      this.mensaje = 'Codigo QR NO Valido';
    }
  
  }

  manejuCupo(palco: Palco) {
    let cuposPalco: number[] = [];
    let cantidad = palco.personasMaximas - palco.personasAdentro;
    for (let i = 1; i <= cantidad; i++) {
      cuposPalco.push(i);
    }
    return cuposPalco;
  }

  manejarRespuestaMensaje(response) {
    this.palco = response.palco;
    let cantidad = this.palco.personasMaximas - this.palco.personasAdentro;
    this.cuposPalco = [];
    for (let i = 1; i <= cantidad; i++) {
      this.cuposPalco.push(i);
    }
    return response.mensaje;
  }

  ingresar() {
    if (!this.cargando) {
      this.cargando = true;
      this.lectorService
        .ingresarPersonas(this.palco.id, this.entrarPersonas)
        .subscribe(
          (response) => {
            alert(this.manejarRespuestaMensaje(response));
            this.cargando = false;
          },
          (error) => {
            alert('Sucedio un error intenta de nuevo');
            this.cargando = false;
          }
        );
    }
  }

  ingresarCC(palco: Palco) {
    if (!this.cargando) {
      this.cargando = true;
      this.lectorService
        .ingresarPersonas(palco.id, this.entrarPersonas)
        .subscribe(
          (response) => {
           alert("Se ingresaron " +this.entrarPersonas + " al palco " + palco.numeroDentroDeEvento)
            this.cargando = false;
            this.manejarBusquedaCliente();
          },
          (error) => {
            alert('Sucedio un error intenta de nuevo');
            this.cargando = false;
          }
        );
    }
  }
  reiniciar() {
    this.buscarNumeroCC = null;
    this.clienteBuscar = {
      boletas: [],
      celular: null,
      contrasena: null,
      correo: null,
      direccion: null,
      nombre: null,
      numeroDocumento: null,
      palcos: [],
      publicidad: null,
      tipoDocumento: null,
      usuario: null,
    };
    this.cargando = false;
    this.entrarPersonas = 0;
    this.mensaje = '';
    this.cuposPalco = [];
    this.cliente = {
      boletas: [],
      celular: null,
      contrasena: null,
      correo: null,
      direccion: null,
      nombre: null,
      numeroDocumento: null,
      palcos: [],
      publicidad: null,
      tipoDocumento: null,
      usuario: null,
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
    this.boleta = {
      id: null,
      imagenQr: null,
      localidadIdNumero: null,
      localidadNombre: null,
      nombreEvento: null,
      precio: null,
      reservado: null,
      seccionSilla: null,
      servicio: null,
      utilizada: null,
      vendida: null,
      servicioIva: null,
      disponible:null,
	
      reserva:null,
    };
    this.listaClientes = [];
  }

  manejarBusquedaCliente() {

    this.entrarPersonas =0
    this.mensaje = ""
    this.listaClientes = [];
    this.cliente = {
      boletas: [],
      celular: null,
      contrasena: null,
      correo: null,
      direccion: null,
      nombre: null,
      numeroDocumento: null,
      palcos: [],
      publicidad: null,
      tipoDocumento: null,
      usuario: null,
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
    this.boleta = {
      id: null,
      imagenQr: null,
      localidadIdNumero: null,
      localidadNombre: null,
      nombreEvento: null,
      precio: null,
      reservado: null,
      seccionSilla: null,
      servicio: null,
      utilizada: null,
      vendida: null,
      servicioIva: null,
      disponible:null,
	
      reserva:null,
    };
    this.clienteService.getClientePorId(this.buscarNumeroCC).subscribe(
      (response) => {
        this.clienteBuscar = response;
        if (response == null) {
          alert('No encontramos esta cedula en nuestra base de datos');
        }
      },
      (error) => {
        alert('No encontramos esta cedula en nuestra base de datos');
      }
    );
  }
}
