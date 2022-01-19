import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';

@Component({
  selector: 'app-evento-ministerio',
  templateUrl: './evento-ministerio.component.html',
  styleUrls: ['./evento-ministerio.component.css']
})
export class EventoMinisterioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:EventoDataService) { }
  evento:Evento
  boletas:[]
  miId:string
  dineroRecaudado:number=0
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
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);

      });
     
  })
  }

  handleGetSuccesfull(response){
    this.evento=response;
  }

  manejarRespuesta(response){
    this.boletas= response
  }


  numeroBoletasPorVender(localidad:Localidad, vendida:boolean){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].vendida==vendida){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }




  dineroVendido(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].vendida==true){
        contador =contador+ localidad.precio;
        this.dineroRecaudado = this.dineroRecaudado + localidad.precio;
      }
    }
   
    return contador;
  
  }

  palcosVendidos(localidad:Localidad, vendido:boolean){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i++){
      if(localidad.palcos[i].vendido ==vendido){
        contador = contador +1;
      }
    }
    return contador;
  }

  dineroRecaudadoPalcos(localidad:Localidad){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i++){
      if(localidad.palcos[i].vendido ==true){
        contador = contador +localidad.precio;
        this.dineroRecaudado = this.dineroRecaudado + localidad.precio;
      }
    }
    return contador;
  }


 

}
