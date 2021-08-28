import { Md5 } from 'ts-md5/dist/md5';
import { API_URL2, IVA, respuesta } from './../../../app.constants';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAutheticationService } from './../../../service/hardcoded-authetication.service';
import { UsuariosDataService } from './../../../service/data/usuarios-data.service';
import { Palco } from './../../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Cliente } from './../../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-amigos',
  templateUrl: './agregar-amigos.component.html',
  styleUrls: ['./agregar-amigos.component.css']
})
export class AgregarAmigosComponent implements OnInit {

  user ='';
  usuario:Cliente
  palco:Palco
  idPalco
  clientes:Cliente[]=[]
  clienteAgregado:Cliente
  numeroDocumento
  IVA
  merchantId
  accountId
  ApiKey
  referenceCode:string
  porcentaje
  
  

  valorAPagar=0
  valorPagarAdicion=0
  seleccionAdicion
  listaAdiciones:number[]
  constructor(private route:ActivatedRoute, private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService, private palcoServicio: PalcosDataService) { }

  ngOnInit(): void {
    this.listaAdiciones=[]
    this.IVA = IVA

    this.clienteAgregado={
      boletas:[],
      celular:null,
      contrasena:null,
      correo:null,
      direccion:null,
      nombre:null,
      numeroDocumento:null,
      palcos:[],
      publicidad:null,
      tipoDocumento:null,
      usuario:null
    }

    this.usuario= {
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
    this.palco={
       id:null,
       nombre:null,
       nombreEvento:null,
       personasAdentro:null,
       personasMaximas:null,
       precio:null,
       precioParcialPagado:null,
       reservado:null,
       servicio:null,
       vendido:null,
       numeroDentroDeEvento:null,
       fechaVendido : null,
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
       
       
    }
    this.user= this.autenticador.getUsuario();
    
    this.route.paramMap.subscribe( params =>{
      this.idPalco =params.get('idPalco');
    this.dataServicio.getCliente(this.user).subscribe(response => {this.usuario=response;
      this.refrescarPalco()
    })
  })

  }

  refrescarPalco(){
    this.palcoServicio.getPalco(0, this.idPalco).subscribe(response=>{ this.palco=response;
      //PALCO;1020823136,3010,Guess Who’s Back,Tue Aug 17 2021 15:30:33 GMT-0500 (hora estándar de Colombia),arckenFRAT,-1
      let cantidad = this.palco.maximoAdiciones - this.palco.personasMaximas;
      for(let i=1;i<=cantidad;i++){
        this.listaAdiciones.push(i)
      }
    this.refrescar()
    
    })
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
  

   cambiarTotalAdicion(){

    this.valorPagarAdicion = this.seleccionAdicion * (this.palco.precioAdicion+this.palco.servicioAdicion+this.palco.servicioIvaAdicion);

   }

  refrescar(){
    this.palcoServicio.getClientesDeUnPalco(this.idPalco).subscribe(response=> this.clientes=response)
  }

  buscarCliente(){
    this.dataServicio.getClientePorId(this.numeroDocumento).subscribe(response=> 
     { if(response!=null){
      this.clienteAgregado=response
    }
    else{
      alert("No tenemos este numero de documento registrado")
    }
     })
  }

  agregarCliente(){
    var clienteEncontrado = false;
    for(var i =0; i <this.clientes.length; i= i+1){
      if(this.clienteAgregado.numeroDocumento == this.clientes[i].numeroDocumento){
        clienteEncontrado = true;
      }
    }

      
    if(clienteEncontrado ==false){
        if(this.clienteAgregado.numeroDocumento==null){
          alert("Agrega un amigo para continuar")
        }
        else{

          if(this.clientes.length< this.palco.personasMaximas){
          this.palcoServicio.agregarClientesAlPalco(this.idPalco, this.clienteAgregado.numeroDocumento).subscribe(response=> {
            
            response;
            
            this.refrescar()
            alert("Cliente: "+ this.clienteAgregado.numeroDocumento+ " agregado al palco")
          },
          error=>{alert(error.error.message)}
          
          )
        }
        else{
          alert("Cantidad maxima de personas en el palcos alcanzada")
        }
        }
      }
    else{
      alert("Este cliente ya esta en el palco")
    }
}


window: any = window;
handler = this.window.ePayco.checkout.configure({
  key: '7c7542634fcbfa55f6852b0d6ae4a98e',
  test: false,
});

epaycoPalcosUsuarios() {
  this.referenceCode="APORTEPALCO;"+this.usuario.numeroDocumento+"," +this.palco.id+","+this.palco.nombreEvento+","+new Date()+",00000,-1";
  if(this.valorAPagar!=0){
    if(this.palco.precioParcialPagado+ this.valorAPagar <= (this.palco.precio+ this.palco.servicio +this.palco.servicioIva))
    {
  var data = {
    //Parametros compra (obligatorio)
    name: this.palco.nombreEvento,
    description:
    'Aporte al Palco para ' +
    this.palco.nombreEvento +
    ' En la localidad ' +
    this.palco.nombre,
    currency: 'cop',
    invoice: this.referenceCode,
    amount: this.valorAPagar,
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',

    //Onpage="false" - Standard="true"
    external: 'false',

    //Atributos opcionales

    response: `${respuesta}/eventos/respuesta`,
    confirmation:`${API_URL2}/epayco`,

    //Atributos cliente
    name_billing: this.usuario.nombre,
    address_billing: this.usuario.direccion,
    type_doc_billing: 'cc',
    mobilephone_billing: this.usuario.celular,
    number_doc_billing: this.usuario.numeroDocumento,
  };

  this.handler.onCloseModal = this.onCloseEpaycoModal;
  this.handler.open(data);
}
else{
  alert("Estas aportando más del valor total")
}
}
else{
  alert("Agrega un valor a aportar")
}
}
onCloseEpaycoModal() {
  alert('Close ePayco Modal!!!!!!!');
}


epaycoPalcosUsuariosAdicion() {

  this.referenceCode="ADICIONPALCO;"+this.seleccionAdicion+"," +this.palco.id+","+this.palco.nombreEvento+","+new Date()+",00000,-1";
  if(this.valorPagarAdicion!=0){
  
  var data = {
    //Parametros compra (obligatorio)
    name: this.palco.nombreEvento,
    description:
    'Aporte al Palco para ' +
    this.palco.nombreEvento +
    ' En la localidad ' +
    this.palco.nombre,
    currency: 'cop',
    invoice: this.referenceCode,
    amount: this.valorPagarAdicion,
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',

    //Onpage="false" - Standard="true"
    external: 'false',

    //Atributos opcionales

    response: `${respuesta}/eventos/respuesta`,
    confirmation:`${API_URL2}/epayco`,

    //Atributos cliente
    name_billing: this.usuario.nombre,
    address_billing: this.usuario.direccion,
    type_doc_billing: 'cc',
    mobilephone_billing: this.usuario.celular,
    number_doc_billing: this.usuario.numeroDocumento,
  };

  this.handler.onCloseModal = this.onCloseEpaycoModal;
  this.handler.open(data);

}
else{
  alert("Agrega un valor a aportar")
}
}

}
