import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { kill } from 'process';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';



@Component({
  selector: 'app-evento-perfil-organizador',
  templateUrl: './evento-perfil-organizador.component.html',
  styleUrls: ['./evento-perfil-organizador.component.css']
})
export class EventoPerfilOrganizadorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:EventoDataService, private servicioLocalidad: LocalidadesDataService, public autenticador: HardcodedAutheticationService ) { }

  evento:Evento
  boletas:[]
  miId:string
  dineroRecaudado:number
  localidades:Localidad[]=[]
  dineroServicio:number
  dineroIva:number
  personas:number
  personasAdentro:number
  
  reteIcaOrganizador:number
  retefuenteOrganizador:number

  reteIcaAT:number
  retefuenteAT:number
  reteIva:number
  cantidadTransacciones:number
  comisionPayU:number

  dineroEntregar:number
  dineroServicioDespuesDeComisiones:number
  ivaCuenta:number
  servicio:number
  impuestoPayU:number
  ngOnInit( ): void {
    this.dineroRecaudado =0
    this.dineroServicio=0
    this.dineroIva=0
    this.personas=0
    this.personasAdentro=0
    this.servicio=0
    this.retefuenteAT=0
    this.retefuenteOrganizador=0
    this.reteIcaAT=0
    this.reteIcaOrganizador=0
    this.reteIva=0
    this.cantidadTransacciones=0
    this.comisionPayU =0
    this.dineroEntregar=0
    this.dineroServicioDespuesDeComisiones=0
    this.ivaCuenta=0
    this.impuestoPayU=0
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
        this.servicioLocalidad.getAllLocalidadesDeEvento(this.miId).subscribe(
          response=>{
            this.localidades = response;          
          this.service.getRetenciones(this.evento.id).subscribe(
            (response)=>{
              for(var j=0; j< this.localidades.length; j++){


                for(var i =0; i< this.localidades[j].boletas.length;i=i+1)
    
                {
                  if(  this.localidades[j].boletas[i].vendida==true){
                    this.dineroRecaudado = this.dineroRecaudado + this.localidades[j].boletas[i].precio;
                    this.dineroIva = this.dineroIva + this.localidades[j].boletas[i].servicioIva;
                    this.dineroServicio = this.dineroServicio + this.localidades[j].boletas[i].servicio;
                    this.personas = this.personas + 1;
                    if(this.localidades[j].boletas[i].utilizada==true){
                      this.personasAdentro = this.personasAdentro + 1;
                    }
                    
                  }
                }
    
    
                for (var k =0; k< this.localidades[j].palcos.length;k=1+k){
                  if(this.localidades[j].palcos[k].vendido ==true){
                    
                    this.dineroRecaudado = this.dineroRecaudado + ((this.localidades[j].palcos[k].precioParcialPagado)/(this.localidades[j].palcos[k].servicio+this.localidades[j].palcos[k].servicioIva+this.localidades[j].palcos[k].precio))*this.localidades[j].palcos[k].precio
                    this.dineroIva = this.dineroIva + ((this.localidades[j].palcos[k].precioParcialPagado)/(this.localidades[j].palcos[k].servicio+this.localidades[j].palcos[k].servicioIva+this.localidades[j].palcos[k].precio))* this.localidades[j].palcos[k].servicioIva;
                    this.dineroServicio = this.dineroServicio + ((this.localidades[j].palcos[k].precioParcialPagado)/(this.localidades[j].palcos[k].servicio+this.localidades[j].palcos[k].servicioIva+this.localidades[j].palcos[k].precio))*this.localidades[j].palcos[k].servicio;
                    this.personas = this.personas + this.localidades[j].palcos[k].personasMaximas;
                    this.personasAdentro = this.personasAdentro + this.localidades[j].palcos[k].personasAdentro;
                    
                  }
                  
                 
                }
              }
              this.manejoRetenciones(response)
              let dineroTotal = (this.dineroRecaudado+this.dineroIva+this.dineroServicio);
              this.comisionPayU = (dineroTotal*0.0265) + 600*this.cantidadTransacciones;
              this.impuestoPayU = (this.comisionPayU*0.19)
              

              this.servicio = this.dineroServicio - this.comisionPayU - this.impuestoPayU;
              this.dineroServicioDespuesDeComisiones =this.servicio - this.retefuenteAT - this.reteIcaAT
              this.dineroEntregar = this.dineroRecaudado-this.retefuenteOrganizador-this.reteIcaOrganizador
              this.ivaCuenta = this.dineroIva - this.reteIva
            }
          )
          }
        )
      });
     
  })
   
  }

  manejoRetenciones(response){
    this.reteIcaAT = +response.reteicaAT as number
    this.reteIcaOrganizador = +response.reteicaOrganiador as number
    this.retefuenteAT = +response.retefuenteAT as number
    this.retefuenteOrganizador = +response.retefuenteOrganizador as number
    this.reteIva = +response.reteIva as number
    this.cantidadTransacciones = response.cantidadTransacciones

    
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }

  manejarRespuesta(response){
    this.boletas= response
  }


  numeroBoletasPorVender(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].vendida==false && localidad.boletas[i].reservado==false && localidad.boletas[i].disponible==true &&localidad.boletas[i].reserva==false){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }
  numeroBoletasVendidas(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].vendida==true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }
  numeroBoletasReservadas(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].reserva==true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }
  numeroBoletasEnProceso(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].reservado==true){
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
  numeroBoletasTotales(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)
  
    {
      if(  localidad.boletas[i].disponible== true){
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
        contador =contador+ localidad.boletas[i].precio;
        
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

  dineroARecaudarPalcos(localidad:Localidad){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i=1+i){
     
      if(localidad.palcos[i].disponible && localidad.palcos[i].vendido ){
        contador = contador+ localidad.palcos[i].precio
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
