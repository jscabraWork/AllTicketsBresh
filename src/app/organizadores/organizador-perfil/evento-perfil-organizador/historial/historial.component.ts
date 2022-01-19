import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PayUDataService } from 'src/app/service/data/pay-u-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  palcos: Palco[];
  clientes: Cliente[];
  mensajes: string[];
  tickets: Boleta[];
  evento: Evento;
  fechas: string[];
  metodos: string[];
  miId;
  constructor(
    private servicio: PayUDataService,
    private route: ActivatedRoute,
    private serviceEvento: EventoDataService
  ) {}

  ngOnInit(): void {
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
      terminado:null
    };
    this.palcos = [];
    this.clientes = [];
    this.mensajes = [];
    this.tickets = [];
    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');

      this.serviceEvento.getEventoId(this.miId).subscribe((response) => {
        this.handleGetSuccesfull(response);
        this.servicio.getHistorial('1', this.evento.id).subscribe((response) => {
          this.manejar(response);
        });
      });
  
    });
  }

  manejar(response) {
    this.palcos = response.palcos;
    this.clientes = response.clientes;
    this.mensajes = response.mensajes;
    this.tickets = response.boletas;
    this.fechas = response.fechas;
    this.metodos = response.metodos;
  }
  handleGetSuccesfull(response) {
    this.evento = response;
  }
  dineroRecaudadoPalcos(palco:Palco){
    if(palco!=null){
    var contador =0;
  
      if(palco.vendido ==true){
        contador = contador +((palco.precioParcialPagado)/(palco.servicio+palco.servicioIva+palco.precio))*palco.precio
        
      }
   
    return contador;
  }
  return null
  }
}
