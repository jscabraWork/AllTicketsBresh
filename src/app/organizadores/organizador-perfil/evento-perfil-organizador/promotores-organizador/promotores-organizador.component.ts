import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

@Component({
  selector: 'app-promotores-organizador',
  templateUrl: './promotores-organizador.component.html',
  styleUrls: ['./promotores-organizador.component.css']
})
export class PromotoresOrganizadorComponent implements OnInit {

  evento:Evento
  boletas:[]
  miId:string
  reservas:boolean[]
  constructor(private route: ActivatedRoute, private service:PromotorDataService,private serviceEvento:EventoDataService) { }
  promotores:Promotor[]

  ngOnInit(): void {
    this.reservas =[]
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
      ciudadNombre:null,
      localidadesProducto:[],
      visibleAP:null,
      terminado:null
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.service.getAllPromotoresByEventoIdParaOrganizador(this.miId).subscribe(response=>{
        this.manejar(response)
        this.serviceEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
          
          
        });
      })
    
     
  })
   
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }
  manejar(response){
    this.promotores = response.promotores
    this.reservas = response.reservas
    console.log(this.reservas)
  }
  darPalcosPromotorEvento(promotor:Promotor){
    let palcos:Palco[]=promotor.palcosVendidos;
    let boletas:Boleta[] =promotor.boletasVendidas;
    let retorno: boolean = false;
    console.log(palcos)
    for(let i=0;i<palcos.length &&!retorno;i++){
      if(palcos[i].nombreEvento==this.evento.nombre){
        retorno=true
      }
    }
    for(let j=0;j< boletas.length&&!retorno;j++){
      if(boletas[j].nombreEvento==this.evento.nombre){
        retorno=true
      }
    }
    return retorno;
  }


  
}
