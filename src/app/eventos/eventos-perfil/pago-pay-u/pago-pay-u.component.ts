import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { LoginComponent } from './../../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { EtapasDataService } from './../../../service/data/etapas-data.service';


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
import { Etapa } from '../etapa.model';
import { IVA } from 'src/app/app.constants';
import { CuponDataService } from 'src/app/service/data/cupon-data.service';
import { MensajeComponent } from 'src/app/mensaje/mensaje.component';
import { MensajeLinkComponent } from 'src/app/mensaje-link/mensaje-link.component';



@Component({
  selector: 'app-pago-pay-u',
  templateUrl: './pago-pay-u.component.html',
  styleUrls: ['./pago-pay-u.component.css']
})
export class PagoPayUComponent implements OnInit {
miId;
valorTotal:number
usuarioA:string
usuarioEntidad: Cliente
evento:Evento;
boletas:Boleta[]=[]
localidadesCompradas:Localidad[]=[]
usuarioBoolean:boolean
referenceCode:string =""
signature:string

valorLocalidadAgregada:number 
contadorBoletas 
etapa:Etapa[]=[]
boletaBoolean:boolean

cargando:boolean=false
idLocalidad
idEtapa
localidad:Localidad
codigoVenta

  constructor(private route: ActivatedRoute,public dialog: MatDialog,private servicioCupon:CuponDataService, private service:EventoDataService, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService ) { }

  ngOnInit(): void {
    this.cargando=false;
    this.boletaBoolean=false
    this.valorTotal=0
    this.boletas=[]
    this.localidadesCompradas=[]
    this.valorLocalidadAgregada=0
    
    this.usuarioBoolean=true;
    this.referenceCode= ""



    
    this.evento = new Evento();
    this.localidad ={
      id:null,
      nombre: "",
      precio:null,
      
      servicio:null,
      nombreEtapa:null,
      boletasPatrocinio:[],
      palcos:[],
      servicioPorcentaje:null,
      efectivo:false,
      maximoVender:null,
      boletas:[],
      vaca:null
    }
    this.usuarioEntidad= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        
        publicidad:null,
      boletas:[],
      palcos:[],
      tipo:null,
      
        }


    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.codigoVenta = params.get('codigoVenta')
      this.idLocalidad =params.get('idLocalidad');
      this.contadorBoletas =0

      
     
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        
        if(this.evento.visibleAP){
   
          this.openDialogMensaje("Recuerda que desde YA puedes comprar los productos del evento con descuento en: ",this.evento.id)
        }
     
        this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(response =>{this.manejar(response);
          
          var i =0;

          while(i < this.etapa.length){
            for(var j=0;j< this.etapa[i].localidades.length;j=j+1)
            {
            if(this.etapa[i].localidades[j].id ==this.idLocalidad){
              this.localidad=this.etapa[i].localidades[j]
            
            }
          }
            i=i+1;
          }



        })
        if(this.autenticador.getUsuario()!=null ){
        
          this.usuarioA= this.autenticador.getUsuario(); 
         this.referenceCode = this.referenceCode +'TICKET: '+ this.usuarioA+'/';
          
          
          this.dataServicio.getCliente(this.usuarioA).subscribe(response => {this.usuarioEntidad=response
            this.usuarioBoolean=false;
            var j =0;
            while(j < this.usuarioEntidad.boletas.length){
              if(this.usuarioEntidad.boletas[j].nombreEvento== this.evento.nombre){
                this.contadorBoletas = this.contadorBoletas+1;
              }
             j= j+1; 
            }  
          })

        }


      
      });
     
  })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      height:'600px',
      
      
    });


    dialogRef.afterClosed().subscribe(result => {
      

     
      this.ngOnInit()
      
    });
  }


  handleGetSuccesfull(response){
    if(response.visible || response.oculto){
      this.evento=response;
    }
  }

  agregarAlCarrito(pBoleta){
    this.boletas.push(pBoleta);
    

  }

  manejar(response){
    this.etapa =response;
  }



  reservarBoletasPorLocalidad(localidad:Localidad){




    if(this.localidadesCompradas.length<6 && !this.usuarioBoolean && !this.cargando)
    {
      this.localidadesCompradas.push(localidad);
      this.valorLocalidadAgregada = this.valorLocalidadAgregada +  localidad.precio  +localidad.servicio + localidad.servicioPorcentaje;

   }
  
  else if(this.usuarioBoolean){
    alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registrat??")
    this.openDialog();
  }

  else if(this.localidadesCompradas.length==6 ){
    alert("Solo puedes comprar 6 boletas m??ximo por Evento")
  }
  else if(this.cargando){
    alert("Revisa tu conexi??n a internet");
  }
  }



  reservarBoletasLocalidad(){


  if(!this.cargando&&this.localidadesCompradas.length + this.contadorBoletas<7 && !this.usuarioBoolean && this.localidadesCompradas.length>0 )
    {

 
      this.cargando=true
      

        
        this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.localidadesCompradas[0].id , this.localidadesCompradas.length).subscribe(response=>{
          
          if(response!=null){ 
            this.boletas =response
            
            this.referenceCode = 'TICKET;'+this.usuarioEntidad.numeroDocumento + ',' ;
        for(var i=0; this.boletas.length>i;i=i+1)
        { 
          var md5 = new Md5()
          this.referenceCode  = this.referenceCode+ this.boletas[i].id +"_"
          this.valorTotal=this.valorTotal+ this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicioIva
          
          if(i == this.boletas.length-1){
            this.referenceCode = this.referenceCode + "-1"
            this.referenceCode = this.referenceCode +"," + this.evento.id +"," + new Date()
            this.AbrirCarrito()  
          }

        } 

              this.servicioBoletas.rechazarReservaBoleta( this.boletas).subscribe(response=>response);
            
        
      }

          else {
            alert("No quedan boletas en esta localidad, prueba m??s tarde")
          }
          
        })
      
      
      
  }
  
  else if(this.localidadesCompradas.length + this.boletas.length +this.contadorBoletas>=6){
    alert("Solo puedes comprar 6 Tickets m??ximo por Evento")
  }
  
  else if(this.usuarioBoolean){
    alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registrat??")
    this.openDialog()
  }

  else if(this.boletas.length ==6 ){
    alert("Solo puedes comprar 6 Tickets m??ximo por Evento")
  }
  else if(this.localidadesCompradas.length==0){
    alert("Selecciona alg??n Ticket")
  }

 
  
}

quitaBoletaLocalidad(localidad:Localidad){
  if(this.localidadesCompradas.length >0){
    var terminado =false;
    for(var i =0 ; i <this.localidadesCompradas.length && !terminado;i=i+1){
      if(this.localidadesCompradas [i].id==localidad.id){
        this.localidadesCompradas.splice(i,1)
        this.valorLocalidadAgregada = this.valorLocalidadAgregada - (localidad.precio  +localidad.servicio +localidad.servicioPorcentaje) ;
        terminado = true;
      }
    }

  }
  else{
    alert("No tienes Tickets seleccionados")
  }
}

boletasLocalidadCantidadSeleccionada(localidad:Localidad){
  var cantidad =0;
  for(var i =0; i < this.localidadesCompradas.length; i=i+1){
    if(this.localidadesCompradas[i].id ==localidad.id){
      
      cantidad = cantidad +1;
    }
  }
  return cantidad;
}


darCantidadDePalcos(localidad:Localidad){
  var contador =0;
  for(var i =0; i < localidad.palcos.length; i=i+1){
    if(localidad.palcos[i].vendido==false && localidad.palcos[i].reservado==false){

      contador = contador+1;
    }
  }
  return contador;
}



AbrirCarrito(): void {
  const dialogRef = this.dialog.open(CarritoDeComprasComponent, {
    width: '100%',
    height:'85%',
    
    data: { 
      valorTotal: this.valorTotal,
            boletas: this.boletas,
            evento: this.evento,
            usuarioEntidad: this.usuarioEntidad,
            signature: this.signature,
            referenceCode: this.referenceCode,
            codigoVenta:this.codigoVenta,
           
    }       
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
  
      this.servicioBoletas.rechazarReservaBoletaInstantaneamente(this.boletas).subscribe(response=> {
    
        response
        this.dialog.closeAll();
        this.ngOnInit()}
        )

   
  });
}
openDialogMensaje(mensaje,eventoId): void {
  const dialogRef = this.dialog.open(MensajeLinkComponent, {

    
    width: '600px',
    height:'250px',
    data:{
      mensaje:mensaje,
      id:eventoId
    }
    
  });


  dialogRef.afterClosed().subscribe(result => {
       
  });
}


}
