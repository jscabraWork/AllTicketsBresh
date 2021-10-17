import { BoletasDataService } from './../../service/data/boletas-data.service';
import { Boleta } from './../../eventos/boleta.model';
import { EtapasDataService } from './../../service/data/etapas-data.service';
import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { ActivatedRoute } from '@angular/router';
import { Evento } from './../../eventos/evento.model';
import { PuntoFisico } from './../puntoFisico.model';
import { PuntosFisicosDataService } from './../../service/data/puntos-fisicos-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { IVA } from 'src/app/app.constants';
import { ImagenEventosComponent } from 'src/app/eventos/eventos-perfil/imagen-eventos/imagen-eventos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-evento-punto-fisico',
  templateUrl: './evento-punto-fisico.component.html',
  styleUrls: ['./evento-punto-fisico.component.css']
})
export class EventoPuntoFisicoComponent implements OnInit {

  puntoFisico:PuntoFisico
  evento:Evento
  user
  miId
  etapa:Etapa
  boletas:Boleta[]=[]
boletaBoolean:boolean=false
IVA



  constructor(private servicio: PuntosFisicosDataService ,private dialog:MatDialog, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private route: ActivatedRoute,private autenticador: HardcodedAutheticationService, private eventosServicio:EventoDataService) { }

  ngOnInit(): void {
    this.IVA=IVA
       
    this.evento ={
      id: "",
      nombre:"",
      fecha:null,
      descripcion:"",
      lugar:"",
      video:"",
      terminosYCondiciones:"",
      recomendaciones:"",
      ciudadIdTexto:null,

      imagen:null,
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      
      horaInicio:null,
      horaFin:null,
      etapas:[],
      mapaImagen:null,
      visible:false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null,
      urlMapa:null,
      adicionales:[],
      oculto:null,
      dineroEntregado:null,
      ciudadNombre:null
    }
    this.etapa={
      evento:null,
      id:null,
      localidades:[],
      nombre:"",
      visible:null ,
      promotorVenta:null   
    }
    this.user=this.autenticador.getPuntoFisico();
    this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');})
      this.eventosServicio.getEventoId(this.miId).subscribe(response=> 
        {
          this.handle(response)
        }
        
        );
    
    
    });
  }
  handle(response){
    if(response.visible)
    {
      this.evento =response.evento
      this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
   
      
      
      })
    }
  }

  manejar(response){
    this.etapa=response
  }

  darCantidadDePalcos(localidad:Localidad){
    var contador =0;
    for(var i =0; i < localidad.palcos.length; i=i+1){
      if(localidad.palcos[i].vendido==false){
  
        contador = contador+1;
      }
    }
    return contador;
  }
  
  numeroBoletasPorVenderYNoReservadas(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)

    {
      if( localidad.boletas[i].reservado==false && localidad.boletas[i].vendida==false){
        contador = contador+1;
      }
    }
   
    return contador;
 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImagenEventosComponent, {
      width: '600px',
      height:'100%',
      data: { mapaImagen: this.evento.mapaImagen }
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
    
  }



}


