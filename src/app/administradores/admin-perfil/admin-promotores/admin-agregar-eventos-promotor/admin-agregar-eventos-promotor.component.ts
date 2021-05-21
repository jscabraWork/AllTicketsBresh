import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/eventos/evento.model';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

@Component({
  selector: 'app-admin-agregar-eventos-promotor',
  templateUrl: './admin-agregar-eventos-promotor.component.html',
  styleUrls: ['./admin-agregar-eventos-promotor.component.css']
})
export class AdminAgregarEventosPromotorComponent implements OnInit {
  promotor:Promotor
  eventos:Evento[]=[];
  id;
  message;
  constructor(private route: ActivatedRoute,private servicio: PromotorDataService, private eventoServicio:EventoDataService) { }

  ngOnInit(): void {
    this.promotor={
      boletasVendidas:[],
      codigoventa:null,
      contrasena:null,
      dineroTotal:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null,
      boletasCanjeadas:[],
      palcosCanjeados:[],
      palcosVendidos:[],
      celular:null,
      correo:null,
      eventos:[]
    }
    
    this.refresecarEventos();
  }

  refresecarEventos(){
    this.eventoServicio.getAllEventos().subscribe(response=> this.eventos= response);
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id')});
    this.servicio.getPromotorById(this.id).subscribe(response=>{
      this.promotor=response
   
    })
  }
  agregar(idEvento){
    this.eventoServicio.agregarPromotorAEvento(idEvento,this.id).subscribe(response=>{
      this.refresecarEventos()
      alert("Evento "+idEvento +" Agregado al promotor "+this.id);
    })
  }

  eliminar(idEvento){
    this.eventoServicio.eliminarPromotorAEvento(idEvento,this.id).subscribe(response=>{
      this.refresecarEventos()
      alert("Evento "+idEvento +" Eliminador del promotor "+this.id);
    })
  }

}
