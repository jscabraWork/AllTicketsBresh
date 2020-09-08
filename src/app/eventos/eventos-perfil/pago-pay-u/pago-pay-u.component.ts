

import { Cliente } from './../../../usuario/cliente.model';
import { UsuariosDataService } from './../../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../../service/hardcoded-authetication.service';
import { Localidad } from './../../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { Boleta } from './../../boleta.model';
import { EventoDataService } from './../../../service/data/evento-data.service';
import { Evento } from './../../evento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5'

@Component({
  selector: 'app-pago-pay-u',
  templateUrl: './pago-pay-u.component.html',
  styleUrls: ['./pago-pay-u.component.css']
})
export class PagoPayUComponent implements OnInit {
miId;
valorTotal:number=0
usuarioA
usuarioEntidad: Cliente
evento:Evento;
boletas:Boleta[]=[]
boletasNumero:Boleta[]=[]
usuarioBoolean:boolean=true;
merchantId:number
accountId:number
referenceCode:string="PAGO: "
signature:string
ApiKey:string

boletaBoolean:boolean=false
  constructor(private route: ActivatedRoute, private service:EventoDataService, private servicioBoletas: BoletasDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService) { }

  ngOnInit(): void {

    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"// 4Vj8eK4rloUd272L48hsrarnUA
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
      palcos:[]
    }

    this.usuarioEntidad= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        direccion:"",
        publicidad:null,
      boletas:[],
      palcos:[]
        }
 

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        if(this.autenticador.getUsuario()!=null ){
        
          this.usuarioA= this.autenticador.getUsuario(); 
         this.referenceCode = this.referenceCode + this.usuarioA+': ';
          
          
          this.dataServicio.getCliente(this.usuarioA).subscribe(response => {this.usuarioEntidad=response
            this.usuarioBoolean=false;
            
          })

        }


      
      });
     
  })
  }



  handleGetSuccesfull(response){
    this.evento=response;
  }

  agregarAlCarrito(pBoleta){
    this.boletas.push(pBoleta);
    

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


  reservarBoletas(localidad:Localidad){


    var lista:Boleta[]=[];

    if(this.boletas.length<6 && !this.usuarioBoolean)
    {
    this.servicioBoletas.getBoletasVendidasYReservado(this.evento.id, localidad.id, false, false).subscribe(response=>{
      lista= response
      if(lista.length>0){ 
        this.boletas.push(lista[0])
      
        this.referenceCode = this.referenceCode +lista[0].localidadNombre+":"+lista[0].id+"/";
      
        this.servicioBoletas.reservarBoleta(this.evento.id, localidad.id, lista[0]).subscribe(data=>  {data;
          this.valorTotal=this.valorTotal+ localidad.precio  +localidad.precio*localidad.servicio*0.01 +(localidad.precio+localidad.precio*localidad.servicio*0.01)*0.0279+800;
          var md5 = new Md5()


          this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorTotal+"~COP").end().toString();
        
      
      })}
      else {
        alert("No quedan boletas en esta localidad, prueba más tarde")
      }
      
    })
  }
  
  else if(this.usuarioBoolean){
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }

  else if(this.usuarioEntidad.boletas.length+ this.boletas.length==6 ){
    alert("Solo puedes comprar 6 boletas máximo por Evento")
  }
    
  var lista:Boleta[]=[];
  }
comprarBoletas(){


  if( !this.usuarioBoolean && this.boletas.length>0){
   
    var i =0

    while(i < this.boletas.length){


  this.servicioBoletas.comprarBoleta(this.miId, this.boletas[i].localidadIdNumero ,this.boletas[i],this.usuarioEntidad.numeroDocumento).subscribe(data=> {data })
    i=i+1;

   
  }
  }
  else if(this.usuarioBoolean){
    
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
    
  }
}
 


}
