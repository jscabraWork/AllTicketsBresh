import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Reserva } from 'src/app/models/reserva.model';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { ReservasDataService } from 'src/app/service/data/reservas-data.service';

@Component({
  selector: 'app-reservas-organizador',
  templateUrl: './reservas-organizador.component.html',
  styleUrls: ['./reservas-organizador.component.css'],
})
export class ReservasOrganizadorComponent implements OnInit {
  constructor(
    private servicioReserva: ReservasDataService,
    private route: ActivatedRoute,
    private serviceEvento: EventoDataService,
    private reservaServicio: ReservasDataService
  ) {}
  miId;
  reservas: Reserva[] = [];
  palcos: Palco[] = [];
  promotores: Promotor[] = [];
  evento: Evento;
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
    };
    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');
      this.servicioReserva
        .getAllReservasParaOrganizador(this.miId)
        .subscribe((response) => {
          this.manejar(response);
          this.serviceEvento.getEventoId(this.miId).subscribe((response) => {
            this.handleGetSuccesfull(response);
          });
        });
    });
  }
  handleGetSuccesfull(response) {
    this.evento = response;
  }
  manejar(response) {
    this.promotores = response.promotores;
    this.reservas = response.reservas;
    this.palcos = response.palcos;
    console.log(this.reservas);
  }
  elminarReserva(idReserva) {
    this.reservaServicio.deleteReserva(idReserva).subscribe((response) => {
      this.ngOnInit();
    });
  }
}
