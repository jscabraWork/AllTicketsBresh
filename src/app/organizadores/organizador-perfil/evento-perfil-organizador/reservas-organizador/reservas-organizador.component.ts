import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Reserva } from 'src/app/models/reserva.model';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { ReservasDataService } from 'src/app/service/data/reservas-data.service';
import * as XLSX from 'xlsx'; 
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
  fileName
  ngOnInit(): void {
    this.evento = new Evento();
    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');
      this.servicioReserva
        .getAllReservasParaOrganizador(this.miId)
        .subscribe((response) => {
          this.manejar(response);
          this.serviceEvento.getEventoId(this.miId).subscribe((response) => {
            this.handleGetSuccesfull(response);
            this.fileName='Reservas '+ this.evento.nombre+ '.xlsx';  
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

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
}
