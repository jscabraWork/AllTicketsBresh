import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-evento-perfil-organizador',
  templateUrl: './evento-perfil-organizador.component.html',
  styleUrls: ['./evento-perfil-organizador.component.css']
})
export class EventoPerfilOrganizadorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:EventoDataService) { }

  evento:Evento
  boletas:[]
  miId:string
  dineroRecaudado:number=0
  ngOnInit( ): void {
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
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);

    for(var i =0; i< this.evento.localidades.length;i++)

    {
      for(var j=0;j < this.evento.localidades[i].boletas.length;j++)
      {
        if(  this.evento.localidades[i].boletas[j].vendida==true){
          this.dineroRecaudado =this.dineroRecaudado+ this.evento.localidades[i].precio;
      }
     }
    }


      
      
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


  numeroBoletasUtilizadas(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].utilizada== true){
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
      }
    }
   
    return contador;
  
  }
}
