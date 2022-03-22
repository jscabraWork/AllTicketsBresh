import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/eventos/evento.model';
import { AdicionalesDataService } from 'src/app/service/data/adicionales-data.service';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

@Component({
  selector: 'app-admin-adicionales',
  templateUrl: './admin-adicionales.component.html',
  styleUrls: ['./admin-adicionales.component.css']
})
export class AdminAdicionalesComponent implements OnInit {


  miId
  evento:Evento
  message
  constructor(private route: ActivatedRoute,private servicioEvento:EventoDataService, private servicio:AdicionalesDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');

      this.evento = new Evento();
    this.refrescar()
    })
  }
  refrescar(){
    this.servicioEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response)});
  }
  handleGetSuccesfull(r){
    this.evento=r;
  }

  borrarAdicional(id){
    this.servicio.borrarAdicionaById(id).subscribe(response=>{
      response
      this.message = 'Adicional ' + id + ' borrado'
      this.refrescar()
    })
  }
}
