import { ImagenEventosComponent } from './imagen-eventos/imagen-eventos.component';
import { MatDialog } from '@angular/material/dialog';
import { EtapasDataService } from './../../service/data/etapas-data.service';

import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../boleta.model';
import { Evento } from './../evento.model';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Etapa } from './etapa.model';
import { IVA } from 'src/app/app.constants';
import * as countdown from 'countdown'
import { Time } from 'src/app/models/time.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CiudadesDataService } from '../../service/data/ciudades-data.service';
@Component({
  selector: 'app-eventos-perfil',
  templateUrl: './eventos-perfil.component.html',
  styleUrls: ['./eventos-perfil.component.css']
})
export class EventosPerfilComponent implements OnInit {
  miId:string;
  evento:Evento;
  etapas:Etapa[]=[];
  mapaUrl =null
  safeSrc=null
  fecha:Date 
  fechaActual:Date=new Date();
  localidades:Localidad[] = [];
  time:Time =null;
  mapaV:boolean
  organizadorId

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private service:EventoDataService, private sanitizer: DomSanitizer,private servicioCiudad: CiudadesDataService ,private etapaServicio:EtapasDataService) { }

  ngOnInit(): void {
    
    this.mapaV=false

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
      horaInicio:"",
      horaFin:"",
      etapas:[],
      mapaImagen: {
        id:null,
        name:null,
        url:null
      },
      visible:false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null,
      urlMapa:null,
      adicionales:[],
      oculto:null,
      dineroEntregado:null,
      ciudadNombre:null,
      localidadesProducto:[],
      visibleAP:null,
      terminado:null
    }
 
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoIdPerfil(this.miId).subscribe( response => {
        
        this.handleGetSuccesfull(response);
        
 
        this.mapaUrl = this.getSafeUrl(this.evento.urlMapa);
       if(this.evento.urlMapa!='no'){
         this.mapaV =true
       }
        this.safeSrc = this.getSafeUrl(this.evento.video)
        this.fecha = new Date(this.evento.fechaApertura)
       countdown(this.fecha,(ts)=>{
          this.time=ts
        },countdown.MONTHS|countdown.WEEKS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS)



        this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(response =>{this.manejar(response);
          
          for(let i=0; i< response.length; i++){
            
            if(this.evento.id =='LPC116')
            {

              if(i!=0){
              this.localidades = this.localidades.concat(response[i].localidades)
            }
            
          }
          else{
            this.localidades = this.localidades.concat(response[i].localidades)
          }
            
          }
          

          })
        
      
      
      });
      
     
  })
}
scroll(){
  document.getElementById("prueba9").scrollIntoView({behavior:"smooth"})
}

getSafeUrl(url) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}
openDialog(): void {
  const dialogRef = this.dialog.open(ImagenEventosComponent, {

    data: { mapaImagen: this.evento.mapaImagen },
    width:'100%',
    height:'100%'
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
    
    
  });

  
}

handleGetSuccesfull(response){
  
  if(response.evento.visible || response.evento.oculto){
    
  this.evento=response.evento;
  this.organizadorId = response.organizadorId

}
}

manejar(response){
  this.etapas =response;
}


// numeroBoletasPorVender(localidad:Localidad){

//   var contador =0;
//   let disponible = false;
//   for(var i =0; i< localidad.boletas.length && !disponible;i++)

//   {
//     if(  localidad.boletas[i].vendida==false && localidad.boletas[i].reservado==false){
//       contador = contador+1;
//       disponible = true
//     }
//   }
 
//   return disponible;

// }





darCantidadDePalcosDisponiblesEtapas(localidad:Localidad){
  var contador =localidad.maximoVender;
  for(var i =0; i < localidad.palcos.length; i=i+1){
    if(localidad.palcos[i].vendido==true || localidad.palcos[i].proceso==true|| localidad.palcos[i].reservado==true){

      contador = contador-1;
    }
  }
  return contador;
}


}
