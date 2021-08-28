import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { kill } from 'process';



@Component({
  selector: 'app-evento-perfil-organizador',
  templateUrl: './evento-perfil-organizador.component.html',
  styleUrls: ['./evento-perfil-organizador.component.css']
})
export class EventoPerfilOrganizadorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:EventoDataService, private servicioLocalidad: LocalidadesDataService) { }

  evento:Evento
  boletas:[]
  miId:string
  dineroRecaudado:number
  localidades:Localidad[]=[]
  ngOnInit( ): void {
    this.dineroRecaudado =0
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
      oculto:null
    }
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        this.servicioLocalidad.getAllLocalidadesDeEvento(this.miId).subscribe(
          response=>{
            this.localidades = response;
            for(var j=0; j< this.localidades.length; j++){
            for(var i =0; i< this.localidades[j].boletas.length;i++)

            {
              if(  this.localidades[j].boletas[i].vendida==true){
                this.dineroRecaudado = this.dineroRecaudado + this.localidades[j].precio;
              }
            }
            for (var k =0; k< this.localidades[j].palcos.length;k=1+k){
              if(this.localidades[j].palcos[k].vendido ==true){
                
                this.dineroRecaudado = this.dineroRecaudado + ((this.localidades[j].palcos[k].precioParcialPagado)/(this.localidades[j].palcos[k].servicio+this.localidades[j].palcos[k].servicioIva+this.localidades[j].palcos[k].precio))*this.localidades[j].palcos[k].precio
              }
            }

          }
    
          }
        )
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

  palcosVendidos(localidad:Localidad, vendido:boolean){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i++){
      if(localidad.palcos[i].vendido ==vendido && localidad.palcos[i].proceso ==false && localidad.palcos[i].reservado ==false && localidad.palcos[i].disponible ==true ){
        contador = contador +1;
      }
    }
    return contador;
  }

  palcosCortesias(localidad:Localidad){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i++){
      if(localidad.palcos[i].reservado ==true){
        contador = contador +1;
      }
    }
    return contador;
  }

  palcosEnProceso(localidad:Localidad){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i++){
      if(localidad.palcos[i].proceso ==true){
        contador = contador +1;
      }
    }
    return contador;
  }

  dineroRecaudadoPalcos(localidad:Localidad){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i=1+i){
      if(localidad.palcos[i].vendido ==true){
        contador = contador +((localidad.palcos[i].precioParcialPagado)/(localidad.palcos[i].servicio+localidad.palcos[i].servicioIva+localidad.palcos[i].precio))*localidad.palcos[i].precio
        
      }
    }
    return contador;
  }


  personasEnPalco(localidad:Localidad){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i=1+i){
      
        contador = contador +localidad.palcos[i].personasAdentro;
        
      
    }
    return contador;
  }
}
