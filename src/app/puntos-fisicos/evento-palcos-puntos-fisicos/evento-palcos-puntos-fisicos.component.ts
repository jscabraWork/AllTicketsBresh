import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { IVA } from 'src/app/app.constants';
import { Evento } from 'src/app/eventos/evento.model';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { EtapasDataService } from 'src/app/service/data/etapas-data.service';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PuntosFisicosDataService } from 'src/app/service/data/puntos-fisicos-data.service';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';
import { PuntoFisico } from './../puntoFisico.model';
@Component({
  selector: 'app-evento-palcos-puntos-fisicos',
  templateUrl: './evento-palcos-puntos-fisicos.component.html',
  styleUrls: ['./evento-palcos-puntos-fisicos.component.css']
})
export class EventoPalcosPuntosFisicosComponent implements OnInit {
  IVA
  puntoFisico:PuntoFisico
  evento:Evento
  user
  miId
  etapa:Etapa
  palcos:Palco[]=[]
boletaBoolean:boolean=false
localidadesPalcos:Localidad[]=[]
palco:Palco

valorLocalidadAgregada:number =0
valorTotal:number=0
localidad:Localidad
valorBoletas=0
  constructor(private servicio: PuntosFisicosDataService , private etapaServicio:EtapasDataService,private palcoServicio:PalcosDataService, private route: ActivatedRoute,private autenticador: HardcodedAutheticationService, private eventosServicio:EventoDataService) { }

  ngOnInit(): void {
    this.IVA=IVA
    this.etapa={
      evento:null,
      id:null,
      localidades:[],
      nombre:"",
      visible:null    
    }
    
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
      organizadorid:null,
      imagen:"",
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      
      horaInicio:null,
      horaFin:null,
      etapas:[]
    }
    this.palco={
      id:null,
      nombre:null,
      nombreEvento:null,
      personasAdentro:null,
      personasMaximas:null,
      precio:null,
      precioParcialPagado:null,
      reservado:null,
      servicio:null,
      vendido:null,
      numeroDentroDeEvento:null
    }
    this.user=this.autenticador.getPuntoFisico();
    this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');})
      this.eventosServicio.getEventoId(this.miId).subscribe(response=> this.evento =response);
      this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
        var i =0;
        while(i < this.etapa.localidades.length){
          
          if(this.etapa.localidades[i].palcos.length>0){
            this.localidadesPalcos.push(this.etapa.localidades[i])
          }
          
          i=i+1;
        }
      
      
      })
    
    });
  }
  manejar(response){
    this.etapa=response
  }

  
  agregarALaLista(localidad:Localidad){

    this.localidad =localidad;
    this.valorLocalidadAgregada = localidad.precio +localidad.servicio+ localidad.servicio*IVA;
    this.valorBoletas = 1;
   }
 
 
   agregarAlCarrito(){
 
     if(this.localidad==null){
       alert("Agregar un Palco para continuar")
     }
     else{
       this.palcoServicio.reservarPalco(this.localidad.id).subscribe(response=>{ this.palco =response;
       this.valorTotal = this.palco.precio +this.palco.servicio+this.palco.servicio*IVA;
       })
     }
 
 
 }
 
 
 pagar(){
   
     if(this.palco.id!=null){
      
     }
     else{
       alert("Agrega algún Palco al Carrito")
     }
 
 }
 
 
 darCantidadDePalcos(localidad:Localidad){
   var contador =0;
   for(var i =0; i < localidad.palcos.length; i=i+1){
     if(localidad.palcos[i].vendido==false &&localidad.palcos[i].reservado==false){
 
       contador = contador+1;
     }
   }
   return contador;
 }
   
 


}
