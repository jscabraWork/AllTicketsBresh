import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { PuntoFisico } from 'src/app/puntos-fisicos/puntoFisico.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PuntosFisicosDataService } from 'src/app/service/data/puntos-fisicos-data.service';

@Component({
  selector: 'app-detalle-punto-fisico',
  templateUrl: './detalle-punto-fisico.component.html',
  styleUrls: ['./detalle-punto-fisico.component.css']
})
export class DetallePuntoFisicoComponent implements OnInit {
  evento:Evento
  boletas:[]
  miId:string
  punto:PuntoFisico
  idPunto
  totalBoletas
  totalPalcos
  constructor(private route: ActivatedRoute, private service:PuntosFisicosDataService,private serviceEvento:EventoDataService) { }

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
      this.idPunto =params.get('punto');
      
      this.service.getPuntoPorId(this.idPunto).subscribe(response=>{
        this.punto =response
        this.totalBoletas = this.punto.boletasCanjeadas.length + this.punto.boletasVendidas.length
        this.totalPalcos = this.punto.palcosCanjeados.length + this.punto.palcosVendidos.length
        console.log(this.punto)
        this.serviceEvento.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
          
          
        });
      })
    
     
  })
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }

  dineroRecaudadoPalcos(palco:Palco){
    var contador =0;
  
      if(palco.vendido ==true){
        contador = contador +((palco.precioParcialPagado)/(palco.servicio+palco.servicioIva+palco.precio))*palco.precio
        
      }
   
    return contador;
  }

  darTotalTickets(){
    let contador =0;
    for(let i=0;i<this.punto.boletasCanjeadas.length;i++ ){
      if(this.punto.boletasCanjeadas[i].nombreEvento == this.evento.nombre){
        contador = contador +1
      }
    }
    for(let i=0;i<this.punto.boletasVendidas.length;i++ ){
      if(this.punto.boletasVendidas[i].nombreEvento == this.evento.nombre){
        contador = contador +1
      }
    }
    return contador;
  }

  
  darTotalPalcos(){
    let contador =0;
    for(let i=0;i<this.punto.palcosCanjeados.length;i++ ){
      if(this.punto.palcosCanjeados[i].nombreEvento == this.evento.nombre){
        contador = contador +1
      }
    }
    for(let i=0;i<this.punto.palcosVendidos.length;i++ ){
      if(this.punto.palcosVendidos[i].nombreEvento == this.evento.nombre){
        contador = contador +1
      }
    }
    return contador;
  }
}
