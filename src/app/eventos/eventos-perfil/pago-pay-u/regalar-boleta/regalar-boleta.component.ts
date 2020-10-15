import { Md5 } from 'ts-md5/dist/md5';
import { Asistente } from './../../../../administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';
import { IVA } from './../../../../app.constants';
import { EventoDataService } from './../../../../service/data/evento-data.service';
import { EtapasDataService } from './../../../../service/data/etapas-data.service';
import { BoletasDataService } from './../../../../service/data/boletas-data.service';
import { HardcodedAutheticationService } from './../../../../service/hardcoded-authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Localidad } from './../../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Boleta } from './../../../boleta.model';
import { Evento } from './../../../evento.model';
import { Component, OnInit } from '@angular/core';
import { Etapa } from '../../etapa.model';

@Component({
  selector: 'app-regalar-boleta',
  templateUrl: './regalar-boleta.component.html',
  styleUrls: ['./regalar-boleta.component.css']
})
export class RegalarBoletaComponent implements OnInit {

miId;
IVA
valorTotal:number=0
evento:Evento;
boleta:Boleta
localidadCompradas:Localidad
merchantId:number
accountId:number
referenceCode:string="TICKETREGALO: "
signature:string
ApiKey:string
valorLocalidadAgregada:number =0
contadorBoletas =0
etapa:Etapa
boletaBoolean:boolean=false
localidadesBoletas:Localidad[]=[];
asistente:Asistente
boletaN:number=0
url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
cargando = false
  constructor(private route: ActivatedRoute, private service:EventoDataService, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private autenticador: HardcodedAutheticationService, private router: Router) { }

  ngOnInit(): void {
    this.IVA = IVA
    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"// 4Vj8eK4rloUd272L48hsrarnUA

    this.boleta={
      id:null,
      imagenQr:null,
      localidadIdNumero:null,
      localidadNombre:null,
      nombreEvento:null,
      precio:null,
      reservado:null,
      seccionSilla:null,
      servicio:null,
      utilizada:null,
      vendida:null,
    }
    this.asistente={
      boletas:[],
      celular:null,
      correo:null,
      nombre:null,
      numeroDocumento:null
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
      organizadorid:null,
      imagen:"",
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      
      horaInicio:null,
      horaFin:null,
      etapas:[],
      mapaImagen:null
    }

        this.etapa={
          evento:null,
          id:null,
          localidades:[],
          nombre:"PRUEBA",
          visible:null    
        }


        this.route.paramMap.subscribe( params =>{
          this.miId =params.get('id');
         
          this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response)
            this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
              var i =0;
              while(i < this.etapa.localidades.length){
                if(this.etapa.localidades[i].boletas.length>0){
                  this.localidadesBoletas.push(this.etapa.localidades[i])
                }  
                i=i+1;
              }
           }) 
          });
          
      })
  }

  
  manejar(response){
    this.etapa =response;
  }
  handleGetSuccesfull(response){
    this.evento=response;
  }
  

  numeroBoletasPorVenderYNoReservadas(localidad:Localidad){

    var contador =0;
    for(var i =0; i< localidad.boletas.length;i++)

    {
      if( localidad.boletas[i].reservado==false && localidad.boletas[i].vendida==false){
        contador = contador+1;
      }
    }
   
    return contador;
 
  }
  
  reservarBoletasSillasExactas(localidad:Localidad){


    var lista:Boleta[]=[];

   
    this.servicioBoletas.getBoletasVendidasYReservado(this.evento.id, localidad.id, false, false).subscribe(response=>{
      lista= response
      if(lista.length>0){ 
        this.boleta = lista[0]
      
        this.referenceCode = "TICKET REGALO: /"+this.asistente.correo+lista[0].localidadNombre+":"+lista[0].id+"/";
      
        this.servicioBoletas.reservarBoletaIndividual(this.evento.id, localidad.id, lista[0]).subscribe(data=>  {data;
          this.valorTotal=this.valorTotal+ localidad.precio  + localidad.servicio + localidad.servicio*IVA
          var md5 = new Md5()


          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
        
      
      })}
      else {
        alert("No quedan boletas en esta localidad, prueba más tarde")
      }
      
    })
  
  }


  

  reservarBoletasPorLocalidad(localidad:Localidad){


    var lista:Boleta[]=[];

      this.boletaN=1
      this.localidadCompradas= localidad;
      this.valorLocalidadAgregada =  localidad.precio  +localidad.servicio + localidad.servicio*IVA;

   
  
 
  }



  reservarBoletasLocalidad(){


  var boleta:Boleta;
 

     
if(!this.cargando){
      this.cargando=true
        this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.localidadCompradas.id).subscribe(response=>{
          boleta= response
          console.log(boleta)
          if(boleta!=null){ 
            this.boleta = boleta
            this.cargando = false;
           
        
        this.referenceCode = "TICKETREGALO: /"+this.asistente.correo+boleta.localidadNombre+":"+boleta.id+"/";
      
        
          this.valorTotal= this.boleta.precio  + this.boleta.servicio + this.boleta.servicio*IVA
          this.boletaN=0
          var md5 = new Md5()
            

          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
            
        
      }

          else {
            alert("No quedan boletas en esta localidad, prueba más tarde")
          }
          
        })
      
      this.localidadCompradas =null;
      this.valorLocalidadAgregada =0;
    }
  
}

    quitaBoletaLocalidad(localidad:Localidad){
    
    }

    comprarBoletas(){
      this.servicioBoletas.comprarBoletaParaAsistente(this.evento.id, this.boleta.localidadIdNumero,this.boleta.id, this.asistente).subscribe(response=>{response
        this.boleta={
          id:null,
          imagenQr:null,
          localidadIdNumero:null,
          localidadNombre:null,
          nombreEvento:null,
          precio:null,
          reservado:null,
          seccionSilla:null,
          servicio:null,
          utilizada:null,
          vendida:null,
        }
      
      })



    }

}
