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
import { MatDialog } from '@angular/material/dialog';
import { CarritoDeComprasComponent } from '../carrito-de-compras/carrito-de-compras.component';

@Component({
  selector: 'app-regalar-boleta',
  templateUrl: './regalar-boleta.component.html',
  styleUrls: ['./regalar-boleta.component.css']
})
export class RegalarBoletaComponent implements OnInit {

miId;
IVA
valorTotal:number
evento:Evento;
boleta:Boleta
localidadCompradas:Localidad
merchantId:number
accountId:number
referenceCode:string
signature:string
ApiKey:string
valorLocalidadAgregada:number
contadorBoletas 
etapa:Etapa
boletaBoolean:boolean

asistente:Asistente
boletaN:number
localidad:Localidad
idLocalidad
url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
cargando = false
  constructor(private route: ActivatedRoute,public dialog: MatDialog, private service:EventoDataService, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private autenticador: HardcodedAutheticationService, private router: Router) { }

  ngOnInit(): void {

    this.valorTotal=0

    this.valorLocalidadAgregada=0
    this.contadorBoletas=0
    this.boletaN=0
    this.boletaBoolean=false
    this.referenceCode="TICKETREGALO: "
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
    this.localidad ={
      id:null,
      nombre: "",
      precio:null,
      boletas:[],
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[]
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
          this.idLocalidad =params.get('idLocalidad');
          this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response)
            this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
              var i =0;
              while(i < this.etapa.localidades.length){
                if(this.etapa.localidades[i].id ==this.idLocalidad){
                  this.localidad=this.etapa.localidades[i]
                  i= this.etapa.localidades.length;
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
          this.servicioBoletas.rechazarReservaBoleta( lista).subscribe(response=>response);
      
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


  var boleta:Boleta[];
 

     
if(this.localidadCompradas){
      this.cargando=true
        this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.localidadCompradas.id, 1).subscribe(response=>{
          boleta= response
          console.log(boleta)
          if(boleta!=null){ 
            this.boleta = boleta[0]
            this.cargando = false;
           
        
        this.referenceCode = "TICKETREGALO: /"+this.asistente.correo+boleta[0].localidadNombre+":"+boleta[0].id+"/";
      
        
          this.valorTotal= this.boleta.precio  + this.boleta.servicio + this.boleta.servicio*IVA
          this.boletaN=0
          var md5 = new Md5()
            

          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
          this.AbrirCarrito()
          this.servicioBoletas.rechazarReservaBoleta( boleta).subscribe(response=>{response
          
          })   
            
      }

          else {
            alert("No quedan boletas en esta localidad, prueba más tarde")
          }
          
        })
      
      this.localidadCompradas =null;
      this.valorLocalidadAgregada =0;
    }
    else{
      alert("Agrega una boleta")
    }
  
}



 

    

AbrirCarrito(): void {
  const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
    width: '100%',
    height:'85%',
    
    data: { 
      valorTotal: this.valorTotal,
            boleta: this.boleta,
            evento: this.evento,
            asistente: this.asistente,
            signature: this.signature,
            referenceCode: this.referenceCode,
            
           
    }       
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
  var boletas: Boleta[] =[];
  boletas.push(this.boleta)
      this.servicioBoletas.rechazarReservaBoletaInstantaneamente(boletas).subscribe(response=> response)

    
    
    this.dialog.closeAll();
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
    this.localidadCompradas ={
      boletas:[],
      boletasPatrocinio:[],
      id:null,
      nombre:null,
      nombreEtapa:null,
      palcos:[],
      precio:null,
      servicio:null,

    }
    this.valorLocalidadAgregada =0
    this.valorTotal=0
    this.referenceCode="TICKET: /"
    this.signature = null



   
  });
}
}
