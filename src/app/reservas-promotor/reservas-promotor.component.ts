// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ActivatedRoute } from '@angular/router';
// import { Md5 } from 'ts-md5';
// import { Palco } from '../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
// import { API_URL, API_URL2, respuesta } from '../app.constants';
// import { LoginComponent } from '../login/login.component';
// import { Reserva } from '../models/reserva.model';
// import { Promotor } from '../promotor-perfil/promotor.model';
// import { PromotorDataService } from '../service/data/promotor-data.service';
// import { ReservasDataService } from '../service/data/reservas-data.service';
// import { UsuariosDataService } from '../service/data/usuarios-data.service';
// import { HardcodedAutheticationService } from '../service/hardcoded-authetication.service';
// import { Cliente } from '../usuario/cliente.model';

// @Component({
//   selector: 'app-reservas-promotor',
//   templateUrl: './reservas-promotor.component.html',
//   styleUrls: ['./reservas-promotor.component.css']
// })
// export class ReservasPromotorComponent implements OnInit {
//   merchantId: number;
//   accountId: number;
//   referenceCode
//   reserva: Reserva
//   usuario: Cliente
//   user;
//   miId
//   pagar:boolean
//   promotor: Promotor
//   palco:Palco
//   pagar2:boolean
//   porcentaje
//   valorAPagar
//   ApiKey: string;
//   url:string;
//   descripcion:string
//   metodos:string[]=[]
//   signature:string
//   respuesta
//   confirmacion:string
//   tax:number
//   constructor(
//     private autenticador: HardcodedAutheticationService
//     , private route: ActivatedRoute,
//     private clienteService: UsuariosDataService,
//     private reservasService: ReservasDataService,
//     private promotorService: PromotorDataService,
//     private dialog: MatDialog
//   ) { }

//   ngOnInit(): void {
//     var md5 = new Md5();
//     this.metodos = ['PSE','VISA','AMEX','CODENSA','DINERS','MASTERCARD','VISA']
//     this.url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
//     this.ApiKey ='F5c8jP7X25o4KxCnPvGAwFxJjw' //'4Vj8eK4rloUd272L48hsrarnUA'
//    this.merchantId = 953461
//    this.accountId = 961103
//     this.referenceCode =""
//     this.pagar = false
//     this.pagar2=true
//     this.usuario = {
//       nombre: "",
//       numeroDocumento: null,
//       tipoDocumento: "",
//       usuario: "",
//       contrasena: "",
//       celular: null,
//       correo: "",
      
//       publicidad: null,
//       boletas: [],
//       palcos: []
//     }

//     this.reserva = {
//       creationDate: null,
//       documentoReserva: null,
//       id: null,
//       numeroPromotor: null
//     }
//     this.palco = {
//       id: null,
//       nombre: null,
//       nombreEvento: null,
//       personasAdentro: null,
//       personasMaximas: null,
//       precio: null,
//       precioParcialPagado: null,
//       reservado: null,
//       servicio: null,
//       vendido: null,
//       numeroDentroDeEvento: null,
//       fechaVendido: null,
//       servicioIva:null,
//       proceso:null,
//       disponible:null,
//       idLocalidad:null,
//       reserva:null,
//       precioAlterno:null,
//       servicioAlterno:null,	  
//       servicioIvaAlterno:null,
//       adiciones: null,
//       maximoAdiciones: null,
//       precioAdicion: null,
//       servicioAdicion: null,
//       servicioIvaAdicion:null,
//     };

//     this.promotor = {
//       nombre: null,
//       numeroDocumento: null,
//       tipoDocumento: null,
//       usuario: null,
//       contrasena: null,
//       tipo: null,
//       codigoventa: null,
//       dineroTotal: null,
//       boletasVendidas: [],
//       boletasCanjeadas: [],
//       palcosVendidos: [],
//       palcosCanjeados: [],
//       correo: null,
//       celular: null,
//       eventos: []

//     }
//     this.confirmacion =API_URL+ '/payu'
//     this.respuesta = respuesta

    
//     this.route.paramMap.subscribe(params => {
//       this.miId = params.get("id")
//       this.reservasService.getReserva(this.miId).subscribe((response) => {
//         this.reserva = response

//     if(this.reserva==null){
//       alert("Esta reserva no existe")
//     }
   
//     this.user = this.autenticador.getUsuario();
//     if(this.user)
//     {
//     this.clienteService.getCliente(this.user).subscribe((response) => {

//       this.usuario = response
//       if(this.reserva.documentoReserva == this.usuario.numeroDocumento){
//         this.pagar = true
//         this.promotorService.getPromotorById(this.reserva.numeroPromotor).subscribe((response)=>{
//           this.promotor = response
//           this.reservasService.getPalcoReserva(this.miId).subscribe((response)=>{
//            this.palco = response
//            this.valorAPagar = this.palco.precio + this.palco.servicio + this.palco.servicioIva
//             console.log(response)
//             this.descripcion = "Un palco " +this.palco.nombre +" pare el evento " + this.palco.nombre
//            this.referenceCode ="PALCO;"
//            +this.usuario.numeroDocumento
//            +","+this.palco.id +","
//            +this.palco.nombreEvento+","
//            +
//            new Date()
//            + ','+
//            this.promotor.codigoventa
//            +',-1';

//            this.pagar2=false

//            let valorEncriptar = this.ApiKey +"~"+ this.merchantId+"~"+this.referenceCode+"~"+this.valorAPagar+"~"+'COP~';

//            for(let i =0;i<this.metodos.length;i++){
//              if(i <this.metodos.length-1){
//              valorEncriptar += this.metodos[i]+ ','
//            }
//            else{
//              valorEncriptar += this.metodos[i];
//            }
//            }
     
//            this.signature = md5.appendStr(valorEncriptar).end().toString();
//            this.tax = this.palco.servicioIva

//           })
          
//         })
//       }
//       else{
//         alert("Esta reserva no esta a tu nombre")
//       }

//     })
//     }



//     else{
//       alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registraté")
//       this.openDialog2()
      
//     }
//   }
//       )

//     })
//   }

//   openDialog2(): void {
//     const dialogRef = this.dialog.open(LoginComponent, {
//       width: '600px',


//     });

//     dialogRef.afterClosed().subscribe(result => {

//       this.ngOnInit()

//     });
//   }


//   cambiarTotal(){

//     this.valorAPagar = (this.porcentaje/100)*(this.palco.precio+this.palco.servicio+this.palco.servicioIva);
//     this.tax = (this.porcentaje/100)*this.palco.servicioIva
//     var md5 = new Md5();
//     let valorEncriptar = this.ApiKey +"~"+ this.merchantId+"~"+this.referenceCode+"~"+this.valorAPagar+"~"+'COP~';

//     for(let i =0;i<this.metodos.length;i++){
//       if(i <this.metodos.length-1){
//       valorEncriptar += this.metodos[i]+ ','
//     }
//     else{
//       valorEncriptar += this.metodos[i];
//     }
//     }

//     this.signature = md5.appendStr(valorEncriptar).end().toString();
//     if(this.valorAPagar +this.palco.precioParcialPagado <= (this.palco.precio + this.palco.servicio+ this.palco.servicioIva))
//     {
    
   
//   }
//   else{
//     alert("Estas aportando más del valor total")
//   }
//    }



// }
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Palco } from '../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL2, respuesta } from '../app.constants';
import { Evento } from '../eventos/evento.model';
import { LoginComponent } from '../login/login.component';
import { Reserva } from '../models/reserva.model';
import { Promotor } from '../promotor-perfil/promotor.model';
import { PromotorDataService } from '../service/data/promotor-data.service';
import { ReservasDataService } from '../service/data/reservas-data.service';
import { UsuariosDataService } from '../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from '../service/hardcoded-authetication.service';
import { Cliente } from '../usuario/cliente.model';

@Component({
  selector: 'app-reservas-promotor',
  templateUrl: './reservas-promotor.component.html',
  styleUrls: ['./reservas-promotor.component.css']
})
export class ReservasPromotorComponent implements OnInit {

  referenceCode
  reserva: Reserva
  usuario: Cliente
  user;
  miId
  pagar:boolean
  promotor: Promotor
  palco:Palco
  pagar2:boolean
  porcentaje
  valorAPagar
  tax:number
  evento: Evento;
  constructor(
    private autenticador: HardcodedAutheticationService
    , private route: ActivatedRoute,
    private clienteService: UsuariosDataService,
    private reservasService: ReservasDataService,
    private promotorService: PromotorDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tax =0

    this.evento = new Evento();
    this.referenceCode =""
    this.pagar = false
    this.pagar2=true
    this.usuario = {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena: "",
      celular: null,
      correo: "",
      
      publicidad: null,
      boletas: [],
      palcos: []
    }

    this.reserva = {
      creationDate: null,
      documentoReserva: null,
      id: null,
      numeroPromotor: null
    }
    this.palco = {
      id: null,
      nombre: null,
      nombreEvento: null,
      personasAdentro: null,
      personasMaximas: null,
      precio: null,
      precioParcialPagado: null,
      reservado: null,
      servicio: null,
      vendido: null,
      numeroDentroDeEvento: null,
      fechaVendido: null,
      servicioIva:null,
      proceso:null,
      disponible:null,
      idLocalidad:null,
      reserva:null,
      precioAlterno:null,
      servicioAlterno:null,	  
      servicioIvaAlterno:null,
      adiciones: null,
      maximoAdiciones: null,
      precioAdicion: null,
      servicioAdicion: null,
      servicioIvaAdicion:null,
      metodo:null
    };

    this.promotor = {
      nombre: null,
      numeroDocumento: null,
      tipoDocumento: null,
      usuario: null,
      contrasena: null,
      tipo: null,
      codigoventa: null,
      dineroTotal: null,
      boletasVendidas: [],
      boletasCanjeadas: [],
      palcosVendidos: [],
      palcosCanjeados: [],
      correo: null,
      celular: null,
      eventos: []

    }

    this.route.paramMap.subscribe(params => {
      this.miId = params.get("id")
      this.reservasService.getReserva(this.miId).subscribe((response) => {
        this.reserva = response

    if(this.reserva==null){
      alert("Esta reserva no existe")
    }
   
    this.user = this.autenticador.getUsuario();
    if(this.user)
    {
    this.clienteService.getCliente(this.user).subscribe((response) => {

      this.usuario = response
      if(this.reserva.documentoReserva == this.usuario.numeroDocumento){
        this.pagar = true
        this.promotorService.getPromotorById(this.reserva.numeroPromotor).subscribe((response)=>{
          this.promotor = response
          this.reservasService.getPalcoReserva(this.miId).subscribe((response)=>{
            this.palco = response
            this.tax = this.palco.servicioIva
            this.valorAPagar = this.palco.precio + this.palco.servicio + this.palco.servicioIva
            this.reservasService.getEventoReserva(this.miId).subscribe(response=>{
              
              this.evento =response;

          
              this.referenceCode ="PALCO;"
              +this.usuario.numeroDocumento
              +","+this.palco.id +","
              +this.evento.id+","
              +
              new Date()
              + ','+
              this.promotor.codigoventa
              +',-1';
   
              this.pagar2=false

              
            })

          })
          
        })
      }
      else{
        alert("Esta reserva no esta a tu nombre")
      }

    })
    }



    else{
      alert("Debes ingresar a tu cuenta AllTickets para realizar la compra, en caso de no tener registraté")
      this.openDialog2()
      
    }
  }
      )

    })
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',


    });

    dialogRef.afterClosed().subscribe(result => {

      this.ngOnInit()

    });
  }


  cambiarTotal(){

    this.valorAPagar = (this.porcentaje/100)*(this.palco.precio+this.palco.servicio+this.palco.servicioIva);
    if(this.valorAPagar +this.palco.precioParcialPagado <= (this.palco.precio + this.palco.servicio+ this.palco.servicioIva))
    {
    
   
  }
  else{
    alert("Estas aportando más del valor total")
  }
   }
  window: any = window;
  handler = this.window.ePayco.checkout.configure({
    key: '6eab8941497b56b64deba0385714aafe',
    //key:'6a47649a3a8cab7f99fd0654f71ecf66',
    test: false,
  });

  epaycoPalcosUsuarios() {

    if(this.pagar2 == false){
      this.pagar2 = true;
        

        var data = {
          //Parametros compra (obligatorio)
          name: this.palco.nombreEvento,
          description:
          '1 Palco para ' +
          this.palco.nombreEvento +
          ' En la localidad ' +
          this.palco.nombre,
          currency: 'cop',
          amount: this.valorAPagar,
          invoice:this.referenceCode,
          tax_base: (this.valorAPagar- this.tax).toString(),
          tax: this.tax.toString(),
          country: 'co',
          lang: 'es',
    
          //Onpage="false" - Standard="true"
          external: 'true',
    
          //Atributos opcionales
    
         // response: "http://localhost:4200/eventos/respuesta",
         response: `${respuesta}/eventos/respuesta`,
          confirmation:`${API_URL2}/epayco`,
    
          //Atributos cliente
          name_billing: this.usuario.nombre,
          
          type_doc_billing: 'cc',
          mobilephone_billing: this.usuario.celular,
          number_doc_billing: this.usuario.numeroDocumento,
        };
    
        this.handler.onCloseModal = this.onCloseEpaycoModal;
        this.handler.open(data);
    
      }
    
      }
 
      onCloseEpaycoModal() {
        this.pagar2 =false
        
        alert('Close ePayco Modal!');
        
      }

      epaycoPalcosUsuarios2() {

        if(this.pagar2 == false){
          this.pagar2 = true;
        this.handler=this.window.ePayco.checkout.configure({
          key: 'c3b3aa9c8c34f800c0d0701f24fc5e33',
          test: false,
        });
        var data = {
          //Parametros compra (obligatorio)
          name: this.palco.nombreEvento,
          description:
          '1 Palco para ' +
          this.palco.nombreEvento +
          ' En la localidad ' +
          this.palco.nombre,
          currency: 'cop',
          amount: this.valorAPagar,
          invoice:this.referenceCode,
          tax_base: '0',
          tax: '0',
          country: 'co',
          lang: 'es',
    
          //Onpage="false" - Standard="true"
          external: 'false',
    
          //Atributos opcionales
    
         // response: "http://localhost:4200/eventos/respuesta",
         response: `${respuesta}/eventos/respuesta`,
          confirmation:`${API_URL2}/epayco`,
    
          //Atributos cliente
          name_billing: this.usuario.nombre,
          
          type_doc_billing: 'cc',
          mobilephone_billing: this.usuario.celular,
          number_doc_billing: this.usuario.numeroDocumento,
        };
    
        this.handler.onCloseModal = this.onCloseEpaycoModal;
        this.handler.open(data);
      }
    }

}