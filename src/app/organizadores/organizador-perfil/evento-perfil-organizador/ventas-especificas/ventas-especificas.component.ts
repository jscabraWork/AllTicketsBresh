import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';

@Component({
  selector: 'app-ventas-especificas',
  templateUrl: './ventas-especificas.component.html',
  styleUrls: ['./ventas-especificas.component.css']
})
export class VentasEspecificasComponent implements OnInit {


  palcos:Palco[]=[]
  clientes:Cliente[] = []
  miId
  idLocalidad
  evento:Evento
  constructor(private servicioPalco:PalcosDataService,private route: ActivatedRoute,private serviceEvento:EventoDataService) { }

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
      ciudadNombre:null
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.idLocalidad =params.get('idLocalidad');
      this.servicioPalco.getAllPalcosVendidoDeLocalidad(this.idLocalidad).subscribe(response=>{
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
    this.clientes = response.clientes

    this.palcos = response.palcos

  }

  dineroRecaudadoPalcos(palco:Palco){
    var contador =0;
  
      if(palco.vendido ==true){
        contador = contador +((palco.precioParcialPagado)/(palco.servicio+palco.servicioIva+palco.precio))*palco.precio
        
      }
   
    return contador;
  }
}
