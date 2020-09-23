import { Evento } from './../../../evento.model';
import { EventoDataService } from './../../../../service/data/evento-data.service';
import { Palco } from './../../../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Cliente } from './../../../../usuario/cliente.model';
import { PalcosDataService } from './../../../../service/data/palcos-data.service';
import { HardcodedAutheticationService } from './../../../../service/hardcoded-authetication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosDataService } from './../../../../service/data/usuarios-data.service';
import { Component, OnInit } from '@angular/core';
import { updateFor } from 'typescript';

@Component({
  selector: 'app-comprar-palcos',
  templateUrl: './comprar-palcos.component.html',
  styleUrls: ['./comprar-palcos.component.css']
})
export class ComprarPalcosComponent implements OnInit {

  merchantId:number
accountId:number
referenceCode:string="PAGO: "
signature:string
ApiKey:string
  usuarioEntidad:Cliente
  miId
  palcos:Palco[]=[]
  evento:Evento
  usuarioA
  palcosCarrito:Palco[]=[]
  usuarioBoolean
  valorTotal=0;
  palcosLista:Palco[]=[]
  valorLocalidadAgregada=0;
  constructor(private route: ActivatedRoute, private service:EventoDataService, private palcoServicio:PalcosDataService, private autenticador: HardcodedAutheticationService, private router: Router,private dataServicio:UsuariosDataService) { }

  ngOnInit(): void {

    this.merchantId=703263  // 508029
    this.accountId=706326 //  512321
    this.ApiKey="tyrs5RFaKLs72kHWaZW3WB91B0"

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
          etapas:[]
        }
        
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      this.palcoServicio.getAllPalcosVendidosDeUnEvento(this.miId,false).subscribe(response=>(this.palcos = response))
      this.service.getEventoId(this.miId).subscribe( response => {this.handleGetSuccesfull(response);
        if(this.autenticador.getUsuario()!=null ){
        
          this.usuarioA= this.autenticador.getUsuario(); 
         this.referenceCode = this.referenceCode + this.usuarioA+': ';
          
          
          this.dataServicio.getCliente(this.usuarioA).subscribe(response => {this.usuarioEntidad=response
            this.usuarioBoolean=true;
            
          })

        }
      
      
      })
    }
      
      
      )
  }

  handleGetSuccesfull(response){
    this.evento =response;
  }

  agregarALaLista(palco:Palco){

    if(this.usuarioBoolean){
    var terminado =false;
    for(var i =0; i < this.palcosLista.length && !terminado; i++){
      if(this.palcosLista[i].id == palco.id ){
    
        terminado = true;
      }
      
    }
    for(var i =0; i < this.palcosCarrito.length && !terminado;i++){
      if( this.palcosCarrito[i].id == palco.id){
        terminado =true
      }
    }

    if(terminado){
      alert("Ya agregase este palco")
    }
    else{
    this.valorLocalidadAgregada = this.valorLocalidadAgregada+ palco.precio + palco.precio*palco.servicio*0.01 +(palco.precio+palco.precio*palco.servicio*0.01)*0.0279+800 ;
    this.palcosLista.push(palco);
  }

}
else{
  alert("Entra a tu cuenta AllTickets")
  this.router.navigate(['/login'])
}
  }

  quitarDeLaLista(palco:Palco){
    if(this.usuarioBoolean){
    var terminado = false;
    for(var i =0; i < this.palcosLista.length && !terminado; i++){
      if(this.palcosLista[i].id == palco.id){
        this.valorLocalidadAgregada = this.valorLocalidadAgregada- (palco.precio + palco.precio*palco.servicio*0.01 +(palco.precio+palco.precio*palco.servicio*0.01)*0.0279+800) ;
        this.palcosLista.splice(i,1);
        terminado = true;
      }
    }
  }
  else{
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }
  }

  agregarAlCarrito(){

    if(this.usuarioBoolean){
    for(var i =0; i < this.palcosLista.length; i++){
      this.palcosCarrito.push(this.palcosLista[i])
    }
    this.valorLocalidadAgregada =0;
    this.palcosLista=[];
  }
  else{
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }

}

pagar(){
  if(this.usuarioBoolean){
    if(this.palcosCarrito.length>0){

    }
    else{
      alert("Agrega algún Palco al Carrito")
    }

  }
  else{
    alert("Entra a tu cuenta AllTickets")
    this.router.navigate(['/login'])
  }
}
  

}
