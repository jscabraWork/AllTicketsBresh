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
  selector: 'app-palcos-promtor-organizador',
  templateUrl: './palcos-promtor-organizador.component.html',
  styleUrls: ['./palcos-promtor-organizador.component.css']
})
export class PalcosPromtorOrganizadorComponent implements OnInit {

  evento:Evento
  boletas:Boleta[]=[]
  miId:string
  idPromotor
  constructor(private route: ActivatedRoute, private service:PromotorDataService,private serviceEvento:EventoDataService, private servicioPalco:PalcosDataService) { }
  promotor:Promotor
  palcos:Palco[]=[]
  boleta:Boleta[] = []
  ngOnInit(): void {

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
      this.idPromotor = params.get('idPromotor')
     this.service.getPromotorById(this.idPromotor).subscribe(response =>{
       this.promotor = response
       this.serviceEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        let boletas: Boleta[] = this.promotor.boletasVendidas
        for(let j=0; boletas.length;j++){
          if(boletas[j].nombreEvento==this.evento.nombre){
            this.boletas.push(boletas[j])
          }
        }
        this.servicioPalco.getAllPalcosPromotorEvento(this.idPromotor,this.evento.nombre).subscribe(response => {
          this.palcos = response;
        })
       });
     })
   
      
  })
   
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }
  darPrecioPagar(palco:Palco) {

    return ((palco.precioParcialPagado)/(palco.servicio+palco.servicioIva+palco.precio))*palco.precio
  }
}
