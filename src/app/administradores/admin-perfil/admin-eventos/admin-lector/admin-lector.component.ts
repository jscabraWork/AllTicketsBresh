import { API_URL } from './../../../../app.constants';
import { AsistenteDataService } from './../../../../service/data/asistente-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVA } from 'src/app/app.constants';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { UsuariosDataService } from 'src/app/service/data/usuarios-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { Palco } from '../admin-palcos/palco.model';
import { Asistente } from './asistente.model';

@Component({
  selector: 'app-admin-lector',
  templateUrl: './admin-lector.component.html',
  styleUrls: ['./admin-lector.component.css']
})
export class AdminLectorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: BoletasDataService, private asistenteService:AsistenteDataService, private servicioEvento:EventoDataService, private clienteService:UsuariosDataService, private palcosServicio:PalcosDataService) { }
  listaClientes:Cliente[]=[]
  boleta:Boleta
  cliente: Cliente
  idPalco
  miId
  idCliente
  idBoleta
  idAsistente
  evento:Evento
  asistente:Asistente
  boletasBuscadasPorDocumento:Boleta[]=[]
  palcosBuscadosPorDocumento:Palco[]=[]
  IVA
  palco:Palco
  ngOnInit(): void {
    this.IVA=IVA
    this.cliente={
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
    this.asistente={
      boletas:[],
      celular:null,
      correo:null,
      nombre:null,
      numeroDocumento:null,
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
     idLocalidad:null
    }
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
      servicioIva:null
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
      imagen:null,
      imagenes:[],
      artistas:"",
      fechaFin:null,
      mapa:null,
      localidades:[],
      
      horaInicio:null,
      horaFin:null,
      etapas:[],
      mapaImagen:null,
      visible:false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null,
      urlMapa:null,
      adicionales:[]
    }

    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
    this.refrescar()
    })
  }
  refrescar(){
    this.servicioEvento.getEventoId(this.miId).subscribe( response => this.handleGetSuccesfull(response));
  }
  
  handleGetSuccesfull(r){
    this.evento=r;
  }

  traerBoleta(){
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
    idLocalidad:null
   }
    this.cliente={
      boletas:[],
      celular:"",
      contrasena:"",
      correo:"",
      direccion:"",
      nombre:"",
      numeroDocumento:0,
      palcos:[],
      publicidad:false,
      tipoDocumento:"",
      usuario:""
    }
    
    this.asistente={
      boletas:[],
      celular:"",
      correo:"",
      nombre:"",
      numeroDocumento:0,
    }
    
    this.service.getBoletaPorId(this.idBoleta).subscribe(response=>{this.boleta=response;
 
    
    })

    this.service.getClienteDeUnaBoleta(this.idBoleta).subscribe(response => {this.cliente= response;

      }
        )
        this.service.getAsistenteDeUnaBoleta(this.idBoleta).subscribe(response=> { this.asistente=response})
  }

  traerCliente(){
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
      idLocalidad:null
     }
      this.cliente={
        boletas:[],
        celular:"",
        contrasena:"",
        correo:"",
        direccion:"",
        nombre:"",
        numeroDocumento:0,
        palcos:[],
        publicidad:false,
        tipoDocumento:"",
        usuario:""
      }
      
      this.asistente={
        boletas:[],
        celular:"",
        correo:"",
        nombre:"",
        numeroDocumento:0,
      }
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
        servicioIva:null,
      }
    this.boletasBuscadasPorDocumento=[]
    this.clienteService.getClientePorId(this.idCliente).subscribe(response=>
      {this.cliente=response
      var i =0
      while(i < this.cliente.boletas.length){
        if(this.cliente.boletas[i].nombreEvento == this.evento.nombre){
          this.boletasBuscadasPorDocumento.push(this.cliente.boletas[i])
        }

        i = i+1;

      }
      i=0;
      while(i < this.cliente.palcos.length){
        if(this.cliente.palcos[i].nombreEvento == this.evento.nombre){
          this.palcosBuscadosPorDocumento.push(this.cliente.palcos[i])
        }

        i = i+1;

      }
      }
      )
  }

  traerPalco(){
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
      idLocalidad:null
     }
      this.cliente={
        boletas:[],
        celular:"",
        contrasena:"",
        correo:"",
        direccion:"",
        nombre:"",
        numeroDocumento:0,
        palcos:[],
        publicidad:false,
        tipoDocumento:"",
        usuario:""
      }
      
      this.asistente={
        boletas:[],
        celular:"",
        correo:"",
        nombre:"",
        numeroDocumento:0,
      }
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
        servicioIva:null,
      }
      this.palcosServicio.getPalco(0,this.idPalco).subscribe(response=> {this.palco= response;
      
      this.palcosServicio.getClientesDeUnPalco(this.palco.id).subscribe(data=>{this.listaClientes=data;
        console.log(this.listaClientes)
    }
      )
      
      })
  }

  getClienteDeUnPalco (idPalco){
    
  }

  traerAsistente(){
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
      idLocalidad:null
     }
      this.cliente={
        boletas:[],
        celular:"",
        contrasena:"",
        correo:"",
        direccion:"",
        nombre:"",
        numeroDocumento:0,
        palcos:[],
        publicidad:false,
        tipoDocumento:"",
        usuario:""
      }
      
      this.asistente={
        boletas:[],
        celular:"",
        correo:"",
        nombre:"",
        numeroDocumento:0,
      }
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
        servicioIva:null,
      }
      this.boletasBuscadasPorDocumento=[]
      this.asistenteService.getAsistente(this.idAsistente).subscribe(response=>{
        this.asistente=response
        var i =0
        while(i < this.asistente.boletas.length){
          if(this.asistente.boletas[i].nombreEvento == this.evento.nombre){
            this.boletasBuscadasPorDocumento.push(this.asistente.boletas[i])
          }
  
          i = i+1;
  
        }
        
      })

  }


  marcarBoletaComoUtilizada(pIdBoleta){
    this.service.marcarComoUtiliza(pIdBoleta).subscribe(response=> response);

  }

  aumentarPersonaPalco(pIdPalco){
    this.palcosServicio.aumentarPersonaPalco(pIdPalco).subscribe(response=>response)
  }
}
