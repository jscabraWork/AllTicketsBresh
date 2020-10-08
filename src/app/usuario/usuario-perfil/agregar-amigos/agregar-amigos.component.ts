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
  constructor(private route:ActivatedRoute, private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService, private palcoServicio: PalcosDataService) { }

  ngOnInit(): void {

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
    }
    this.user= this.autenticador.getUsuario();
    
    this.route.paramMap.subscribe( params =>{
      this.idPalco =params.get('idPalco');
    this.dataServicio.getCliente(this.user).subscribe(response => {this.usuario=response;
    this.palcoServicio.getPalco(0, this.idPalco).subscribe(response=>{ this.palco=response;
    this.refrescar()
    
    })
    })
  })

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

}
