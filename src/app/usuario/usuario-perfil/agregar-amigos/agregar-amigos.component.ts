import { Md5 } from 'ts-md5/dist/md5';
import { IVA } from './../../../app.constants';
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
  url="https://checkout.payulatam.com/ppp-web-gateway-payu/"
  
  signature
  valorAPagar=0
  constructor(private route:ActivatedRoute, private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService, private palcoServicio: PalcosDataService) { }

  ngOnInit(): void {

    this.IVA = IVA
    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"// 4Vj8eK4rloUd272L48hsrarnUA
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
       fechaVendido : null
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
      this.referenceCode="APORTE A PALCO: "+this.usuario+"/" +this.palco.id
    this.refrescar()
    
    })
  }
  cambiarTotal(){

    this.valorAPagar = (this.porcentaje/100)*(this.palco.precio+this.palco.servicio+this.palco.servicio*0.19);
    if(this.valorAPagar +this.palco.precioParcialPagado <= (this.palco.precio + this.palco.servicio+ this.palco.servicio*0.19))
    {
    this.referenceCode= this.referenceCode+"/"+new Date()
    var md5 = new Md5()
    this.signature = md5.appendStr(this.ApiKey+"~"+this.merchantId+"~"+this.referenceCode+"~"+this.valorAPagar+"~COP").end().toString();
  }
  else{
    alert("Estas aportando más del valor total")
  }
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

aportarVaca(){

 
    if(this.valorAPagar!=0){
      if(this.palco.precioParcialPagado+ this.valorAPagar <= (this.palco.precio+ this.palco.servicio +this.palco.servicio*0.19))
      {
        this.palcoServicio.aportaALaVaca(this.palco.id,this.valorAPagar).subscribe(response=> {response;
          
          
        this.refrescarPalco()
        
        })
      }
      else{
        alert("Estas aportando más del valor total")
      }
    }
    else{
        alert("Agrega un valor a aportar")
      }
    
}

window: any = window;
handler = this.window.ePayco.checkout.configure({
  key: '7c7542634fcbfa55f6852b0d6ae4a98e',
  test: true,
});

epaycoPalcosUsuarios() {
  var data = {
    //Parametros compra (obligatorio)
    name: this.palco.nombreEvento,
    description:
    'Aporte al Palco para ' +
    this.palco.nombreEvento +
    ' En la localidad ' +
    this.palco.nombre,
    currency: 'cop',
    amount: this.valorAPagar,
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',

    //Onpage="false" - Standard="true"
    external: 'true',

    //Atributos opcionales

    response: "http://localhost:4200/eventos/respuesta",
    confirmation: "http://localhost:4200/eventos/confirmacion",

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
onCloseEpaycoModal() {
  alert('Close ePayco Modal!!!!!!!');
}

}
