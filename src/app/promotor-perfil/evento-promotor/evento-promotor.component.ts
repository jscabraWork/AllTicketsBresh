import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { EtapasDataService } from 'src/app/service/data/etapas-data.service';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';
import { Promotor } from '../promotor.model';

@Component({
  selector: 'app-evento-promotor',
  templateUrl: './evento-promotor.component.html',
  styleUrls: ['./evento-promotor.component.css']
})
export class EventoPromotorComponent implements OnInit {

  miId:string
  evento:Evento;
  etapas:Etapa[]=[];
  user:string
  promotor:Promotor
  localidades:Localidad[] = [];
  constructor(private servicio: PromotorDataService ,
     private autenticador: HardcodedAutheticationService
    ,private route: ActivatedRoute,
     private dialog: MatDialog, 
     private service:EventoDataService,
       private etapaServicio:EtapasDataService) { }

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
    }

    this.user= this.autenticador.getPromotor()
    this.servicio.getPromotorByUsuario(this.user).subscribe( response=>{
   
      this.promotor = response

    },
    error=>{
      alert('Sucedio un error por favor intente más tarde')
    })


    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
    


        this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(response =>{this.manejar(response);
          
          for(let i=0; i< response.length; i++){
            
            this.localidades = this.localidades.concat(response[i].localidades)
                      
          }
          this.etapaServicio.getAllEtapasVisiblesPromotor(this.evento.id,true).subscribe(response=>{
          
          this.etapas= this.etapas.concat(response)
            console.log(this.etapas)

            for(let i=0; i< response.length; i++){
            
              this.localidades = this.localidades.concat(response[i].localidades)
                        
            }
          })

          })
        
      
      
      });
      
     
  })
  }

  handleGetSuccesfull(response){
    if(response.visible || response.oculto){
    this.evento=response;
  }
  }
  
  manejar(response){
    this.etapas =response;
  }
  
  
}