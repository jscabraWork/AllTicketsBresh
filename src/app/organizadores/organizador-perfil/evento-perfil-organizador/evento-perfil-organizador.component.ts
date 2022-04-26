import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../../eventos/evento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { kill } from 'process';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';
import { OrganizadorDataService } from 'src/app/service/data/organizador-data.service';
import { Boleta } from 'src/app/eventos/boleta.model';



@Component({
  selector: 'app-evento-perfil-organizador',
  templateUrl: './evento-perfil-organizador.component.html',
  styleUrls: ['./evento-perfil-organizador.component.css']
})
export class EventoPerfilOrganizadorComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: OrganizadorDataService, public autenticador: HardcodedAutheticationService, private eventoService:EventoDataService ) { }

  evento:Evento
  
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
  boletas:[]
  comisionEpayco:number

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
    this.comisionEpayco =0
    this.impuestoPayU=0
  
    this.evento = new Evento();
    this.evento.adicionales =[];
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.darEvento(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
           
          this.eventoService.getRetenciones(this.evento.id).subscribe(
            (response)=>{
              for(var j=0; j< this.localidades.length; j++){


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


             for(let j=0;j< this.boletas.length;j++){
               let array = this.boletas[j] as [];
              for(var i =0; i< array.length;i=i+1)
              {
                let boleta = array[i] as Boleta;
                if(  boleta.vendida==true){
                    this.dineroRecaudado = this.dineroRecaudado + boleta.precio;
                    this.dineroIva = this.dineroIva + boleta.servicioIva;
                    this.dineroServicio = this.dineroServicio + boleta.servicio;
                    this.personas = this.personas + 1;
                    if(boleta.utilizada==true){
                      this.personasAdentro = this.personasAdentro + 1;
                    }
                  
                }
              }
             }
              this.manejoRetenciones(response)
              let dineroTotal = (this.dineroRecaudado+this.dineroIva+this.dineroServicio);
             
              this.impuestoPayU = (this.comisionPayU*0.19)
           

              this.servicio = this.dineroServicio - this.comisionPayU - this.impuestoPayU - this.comisionEpayco ;

              this.dineroServicioDespuesDeComisiones =this.servicio - this.retefuenteAT - this.reteIcaAT
              this.dineroEntregar = this.dineroRecaudado-this.retefuenteOrganizador-this.reteIcaOrganizador

              this.ivaCuenta = this.dineroIva - this.reteIva
            }
          )
          }
        )
      });
     

   
  }

  manejoRetenciones(response){
    this.reteIcaAT = +response.reteicaAT as number
    this.reteIcaOrganizador = +response.reteicaOrganiador as number
    this.retefuenteAT = +response.retefuenteAT as number
    this.retefuenteOrganizador = +response.retefuenteOrganizador as number
    this.reteIva = +response.reteIva as number
    this.cantidadTransacciones = response.cantidadTransacciones

    this.comisionPayU = response.comisionPayu
    this.comisionEpayco = response.comisionEpayco
    console.log(response.comisionPayu);
    console.log(response.comisionEpayco);    
  }
  handleGetSuccesfull(response){
    this.evento=response.evento;
    this.localidades = response.localidades;
    this.boletas = response.boletas;
    console.log(this.boletas)

  }




  numeroBoletasPorVender(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if(  boleta[i].vendida==false && boleta[i].reservado==false && boleta[i].disponible==true &&boleta[i].reserva==false){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }
  numeroBoletasVendidas(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if(  boleta[i].vendida==true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }
  numeroBoletasReservadas(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if(  boleta[i].reserva==true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }
  numeroBoletasEnProceso(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if(  boleta[i].reservado==true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }


  numeroBoletasUtilizadas(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if(boleta[i].utilizada== true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }

  numeroBoletasTotales(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if( boleta[i].disponible== true){
        contador = contador+1;
      }
    }
   
    return contador;
  
  }

  dineroVendido(boleta:Boleta[]){

    var contador =0;
    for(var i =0; i< boleta.length;i++)
  
    {
      if( boleta[i].vendida==true){
        contador =contador+ boleta[i].precio;
        
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
