import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PromotorDataService } from '../service/data/promotor-data.service';
import { UsuariosDataService } from '../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from '../service/hardcoded-authetication.service';
import { ReservasBoletasService } from '../service/data/reservas-boletas.service'; 
import { ReservaBoletas } from '../promotor-perfil/evento-promotor/localidad-promotor/reservar/reservaBoleta';
import { Promotor } from '../promotor-perfil/promotor.model';
import { Cliente } from '../usuario/cliente.model';
import { Boleta } from '../eventos/boleta.model';
import { BoletasDataService } from '../service/data/boletas-data.service';
import { Localidad } from '../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Evento } from '../eventos/evento.model';
import { LoginComponent } from '../login/login.component';
import { API_URL2, respuesta } from '../app.constants';
@Component({
  selector: 'app-reserva-boleta',
  templateUrl: './reserva-boleta.component.html',
  styleUrls: ['./reserva-boleta.component.css']
})
export class ReservaBoletaComponent implements OnInit {

  miId
  user
  reserva:ReservaBoletas
  usuario: Cliente
  promotor: Promotor
  pagar:boolean
  boletas:Boleta[]
  referenceCode:string
  valorTotal:number
  localidad:Localidad
  evento:Evento
  tax:number
  constructor(
    private autenticador: HardcodedAutheticationService
    , private route: ActivatedRoute,
    private clienteService: UsuariosDataService,
    private reservasService: ReservasBoletasService ,
    private promotorService: PromotorDataService,
    private dialog: MatDialog,
    private servicioBoletas: BoletasDataService
  ) { }

  ngOnInit(): void {
    this.tax=0
    this.evento = new Evento();
    this.valorTotal=0
    this.referenceCode=""
    this.boletas=[]
    this.pagar = true
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
      palcos: [],
      tipo:null
    }
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
    this.localidad = {
      id: null,
      nombre: '',
      precio: null,
      
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null,
      boletas:[],
      vaca:null
    };
    this.reserva ={
      id:null,
      cantidad:null,
      numeroDocumentoReserva:null,
      localidad:null,
      usado:null,
      promotorDocumento:null
    }
    this.route.paramMap.subscribe(params => {
      this.miId = params.get("id")
      this.reservasService.getReservaPorId(this.miId).subscribe(response=>{
        this.reserva = response.reserva
        this.promotor = response.promotor
        this.evento = response.evento
        this.localidad = response.localidad
        this.user = this.autenticador.getUsuario();
        if(this.user)
        {
        this.clienteService.getCliente(this.user).subscribe((response) => {
    
          this.usuario = response
          if(this.reserva.numeroDocumentoReserva == this.usuario.numeroDocumento){
            this.pagar = true

              




              this.servicioBoletas.reservarBoletaLocalidad(this.evento.id, this.localidad.id , this.reserva.cantidad).subscribe(response=>{
          
                if(response!=null){ 
                  this.boletas =response
                  
                  this.referenceCode = 'TICKET;'+this.usuario.numeroDocumento + ',' ;
              for(var i=0; this.boletas.length>i;i=i+1)
              { 
        
                this.referenceCode  = this.referenceCode+ this.boletas[i].id +"_"
                this.valorTotal=this.valorTotal+ this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicioIva
                this.tax =this.tax+ this.boletas[i].servicioIva 
                if(i == this.boletas.length-1){
                  this.referenceCode = this.referenceCode + "-1"
                  this.referenceCode = this.referenceCode +"," + this.evento.id +"," + new Date()+","+this.promotor.numeroDocumento+',-1'
                  this.pagar=false
                }
      
              } 
      
                    this.servicioBoletas.rechazarReservaBoleta( this.boletas).subscribe(response=>response);
                  
              
            }
      
                else {
                  alert("No quedan boletas en esta localidad, prueba más tarde")
                }
                
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

  window: any = window;
  handler = this.window.ePayco.checkout.configure({
    key: '6eab8941497b56b64deba0385714aafe',
    //key:'6a47649a3a8cab7f99fd0654f71ecf66',
    test: false,
  });
  
  epaycoTicketsUsuarios() {


    if(this.pagar == false){
    
      let moneda = 'cop'
      let pais ='co'


    var data = {
      //Parametros compra (obligatorio)
      name: this.evento.nombre,
      description:
        this.boletas.length +
        ' Tickets para ' +
        this.evento.nombre +
        ' En la localidad ' +
        this.boletas[0].localidadNombre,
      invoice: this.referenceCode,
      currency: moneda,
      amount: this.valorTotal,
      tax_base: (this.valorTotal- this.tax).toString(),
      tax: this.tax.toString(),
      country: pais,
      lang: 'es',
      
      //Onpage="false" - Standard="true"
      external: 'true',

      //Atributos opcionales

      //response:"http://localhost:4200/eventos/respuesta",
      response: `${respuesta}/eventos/respuesta`,
      confirmation:`${API_URL2}/epayco/tickets`,

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
    this.pagar =false
    console.log("pagar")
    alert('Close ePayco Modal!!!!!!!');
    
  }

}