import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { OrganizadorDataService } from 'src/app/service/data/organizador-data.service';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';

@Component({
  selector: 'app-evento-ministerio',
  templateUrl: './evento-ministerio.component.html',
  styleUrls: ['./evento-ministerio.component.css']
})
export class EventoMinisterioComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: OrganizadorDataService, public autenticador: HardcodedAutheticationService, private eventoService:EventoDataService ) { }

  evento:Evento
  puntosF:boolean
  miId:string
  dineroRecaudado:number
  localidades:Localidad[]=[]
  boletas:Boleta[][]


  ngOnInit( ): void {
    this.puntosF = false;
    this.dineroRecaudado =0
   
  
    this.evento = new Evento();
    this.evento.adicionales =[];
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.darEvento(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
           
   
       

              for(var j=0; j< this.localidades.length; j++){


                for (var k =0; k< this.localidades[j].palcos.length;k=1+k){
                  if(this.localidades[j].palcos[k].vendido ==true){
                    
                    this.dineroRecaudado = this.dineroRecaudado + ((this.localidades[j].palcos[k].precioParcialPagado)/(this.localidades[j].palcos[k].servicio+this.localidades[j].palcos[k].servicioIva+this.localidades[j].palcos[k].precio))*this.localidades[j].palcos[k].precio
                 
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
                    
                  
                }
              }
             }
              
        
             
         
            }

          
        )
      });
     

   
  }


  handleGetSuccesfull(response){
    this.evento=response.evento;
    this.localidades = response.localidades;
    this.boletas = response.boletas;
    this.puntosF = response.puntosF

    

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
   if(boleta[0].localidadIdNumero==4822){
     contador = contador -100
   }
   if(boleta[0].localidadIdNumero==4823){
    contador = contador -200
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
    if(boleta[0].localidadIdNumero==4822){
      contador = contador -(100*boleta[0].precio)
    }
    if(boleta[0].localidadIdNumero==4823){
     contador = contador - (200*boleta[0].precio)
   }
    return contador;
  
  }

  palcosVendidos(localidad:Localidad, vendido:boolean){
    var contador =0;
    for (var i =0; i< localidad.palcos.length;i++){
      if(localidad.palcos[i].vendido ==vendido && localidad.palcos[i].proceso ==false && localidad.palcos[i].reservado ==false && localidad.palcos[i].disponible ==true ){
        contador = contador+ localidad.palcos[i].personasMaximas;
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
