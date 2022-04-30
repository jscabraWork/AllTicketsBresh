import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PayUDataService } from 'src/app/service/data/pay-u-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import * as XLSX from 'xlsx'; 
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
  fileName
  constructor(
    private servicio: PayUDataService,
    private route: ActivatedRoute,
    private serviceEvento: EventoDataService
  ) {}

  ngOnInit(): void {
    this.evento = new Evento();
    this.palcos = [];
    this.clientes = [];
    this.mensajes = [];
    this.tickets = [];
    this.route.paramMap.subscribe((params) => {
      this.miId = params.get('id');

      this.serviceEvento.getEventoId(this.miId).subscribe((response) => {
        this.handleGetSuccesfull(response);
        this.fileName='Historial '+ this.evento.nombre+ '.xlsx';  
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

  /*name of the excel-file which will be downloaded. */ 


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
