import { BoletasDataService } from './../../service/data/boletas-data.service';
import { Boleta } from './../../eventos/boleta.model';
import { EtapasDataService } from './../../service/data/etapas-data.service';
import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { ActivatedRoute } from '@angular/router';
import { Evento } from './../../eventos/evento.model';
import { PuntoFisico } from './../puntoFisico.model';
import { PuntosFisicosDataService } from './../../service/data/puntos-fisicos-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { EventoDataService } from './../../service/data/evento-data.service';
import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { IVA } from 'src/app/app.constants';
import { ImagenEventosComponent } from 'src/app/eventos/eventos-perfil/imagen-eventos/imagen-eventos.component';
import { MatDialog } from '@angular/material/dialog';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { UsuariosDataService } from 'src/app/service/data/usuarios-data.service';
import { CarritoDeComprasPuntosFisicosComponent } from '../carrito-de-compras-puntos-fisicos/carrito-de-compras-puntos-fisicos.component';
import { CantidadBoletasPuntoFisicoComponent } from '../cantidad-boletas-punto-fisico/cantidad-boletas-punto-fisico.component';

@Component({
  selector: 'app-evento-punto-fisico',
  templateUrl: './evento-punto-fisico.component.html',
  styleUrls: ['./evento-punto-fisico.component.css']
})
export class EventoPuntoFisicoComponent implements OnInit {

  puntoFisico:PuntoFisico
  evento:Evento
  user
  miId

  boletas:Boleta[]=[]
boletaBoolean:boolean=false
IVA

lista1: any[] = [];
lista2: any[] = [];
lista3: any[] = [];
lista4: any[] = [];
lista5: any[] = [];
lista6: any[] = [];
lista7: any[] = [];
lista8: any[] = [];

lista9: any[] = [];
lista10: any[] = [];

lista11: any[] = [];
lista12: any[] = [];

lista13: any[] = [];
lista14: any[] = [];

lista15: any[] = [];
lista16: any[] = [];
lista17: any[] = [];
lista18: any[] = [];
lista19: any[] = [];
lista20: any[] = [];

lista21: any[] = [];
lista22: any[] = [];
lista23: any[] = [];
lista24: any[] = [];
lista25: any[] = [];
lista26: any[] = [];
lista27: any[] = [];
lista28: any[] = [];

lista29: any[] = [];
lista30: any[] = [];

lista31: any[] = [];
lista32: any[] = [];

lista33: any[] = [];
lista34: any[] = [];

lista35: any[] = [];
lista36: any[] = [];
lista37: any[] = [];
lista38: any[] = [];
lista39: any[] = [];
lista40: any[] = [];
lista41: any[] = [];
lista42: any[] = [];
lista43: any[] = [];
lista44: any[] = [];

valorTotal:number

lista45: any[] = [];
lista46: any[] = [];
lista47: any[] = [];
lista48: any[] = [];
lista49: any[] = [];
lista50: any[] = [];
lista51: any[] = [];
lista52: any[] = [];
lista53: any[] = [];
lista54: any[] = [];
lista55: any[] = [];
lista56: any[] = [];
lista57: any[] = [];
lista58: any[] = [];
lista59: any[] = [];
lista60: any[] = [];
lista61: any[] = [];
lista62: any[] = [];
lista63: any[] = [];
lista64: any[] = [];
lista65: any[] = [];
lista66: any[] = [];
lista67: any[] = [];
lista68: any[] = [];
lista69: any[] = [];
lista70: any[] = [];
lista71: any[] = [];
lista72: any[] = [];
palco:Palco
cargando = false;
cargadoTodo = false;
idLocalidad;
referenceCode:string
localidadCargada: Localidad;
localidadCargadaGeneral: Localidad;
localidadCargadaPreferecial: Localidad;

localidadCargadaBoletas: Localidad;
localidadCargadaBoletasVIP: Localidad;

etapas: Etapa[] = [];
usuarioEntidad:Cliente

ccDeBusqueda:number
  constructor(private servicio: PuntosFisicosDataService ,private dialog:MatDialog, private etapaServicio:EtapasDataService,private servicioBoletas: BoletasDataService, private route: ActivatedRoute,private autenticador: HardcodedAutheticationService, private eventosServicio:EventoDataService,    private servicioLocalidad: LocalidadesDataService,    private palcoServicio: PalcosDataService, private clienteServicio: UsuariosDataService) { }

  ngOnInit(): void {
    this.referenceCode = 'PALCO;';
    this.valorTotal=0
    this.cargando=false
    this.cargadoTodo =false
    this.lista1 = [];
    this.lista2 = [];
    this.lista3 = [];
    this.lista4 = [];
    this.lista5 = [];
    this.lista6 = [];
    this.lista7 = [];
    this.lista8 = [];

    this.lista9 = [];
    this.lista10 = [];

    this.lista11 = [];
    this.lista21 = [];

    this.lista13 = [];
    this.lista14 = [];

    this.lista15 = [];
    this.lista16 = [];
    this.lista17 = [];
    this.lista18 = [];
    this.lista19 = [];
    this.lista20 = [];

    this.lista21 = [];
    this.lista22 = [];
    this.lista23 = [];
    this.lista24 = [];
    this.lista25 = [];
    this.lista26 = [];
    this.lista27 = [];
    this.lista28 = [];

    this.lista29 = [];
    this.lista30 = [];

    this.lista31 = [];
    this.lista32 = [];

    this.lista33 = [];
    this.lista34 = [];

    this.lista35 = [];
    this.lista36 = [];
    this.lista37 = [];
    this.lista38 = [];
    this.lista39 = [];
    this.lista40 = [];
    this.lista41 = [];
    this.lista42 = [];
    this.lista43 = [];
    this.lista44 = [];



    this.lista45 = [];
    this.lista46 = [];
    this.lista47 = [];
    this.lista48 = [];
    this.lista49 = [];
    this.lista50 = [];
    this.lista51 = [];
    this.lista52 = [];
    this.lista53 = [];
    this.lista54 = [];
    this.lista55 = [];
    this.lista56 = [];
    this.lista57 = [];
    this.lista58 = [];
    this.lista59 = [];
    this.lista60 = [];
    this.lista61 = [];
    this.lista62 = [];
    this.lista63 = [];
    this.lista64 = [];
    this.lista65 = [];
    this.lista66 = [];
    this.lista67 = [];
    this.lista68 = [];
    this.lista69 = [];
    this.lista70 = [];
    this.lista71 = [];
    this.lista72 = [];
    this.usuarioEntidad = {
      nombre: '',
      numeroDocumento: null,
      tipoDocumento: '',
      usuario: '',
      contrasena: '',
      celular: null,
      correo: '',
      direccion: '',
      publicidad: null,
      boletas: [],
      palcos: [],
    };  
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
      adicionales:[],
      oculto:null,
      dineroEntregado:null,
      ciudadNombre:null
    }

    this.localidadCargada = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };

    this.localidadCargadaPreferecial = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
    this.localidadCargadaGeneral = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
    this.localidadCargadaBoletas = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
    this.localidadCargadaBoletasVIP = {
      id: null,
      nombre: '',
      precio: null,
      boletas: [],
      servicio: null,
      nombreEtapa: null,
      boletasPatrocinio: [],
      palcos: [
        {
          id: null,
          nombre: null,
          nombreEvento: null,
          personasAdentro: 6,
          personasMaximas: null,
          precio: null,
          precioParcialPagado: null,
          reservado: null,
          servicio: null,
          vendido: null,
          numeroDentroDeEvento: null,
          fechaVendido: null,
          servicioIva: null,
          proceso: null,
          disponible: null,
          idLocalidad: null,
          reserva: null,
          precioAlterno: null,
          servicioAlterno: null,
          servicioIvaAlterno: null,
          adiciones: null,
          maximoAdiciones: null,
          precioAdicion: null,
          servicioAdicion: null,
          servicioIvaAdicion: null,
        },
      ],
      servicioPorcentaje: null,
      efectivo: false,
      maximoVender:null
    };
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
      servicioIva: null,
      proceso: null,
      disponible: null,
      idLocalidad: null,
      reserva: null,
      precioAlterno: null,
      servicioAlterno: null,
      servicioIvaAlterno: null,
      adiciones: null,
      maximoAdiciones: null,
      precioAdicion: null,
      servicioAdicion: null,
      servicioIvaAdicion: null,
    };


    this.user=this.autenticador.getPuntoFisico();
    this.servicio.getPuntoPorUsuario(this.user).subscribe(response=>{this.puntoFisico=response;
    
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');})
      this.eventosServicio.getEventoId(this.miId).subscribe(response=> 
        {
          
          this.handle(response)
        }
        
        );
    
    
    });
  }
  handle(response){
    if(response.visible)
    {
  
      this.evento =response
      this.etapaServicio.getAllEtapasVisiblesDeEvento(this.miId, true).subscribe(response =>{this.manejar(response);
   
        if (!this.evento.mapa) {
          this.servicioLocalidad.getLocaliddadPorId(this.idLocalidad, this.evento.id).subscribe((response) => {
            this.localidadCargada = response
          })
        }

        if (this.evento.mapa == 'mapa3') {

          this.ponerNumerosMapa3();
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'Palcos A Main Stage '
                  ) {
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                }

                  else if (this.etapas[i].localidades[j].nombre == 'Palcos B Main Stage') {
                    this.localidadCargada = this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'General') {
                    this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'VIP') {
                    this.localidadCargadaPreferecial =
                      this.etapas[i].localidades[j];
                      
                  }
                }
              }

              this.cargarLocalidadEnMapa3();
              this.cargadoTodo = true;
            });
        }

        else if (this.evento.mapa == 'mapa4') {

       
          this.etapaServicio
            .getAllEtapasVisiblesDeEvento(this.evento.id, true)
            .subscribe((response) => {

              this.etapas = response;



              for (let i = 0; i < this.etapas.length; i += 1) {
                for (let j = 0; j < this.etapas[i].localidades.length; j += 1) {


                  if (
                    this.etapas[i].localidades[j].nombre == 'Palcos'
                  ) {
                
                    this.localidadCargadaGeneral =
                      this.etapas[i].localidades[j];
                }

                  else if (this.etapas[i].localidades[j].nombre == 'Platea') {
                    this.localidadCargada = this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Balcón Delantero') {
                    this.localidadCargadaBoletas = this.etapas[i].localidades[j];
                    

                  }

                  else if (this.etapas[i].localidades[j].nombre == 'Balcón Posterior') {
                    this.localidadCargadaPreferecial =
                      this.etapas[i].localidades[j];
                      
                  }
                  else if (this.etapas[i].localidades[j].nombre == 'Segundo Balcón') {
                    this.localidadCargadaBoletasVIP =
                      this.etapas[i].localidades[j];
                      
                  }
                }
              }

              this.cargarLocalidadEnMapa4();
              this.cargadoTodo = true;
            });
        }
      
      })
    }
  }

  manejar(response){
    this.etapas=response
  }

  darCantidadDePalcos(localidad:Localidad){
    var contador =0;
    for(var i =0; i < localidad.palcos.length; i=i+1){
      if(localidad.palcos[i].vendido==false){
  
        contador = contador+1;
      }
    }
    return contador;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ImagenEventosComponent, {
      width: '600px',
      height:'100%',
      data: { mapaImagen: this.evento.mapaImagen }
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
    
  }
  cargarLocalidadEnMapa4(){

    for(let i=0;i<3;i++){


      if (
        this.localidadCargadaGeneral.boletas[i].vendida 
       || this.localidadCargadaGeneral.boletas[i].reserva 
      ) {
        this.lista31[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i].reservado) {
        this.lista31[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i].disponible) {
        this.lista31[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i].reservado && !this.localidadCargadaGeneral.boletas[i].vendida) {
        this.lista31[i] = {
          id:this.localidadCargadaGeneral.boletas[i].id,
          valor: this.localidadCargadaGeneral.boletas[i].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }


      if (
        this.localidadCargadaGeneral.boletas[i+5].vendida 
        || this.localidadCargadaGeneral.boletas[i+5].reserva 
      ) {
        this.lista33[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+5].reservado) {
        this.lista33[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+5].disponible) {
        this.lista33[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+5].reservado && !this.localidadCargadaGeneral.boletas[i+5].vendida) {
        this.lista33[i] = {
          id:this.localidadCargadaGeneral.boletas[i+5].id,
          valor: this.localidadCargadaGeneral.boletas[i+5].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }


          
    }

    for(let i=0;i<2;i++){

      
      if (
        this.localidadCargadaGeneral.boletas[i+3].vendida 
        || this.localidadCargadaGeneral.boletas[i+3].reserva 
      ) {
        this.lista32[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+3].reservado) {
        this.lista32[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+3].disponible) {
        this.lista32[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+3].reservado && !this.localidadCargadaGeneral.boletas[i+3].vendida) {
        this.lista32[i] = {
          id:this.localidadCargadaGeneral.boletas[i+3].id,
          valor: this.localidadCargadaGeneral.boletas[i+3].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }


      if (
        this.localidadCargadaGeneral.boletas[i+10].vendida 
        || this.localidadCargadaGeneral.boletas[i+10].reserva 
      ) {
        this.lista35[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+10].reservado) {
        this.lista35[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+10].disponible) {
        this.lista35[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
        
      }

      else if (!this.localidadCargadaGeneral.boletas[i+10].reservado && !this.localidadCargadaGeneral.boletas[i+10].vendida) {
        this.lista35[i] = {
          id:this.localidadCargadaGeneral.boletas[i+10].id,
          valor: this.localidadCargadaGeneral.boletas[i+10].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }


      if (
        this.localidadCargadaGeneral.boletas[i+8].vendida 
       || this.localidadCargadaGeneral.boletas[i+8].reserva 
      ) {
        this.lista34[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+8].reservado) {
        this.lista34[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+8].disponible) {
        this.lista34[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        };
      }
      else if (!this.localidadCargadaGeneral.boletas[i+8].reservado && !this.localidadCargadaGeneral.boletas[i+8].vendida) {
        this.lista34[i] = {
          id:this.localidadCargadaGeneral.boletas[i+8].id,
          valor: this.localidadCargadaGeneral.boletas[i+8].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }



      if (
        this.localidadCargadaGeneral.boletas[i+12].vendida 
        || this.localidadCargadaGeneral.boletas[i+12].reserva 
      ) {
        this.lista36[i] = {
          id:null,
          valor: 'v',
          localidad: 'norm',
          seleccionado:false
        };
      } else if (this.localidadCargadaGeneral.boletas[i+12].reservado) {
        this.lista36[i] = {
          id:null,
          valor: 'p',
          localidad: 'norm',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaGeneral.boletas[i+12].disponible) {
        this.lista36[i] = {
          id:null,
          valor: 'l',
          localidad: 'norm',
          seleccionado:false
        }}

      else if (!this.localidadCargadaGeneral.boletas[i+12].reservado && !this.localidadCargadaGeneral.boletas[i+12].vendida) {
        this.lista36[i] = {
          id:this.localidadCargadaGeneral.boletas[i+12].id,
          valor: this.localidadCargadaGeneral.boletas[i+12].seccionSilla,
          localidad: 'norm',
          seleccionado:false
        };
      }

    }

    

    for(let i=0;i<10;i++){
      
      if (
        this.localidadCargadaBoletasVIP.boletas[i].vendida 
        || this.localidadCargadaBoletasVIP.boletas[i].reserva 
      ) {
        this.lista1[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i].reservado) {
        this.lista1[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i].disponible) {
        this.lista1[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false
        };}

      else if (!this.localidadCargadaBoletasVIP.boletas[i].reservado && !this.localidadCargadaBoletasVIP.boletas[i].vendida) {
        this.lista1[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i].seccionSilla,
          localidad: 'oro',
          seleccionado:false
        };
      }
    
    }

    for(let i=0;i<34;i++){
      
      if (
        this.localidadCargadaBoletasVIP.boletas[i+10].vendida 
        || this.localidadCargadaBoletasVIP.boletas[i+10].reserva 
      ) {
        this.lista2[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+10].reservado) {
        this.lista2[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+10].disponible) {
        this.lista2[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false
        };}


      else if (!this.localidadCargadaBoletasVIP.boletas[i+10].reservado && !this.localidadCargadaBoletasVIP.boletas[i+10].vendida) {
        this.lista2[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+10].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+10].seccionSilla,
          localidad: 'oro',
        };
      }
    
    }


    for(let i=0;i<24;i++){

      if (
        this.localidadCargadaPreferecial.boletas[i+174].vendida 
      ||  this.localidadCargadaPreferecial.boletas[i+174].reserva 
      ) {
        this.lista17[i] = {
          id:null,
          valor: 'v',
          localidad: 'prem',
          seleccionado:false
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+174].reservado) {
        this.lista17[i] = {
          id:null,
          valor: 'p',
          localidad: 'prem',
          seleccionado:false,
        };     
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+174].disponible) {
        this.lista17[i] = {
          id:null,
          valor: 'l',
          localidad: 'prem',
          seleccionado:false,
        };}


      else if (!this.localidadCargadaPreferecial.boletas[i+174].reservado && !this.localidadCargadaPreferecial.boletas[i+174].vendida) {
        this.lista17[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+174].id,
          valor: this.localidadCargadaPreferecial.boletas[i+174].seccionSilla,
          localidad: 'prem',
          seleccionado:false,
        };
      }

      if (
        this.localidadCargadaPreferecial.boletas[i+48].vendida 
       || this.localidadCargadaPreferecial.boletas[i+48].reserva 
      ) {
        this.lista11[i] = {
          id:null,
          valor: 'v',
          localidad: 'prem',
          seleccionado:false,
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+48].reservado) {
        this.lista11[i] = {
          id:null,
          valor: 'p',
          localidad: 'prem',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+48].disponible) {
        this.lista11[i] = {
          id:null,
          valor: 'l',
          localidad: 'prem',
          seleccionado:false,
        };}


      else if (!this.localidadCargadaPreferecial.boletas[i+48].reservado && !this.localidadCargadaPreferecial.boletas[i+48].vendida) {
        this.lista11[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+48].id,
          valor: this.localidadCargadaPreferecial.boletas[i+48].seccionSilla,
          localidad: 'prem',
          seleccionado:false,
        };
      }
          
      
      if (
        this.localidadCargadaBoletasVIP.boletas[i+44].vendida 
        || this.localidadCargadaBoletasVIP.boletas[i+44].reserva 
      ) {
        this.lista3[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false,
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+44].reservado) {
        this.lista3[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }

      else if (!this.localidadCargadaBoletasVIP.boletas[i+44].disponible) {
        this.lista3[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false,
        };}

      else if (!this.localidadCargadaBoletasVIP.boletas[i+44].reservado && !this.localidadCargadaBoletasVIP.boletas[i+44].vendida) {
        this.lista3[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+44].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+44].seccionSilla,
          localidad: 'oro',
          seleccionado:false,
        };
      }

      if (
        this.localidadCargada.boletas[i].vendida 
        || this.localidadCargada.boletas[i].vendida 
      ) {
        this.lista21[i] = {
          id:null,
          valor: 'v',
          localidad: 'vip',
          seleccionado:false,
        };
      } else if (this.localidadCargada.boletas[i].reservado) {
        this.lista21[i] = {
          id:null,
          valor: 'p',
          localidad: 'vip',
          seleccionado:false,
        };
        
      }

      else if (!this.localidadCargada.boletas[i].disponible) {
        this.lista21[i] = {
          id:null,
          valor: 'l',
          localidad: 'vip',
          seleccionado:false,
        };
        
      }      
      else if (!this.localidadCargada.boletas[i].reservado && !this.localidadCargada.boletas[i].vendida) {
        this.lista21[i] = {
          id:this.localidadCargada.boletas[i].id,
          valor: this.localidadCargada.boletas[i].seccionSilla,
          localidad: 'vip',
          seleccionado:false,
        };
      }
    }


    for(let i=0;i<32;i++){
      
      if (
        this.localidadCargadaBoletasVIP.boletas[i+68].vendida 
        || this.localidadCargadaBoletasVIP.boletas[i+68].reserva 
      ) {
        this.lista4[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false,
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+68].reservado) {
        this.lista4[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+68].disponible) {
        this.lista4[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      
      else if (!this.localidadCargadaBoletasVIP.boletas[i+68].reservado && !this.localidadCargadaBoletasVIP.boletas[i+68].vendida) {
        this.lista4[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+68].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+68].seccionSilla,
          localidad: 'oro',
          seleccionado:false,
        };
      }




      if (
        this.localidadCargadaBoletasVIP.boletas[i+128].vendida 
        || this.localidadCargadaBoletasVIP.boletas[i+128].reserva 
      ) {
        this.lista6[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false,
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+128].reservado) {
        this.lista6[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+128].disponible) {
        this.lista6[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+128].reservado && !this.localidadCargadaBoletasVIP.boletas[i+128].vendida) {
        this.lista6[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+128].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+128].seccionSilla,
          localidad: 'oro',
          seleccionado:false,
        };
      }


      if (
        this.localidadCargadaBoletasVIP.boletas[i+160].vendida 
        ||
        this.localidadCargadaBoletasVIP.boletas[i+160].reserva 
      ) {
        this.lista7[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false,
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+160].reservado) {
        this.lista7[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+160].disponible) {
        this.lista7[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+160].reservado && !this.localidadCargadaBoletasVIP.boletas[i+160].vendida) {
        this.lista7[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+160].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+160].seccionSilla,
          localidad: 'oro',
          seleccionado:false,
        };
      }
         
    }


    for(let i=0;i<28;i++){
      
      if (
        this.localidadCargadaBoletasVIP.boletas[i+100].vendida 
        || this.localidadCargadaBoletasVIP.boletas[i+100].reserva 
      ) {
        this.lista5[i] = {
          id:null,
          valor: 'v',
          localidad: 'oro',
          seleccionado:false,
        };
      } else if (this.localidadCargadaBoletasVIP.boletas[i+100].reservado) {
        this.lista5[i] = {
          id:null,
          valor: 'p',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+100].disponible) {
        this.lista5[i] = {
          id:null,
          valor: 'l',
          localidad: 'oro',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaBoletasVIP.boletas[i+100].reservado && !this.localidadCargadaBoletasVIP.boletas[i+100].vendida) {
        this.lista5[i] = {
          id:this.localidadCargadaBoletasVIP.boletas[i+100].id,
          valor: this.localidadCargadaBoletasVIP.boletas[i+100].seccionSilla,
          localidad: 'oro',
          seleccionado:false,
        };
      }
         
    }

    for(let i=0;i<17;i++){
      if (
        this.localidadCargada.boletas[i+98].vendida 
        ||this.localidadCargada.boletas[i+98].reserva 
      ) {
        this.lista26[i] = {
          id:null,
          valor: 'v',
          localidad: 'vip',
          seleccionado:false,
        };
      } else if (this.localidadCargada.boletas[i+98].reservado) {
        this.lista26[i] = {
          id:null,
          valor: 'p',
          localidad: 'vip',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargada.boletas[i+98].disponible) {
        this.lista26[i] = {
          id:null,
          valor: 'l',
          localidad: 'vip',
          seleccionado:false,
        };
        
      }

      else if (!this.localidadCargada.boletas[i+98].reservado && !this.localidadCargada.boletas[i+98].vendida) {
        this.lista26[i] = {
          id:this.localidadCargada.boletas[i+98].id,
          valor: this.localidadCargada.boletas[i+98].seccionSilla,
          localidad: 'vip',
          seleccionado:false,
        };
      }

      if (
        this.localidadCargada.boletas[i+63].vendida 
        || this.localidadCargada.boletas[i+63].reserva 
      ) {
        this.lista24[i] = {
          id:null,
          valor: 'v',
          localidad: 'vip',
          seleccionado:false,
        };
      } else if (this.localidadCargada.boletas[i+63].reservado) {
        this.lista24[i] = {
          id:null,
          valor: 'p',
          localidad: 'vip',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargada.boletas[i+63].disponible) {
        this.lista24[i] = {
          id:null,
          valor: 'l',
          localidad: 'vip',
          seleccionado:false,
        };
      }


      else if (!this.localidadCargada.boletas[i+63].reservado && !this.localidadCargada.boletas[i+63].vendida) {
        this.lista24[i] = {
          id:this.localidadCargada.boletas[i+63].id,
          valor: this.localidadCargada.boletas[i+63].seccionSilla,
          localidad: 'vip',
          seleccionado:false,
        };
      }
      

      if (
        this.localidadCargadaPreferecial.boletas[i].vendida 
        || this.localidadCargadaPreferecial.boletas[i].reserva 
      ) {
        this.lista8[i] = {
          id:null,
          valor: 'v',
          localidad: 'prem',
          seleccionado:false,
        };
      } else if (this.localidadCargadaPreferecial.boletas[i].reservado) {
        this.lista8[i] = {
          id:null,
          valor: 'p',
          localidad: 'prem',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i].disponible) {
        this.lista8[i] = {
          id:null,
          valor: 'l',
          localidad: 'prem',
          seleccionado:false,
        };}

      else if (!this.localidadCargadaPreferecial.boletas[i].reservado && !this.localidadCargadaPreferecial.boletas[i].vendida) {
        this.lista8[i] = {
          id:this.localidadCargadaPreferecial.boletas[i].id,
          valor: this.localidadCargadaPreferecial.boletas[i].seccionSilla,
          localidad: 'prem',
          seleccionado:false,
        };
      }

    }



    for(let i=0;i<15;i++){

      if (
        this.localidadCargadaPreferecial.boletas[i+33].vendida 
        || this.localidadCargadaPreferecial.boletas[i+33].reserva 
      ) {
        this.lista10[i] = {
          id:null,
          valor: 'v',
          localidad: 'prem',
          seleccionado:false,
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+33].reservado) {
        this.lista10[i] = {
          id:null,
          valor: 'p',
          localidad: 'prem',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+33].disponible) {
        this.lista10[i] = {
          id:null,
          valor: 'l',
          localidad: 'prem',
          seleccionado:false,
        };
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+33].reservado && !this.localidadCargadaPreferecial.boletas[i+33].vendida) {
        this.lista10[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+33].id,
          valor: this.localidadCargadaPreferecial.boletas[i+33].seccionSilla,
          localidad: 'prem',
          seleccionado:false,
        };
      }


      if (
        this.localidadCargadaPreferecial.boletas[i+72].vendida 
        || this.localidadCargadaPreferecial.boletas[i+72].reserva 
      ) {
        this.lista12[i] = {
          id:null,
          valor: 'v',
          localidad: 'prem',
          seleccionado:false,
        };
      } else if (this.localidadCargadaPreferecial.boletas[i+72].reservado) {
        this.lista12[i] = {
          id:null,
          valor: 'p',
          localidad: 'prem',
          seleccionado:false,
        };
        
      }
      else if (!this.localidadCargadaPreferecial.boletas[i+72].disponible) {
        this.lista12[i] = {
          id:null,
          valor: 'l',
          localidad: 'prem',
          seleccionado:false,
        };}
      else if (!this.localidadCargadaPreferecial.boletas[i+72].reservado && !this.localidadCargadaPreferecial.boletas[i+72].vendida) {
        this.lista12[i] = {
          id:this.localidadCargadaPreferecial.boletas[i+72].id,
          valor: this.localidadCargadaPreferecial.boletas[i+72].seccionSilla,
          localidad: 'prem',
          seleccionado:false,
        };
      }

    }




for(let i=0; i<14;i++){
  if (
    this.localidadCargada.boletas[i+115].vendida 
    || this.localidadCargada.boletas[i+115].reserva 
  ) {
    this.lista27[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargada.boletas[i+115].reservado) {
    this.lista27[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
    
  }

  else if (!this.localidadCargada.boletas[i+115].disponible) {
    this.lista27[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}

  else if (!this.localidadCargada.boletas[i+115].reservado && !this.localidadCargada.boletas[i+115].vendida) {
    this.lista27[i] = {
      id:this.localidadCargada.boletas[i+115].id,
      valor: this.localidadCargada.boletas[i+115].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}

  for(let i=0; i <19; i ++){
      

    if (
      this.localidadCargadaPreferecial.boletas[i+114].vendida
      || this.localidadCargadaPreferecial.boletas[i+114].reserva 
    ) {
      this.lista14[i] = {
        id:null,
        valor: 'v',
        localidad: 'prem',
        seleccionado:false,
      };
    } else if (this.localidadCargadaPreferecial.boletas[i+114].reservado) {
      this.lista14[i] = {
        id:null,
        valor: 'p',
        localidad: 'prem',
        seleccionado:false,
      };  
    }
    else if (!this.localidadCargadaPreferecial.boletas[i+114].disponible) {
      this.lista14[i] = {
        id:null,
        valor: 'l',
        localidad: 'prem',
        seleccionado:false,
      };  
    }
    

    else if (!this.localidadCargadaPreferecial.boletas[i+114].reservado && !this.localidadCargadaPreferecial.boletas[i+114].vendida) {
      this.lista14[i] = {
        id:this.localidadCargadaPreferecial.boletas[i+114].id,
        valor: this.localidadCargadaPreferecial.boletas[i+114].seccionSilla,
        localidad: 'prem',
        seleccionado:false,
      };
    }


    if (
      this.localidadCargada.boletas[i+24].vendida 
      || this.localidadCargada.boletas[i+24].reserva 
    ) {
      this.lista22[i] = {
        id:null,
        valor: 'v',
        localidad: 'vip',
        seleccionado:false,
      };
    } else if (this.localidadCargada.boletas[i+24].reservado) {
      this.lista22[i] = {
        id:null,
        valor: 'p',
        localidad: 'vip',
        seleccionado:false,
      };
      
    }
    else if (!this.localidadCargada.boletas[i+24].disponible) {
      this.lista22[i] = {
        id:null,
        valor: 'l',
        localidad: 'vip',
        seleccionado:false,
      };}

    else if (!this.localidadCargada.boletas[i+24].reservado && !this.localidadCargada.boletas[i+24].vendida) {
      this.lista22[i] = {
        id:this.localidadCargada.boletas[i+24].id,
        valor: this.localidadCargada.boletas[i+24].seccionSilla,
        localidad: 'vip',
        seleccionado:false,
      };
    }
}


for(let i=0; i <20; i ++){

  

  if (
    this.localidadCargadaPreferecial.boletas[i+133].vendida 
    || this.localidadCargadaPreferecial.boletas[i+133].reserva 
  ) {
    this.lista15[i] = {
      id:null,
      valor: 'v',
      localidad: 'prem',
      seleccionado:false,
    };
  } else if (this.localidadCargadaPreferecial.boletas[i+133].reservado) {
    this.lista15[i] = {
      id:null,
      valor: 'p',
      localidad: 'prem',
      seleccionado:false,
    };
    
  }
  else if (!this.localidadCargadaPreferecial.boletas[i+133].disponible) {
    this.lista15[i] = {
      id:null,
      valor: 'l',
      localidad: 'prem',
      seleccionado:false,
    };}
  else if (!this.localidadCargadaPreferecial.boletas[i+133].reservado && !this.localidadCargadaPreferecial.boletas[i+133].vendida) {
    this.lista15[i] = {
      id:this.localidadCargadaPreferecial.boletas[i+133].id,
      valor: this.localidadCargadaPreferecial.boletas[i+133].seccionSilla,
      localidad: 'prem',
      seleccionado:false,
    };
  }


  if (
    this.localidadCargada.boletas[i+43].vendida 
    || this.localidadCargada.boletas[i+43].reserva 
  ) {
    this.lista23[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargada.boletas[i+43].reservado) {
    this.lista23[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
  }
  else if (!this.localidadCargada.boletas[i+43].disponible) {
    this.lista23[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}

  else if (!this.localidadCargada.boletas[i+43].reservado && !this.localidadCargada.boletas[i+43].vendida) {
    this.lista23[i] = {
      id:this.localidadCargada.boletas[i+43].id,
      valor: this.localidadCargada.boletas[i+43].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}

for(let i=0; i <21; i ++){
      

  if (
    this.localidadCargadaPreferecial.boletas[i+153].vendida 
    || this.localidadCargadaPreferecial.boletas[i+153].reserva 
  ) {
    this.lista16[i] = {
      id:null,
      valor: 'v',
      localidad: 'prem',
      seleccionado:false,
    };
  } else if (this.localidadCargadaPreferecial.boletas[i+153].reservado) {
    this.lista16[i] = {
      id:null,
      valor: 'p',
      localidad: 'prem',
      seleccionado:false,
    };
    
  }
  else if (!this.localidadCargadaPreferecial.boletas[i+153].disponible) {
    this.lista16[i] = {
      id:null,
      valor: 'l',
      localidad: 'prem',
      seleccionado:false,
    };}
  else if (!this.localidadCargadaPreferecial.boletas[i+153].reservado && !this.localidadCargadaPreferecial.boletas[i+153].vendida) {
    this.lista16[i] = {
      id:this.localidadCargadaPreferecial.boletas[i+153].id,
      valor: this.localidadCargadaPreferecial.boletas[i+153].seccionSilla,
      localidad: 'prem',
      seleccionado:false,
    };
  }


  if (
    this.localidadCargada.boletas[i+142].vendida 
    || this.localidadCargada.boletas[i+142].reserva 
  ) {
    this.lista29[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargada.boletas[i+142].reservado) {
    this.lista29[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
    }
    else if (!this.localidadCargada.boletas[i+142].disponible) {
      this.lista29[i] = {
        id:null,
        valor: 'l',
        localidad: 'vip',
        seleccionado:false,
      };}

  else if (!this.localidadCargada.boletas[i+142].reservado && !this.localidadCargada.boletas[i+142].vendida) {
    this.lista29[i] = {
      id:this.localidadCargada.boletas[i+142].id,
      valor: this.localidadCargada.boletas[i+142].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}




for(let i=0; i <26; i ++){

 
      

  if (
    this.localidadCargadaBoletas.boletas[i].vendida 
    || this.localidadCargadaBoletas.boletas[i].reserva 
  ) {
    this.lista18[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargadaBoletas.boletas[i].reservado) {
    this.lista18[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };    
  }
  else if (!this.localidadCargadaBoletas.boletas[i].disponible) {
    this.lista18[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}
  else if (!this.localidadCargadaBoletas.boletas[i].reservado && !this.localidadCargadaBoletas.boletas[i].vendida) {
    this.lista18[i] = {
      id:this.localidadCargadaBoletas.boletas[i].id,
      valor: this.localidadCargadaBoletas.boletas[i].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}

for(let i=0;i <18;i++){
  
  if (
    this.localidadCargada.boletas[i+80].vendida 
    || this.localidadCargada.boletas[i+80].reserva
  ) {
    this.lista25[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargada.boletas[i+80].reservado) {
    this.lista25[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
    
  }
  else if (!this.localidadCargada.boletas[i+80].disponible) {
    this.lista25[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}

  else if (!this.localidadCargada.boletas[i+80].reservado && !this.localidadCargada.boletas[i+80].vendida) {
    this.lista25[i] = {
      id:this.localidadCargada.boletas[i+80].id,
      valor: this.localidadCargada.boletas[i+80].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}

for(let i=0; i <25; i ++){
      

  if (
    this.localidadCargadaBoletas.boletas[i+26].vendida 
    || this.localidadCargadaBoletas.boletas[i+26].reserva
  ) {
    this.lista19[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargadaBoletas.boletas[i+26].reservado) {
    this.lista19[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
    
  }
  else if (!this.localidadCargadaBoletas.boletas[i+26].disponible) {
    this.lista19[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}

  else if (!this.localidadCargadaBoletas.boletas[i+26].reservado && !this.localidadCargadaBoletas.boletas[i+26].vendida) {
    this.lista19[i] = {
      id:this.localidadCargadaBoletas.boletas[i+26].id,
      valor: this.localidadCargadaBoletas.boletas[i+26].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}




for(let i=0; i <23; i ++){

  


  if (
    this.localidadCargadaBoletas.boletas[i+51].vendida 
    || this.localidadCargadaBoletas.boletas[i+51].reserva
  ) {
    this.lista20[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargadaBoletas.boletas[i+51].reservado) {
    this.lista20[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
    
  }
  else if (!this.localidadCargadaBoletas.boletas[i+51].disponible) {
    this.lista20[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}

  else if (!this.localidadCargadaBoletas.boletas[i+51].reservado && !this.localidadCargadaBoletas.boletas[i+51].vendida) {
    this.lista20[i] = {
      id:this.localidadCargadaBoletas.boletas[i+51].id,
      valor: this.localidadCargadaBoletas.boletas[i+51].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }



}

for(let i=0;i <13; i++) {


  if (
    this.localidadCargada.boletas[i+129].vendida 
    || this.localidadCargada.boletas[i+129].reserva
  ) {
    this.lista28[i] = {
      id:null,
      valor: 'v',
      localidad: 'vip',
      seleccionado:false,
    };
  } else if (this.localidadCargada.boletas[i+129].reservado) {
    this.lista28[i] = {
      id:null,
      valor: 'p',
      localidad: 'vip',
      seleccionado:false,
    };
    
  }
  else if (!this.localidadCargada.boletas[i+129].disponible) {
    this.lista28[i] = {
      id:null,
      valor: 'l',
      localidad: 'vip',
      seleccionado:false,
    };}

  else if (!this.localidadCargada.boletas[i+129].reservado && !this.localidadCargada.boletas[i+129].vendida) {
    this.lista28[i] = {
      id:this.localidadCargada.boletas[i+129].id,
      valor: this.localidadCargada.boletas[i+129].seccionSilla,
      localidad: 'vip',
      seleccionado:false,
    };
  }
}

  for(let i =0; i < 9; i++){
    if (
      this.localidadCargada.boletas[i+163].vendida 
      || this.localidadCargada.boletas[i+163].reserva
    ) {
      this.lista30[i] = {
        id:null,
        valor: 'v',
        localidad: 'vip',
        seleccionado:false,
      };
    } else if (this.localidadCargada.boletas[i+163].reservado) {
      this.lista30[i] = {
        id:null,
        valor: 'p',
        localidad: 'vip',
        seleccionado:false,
      };
      
    }
    else if (!this.localidadCargada.boletas[i+163].disponible) {
      this.lista30[i] = {
        id:null,
        valor: 'l',
        localidad: 'vip',
        seleccionado:false,
      };}

    else if (!this.localidadCargada.boletas[i+163].reservado && !this.localidadCargada.boletas[i+163].vendida) {
      this.lista30[i] = {
        id:this.localidadCargada.boletas[i+163].id,
        valor: this.localidadCargada.boletas[i+163].seccionSilla,
        localidad: 'vip',
        seleccionado:false,
      };
    }
  }

  for(let i =0;i <16; i++) {

    
    if (
      this.localidadCargadaPreferecial.boletas[i+17].vendida 
      || this.localidadCargadaPreferecial.boletas[i+17].reserva
    ) {
      this.lista9[i] = {
        id:null,
        valor: 'v',
        localidad: 'prem',
        seleccionado:false,
      };
    } else if (this.localidadCargadaPreferecial.boletas[i+17].reservado) {
      this.lista9[i] = {
        id:null,
        valor: 'p',
        localidad: 'prem',
        seleccionado:false,
      };
      
    }
    else if (!this.localidadCargadaPreferecial.boletas[i+17].disponible) {
      this.lista9[i] = {
        id:null,
        valor: 'l',
        localidad: 'prem',
        seleccionado:false,
      };}

    else if (!this.localidadCargadaPreferecial.boletas[i+17].reservado && !this.localidadCargadaPreferecial.boletas[i+17].vendida) {
      this.lista9[i] = {
        id:this.localidadCargadaPreferecial.boletas[i+17].id,
        valor: this.localidadCargadaPreferecial.boletas[i+17].seccionSilla,
        localidad: 'prem',
        seleccionado:false,
      };
    }
   

  }

  for(let i=0; i<27; i++) {
    if (
      this.localidadCargadaPreferecial.boletas[i+87].vendida 
      || this.localidadCargadaPreferecial.boletas[i+87].reserva
    ) {
      this.lista13[i] = {
        id:null,
        valor: 'v',
        localidad: 'prem',
        seleccionado:false,
      };
    } else if (this.localidadCargadaPreferecial.boletas[i+87].reservado) {
      this.lista13[i] = {
        id:null,
        valor: 'p',
        localidad: 'prem',
        seleccionado:false,
      };
      
    }
    else if (!this.localidadCargadaPreferecial.boletas[i+87].disponible) {
      this.lista13[i] = {
        id:null,
        valor: 'l',
        localidad: 'prem',
        seleccionado:false,
      };}

    else if (!this.localidadCargadaPreferecial.boletas[i+87].reservado && !this.localidadCargadaPreferecial.boletas[i+87].vendida) {
      this.lista13[i] = {
        id:this.localidadCargadaPreferecial.boletas[i+87].id,
        valor: this.localidadCargadaPreferecial.boletas[i+87].seccionSilla,
        localidad: 'prem',
        seleccionado:false,
      };
    }
  }
}
  




seleccionarTicketExacto(item){


  if(item.seleccionado ==false){
  let idBoleta = item.id;

  if(idBoleta!=null){
    if(this.usuarioEntidad!=null && this.usuarioEntidad.numeroDocumento!=null) {

    if(!this.cargando && this.cargadoTodo){
    
 
      this.cargando=true
      this.servicioBoletas.reservarBoletaExacta(idBoleta).subscribe ((response)=>{
        if(response !=null){
          item.seleccionado=true;
          this.boletas.push(response)

          this.cargando=false
        }
        if(this.boletas.length ==1){
          alert("Selecciona todos los tickets que deseas comprar y presiona en agregar al carrito en la parte inferior")
        }

      },
      (error)=>{
        alert("Selecciona otro Tickets, este ya fue seleccionado")
        let esmio =false;
        for(let i=0; i<this.boletas.length; i++){
          if(this.boletas[i].id == idBoleta){
         
            esmio=true
          }
        }
        if(!esmio)
        this.ngOnInit();
      }
      
      ) 
    
  
  }
  else{
    alert ("Cargando el mapa por favor vuelva a sell")
  }
  }

  else {
    alert('No hay un cliente seleccionado')
 
  }
}
}
else if(item.seleccionado==true){
  this.deseleccionarTicket(item)
}
}

deseleccionarTicket(item){

  if(!this.cargando){
    this.cargando=true
  let idBoleta=item.id;


  for(let i=0; i<this.boletas.length; i++){
    if(this.boletas[i].id == idBoleta){
      this.boletas.splice(i,1)
 
   
      this.servicioBoletas.cambiarReservado(idBoleta).subscribe((response)=>{
        response;
        item.seleccionado=false;
        this.cargando=false
      })
    }
  }
}
}



agregarAlCarritoTickets(){
  this.referenceCode = 'TICKET;' + this.usuarioEntidad.numeroDocumento + ',';
  for(var i =0; i < this.boletas.length; i++){
    this.referenceCode  = this.referenceCode+ this.boletas[i].id +"_"
    this.valorTotal = this.valorTotal + this.boletas[i].precio  +this.boletas[i].servicio +this.boletas[i].servicioIva
  }

  this.referenceCode = this.referenceCode + "-1"
  this.referenceCode = this.referenceCode +"," + this.boletas[0].nombreEvento +"," + new Date()
  
  this.AbrirCarritoTicket()
}




AbrirCarritoTicket(): void {
    
  const dialogRef = this.dialog.open(CarritoDeComprasPuntosFisicosComponent, {
    width: '100%',
    height: '85%',

    data: {
      valorTotal: this.valorTotal,
      boletas: this.boletas,
      evento: this.evento,
      usuarioEntidad: this.usuarioEntidad,
      referenceCode: this.referenceCode,
      efectivo: false,
      codigoVenta: this.puntoFisico.numeroDocumento,
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    this.dialog.closeAll();
    this.servicioBoletas
      .rechazarReservaBoletaInstantaneamente(this.boletas)
      .subscribe((response) => {
        response;
        this.ngOnInit();
      });
  });

  

}



  
  ponerNumerosMapa3() {
    for(let i=1;i<6;i++){
      this.lista1[i-1] = {
        valor: 'A'+ i,
        localidad: 'oro',
      };

      this.lista3[i-1] = {
        valor: 'B'+ i,
        localidad: 'prem',
      };

    
     
    }
   for(let i=0;i<5;i++){
    this.lista2[i-1] = {
      valor: 'A'+ (i+5),
      localidad: 'oro',
    };
    

    this.lista4[i-1] = {
      valor: 'B'+ (i+5),
      localidad: 'prem',
    };
    this.lista5[i-1] = {
      valor: 'v',
      localidad: 'prem',
    }
   }
  }

  cargarLocalidadEnMapa3(){
    for(let i=0;i<5;i++){
      if (
        this.localidadCargadaGeneral.palcos[i].vendido ||
        this.localidadCargadaGeneral.palcos[i].reservado ||
        !this.localidadCargadaGeneral.palcos[i].disponible
      ) {
        this.lista1[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i].proceso) {
        this.lista1[i].valor = 'p';
      }


      if (
        this.localidadCargada.palcos[i].vendido ||
        this.localidadCargada.palcos[i].reservado ||
        !this.localidadCargada.palcos[i].disponible
      ) {
        this.lista3[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i].proceso) {
        this.lista3[i].valor = 'p';
      }

 
      
    }
    for(let i=0;i<4;i++){

      if (
        this.localidadCargadaGeneral.palcos[i+5].vendido ||
        this.localidadCargadaGeneral.palcos[i+5].reservado ||
        !this.localidadCargadaGeneral.palcos[i+5].disponible
      ) {
        this.lista2[i].valor = 'v';
      } else if (this.localidadCargadaGeneral.palcos[i+5].proceso) {
        this.lista2[i].valor = 'p';
      }

      if (
        this.localidadCargada.palcos[i+5].vendido ||
        this.localidadCargada.palcos[i+5].reservado ||
        !this.localidadCargada.palcos[i+5].disponible
      ) {
        this.lista4[i].valor = 'v';
      } else if (this.localidadCargada.palcos[i+5].proceso) {
        this.lista4[i].valor = 'p';
      }
    }

  
    
  }


  
   
  abrirTickets(localidad: Localidad) {
    if (this.usuarioEntidad!=null && this.usuarioEntidad.numeroDocumento!=null) {
      if(!this.cargando && this.cargadoTodo)
      {
    
        
        this.referenceCode = 'TICKET;' + this.usuarioEntidad.numeroDocumento + ',';
        this.cantidadBoletas(localidad);
     
     
    }
    else{
      alert('Cargando por favor espere')
    }
    }

    else {
      alert('No hay un cliente activo, por favor buscalo')
    }
  }

  cantidadBoletas(localidad: Localidad) {
  

    const dialogRef = this.dialog.open(CantidadBoletasPuntoFisicoComponent, {
      width: '600px',


      data: {
        idLocalidad: localidad.id,
        referenceCode: this.referenceCode,

        evento: this.evento,
       
        codigoVenta: this.puntoFisico.numeroDocumento,
        usuarioEntidad: this.usuarioEntidad,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();

      this.ngOnInit();

    });
  }

  
  agregarPalcoIndividual(numero) {
    
    if(this.usuarioEntidad!=null && this.usuarioEntidad.numeroDocumento!=null)
    {
        if (
          numero != 'v' &&
          numero != 'p' &&
          numero != 'l' ) {
          if (!this.cargando &&this.cargadoTodo) {
    
    
            
      
              this.cargando = true;
              this.palcoServicio
                .getPalcoParaCompraIndividual(this.evento.nombre, numero)
                .subscribe((response) => {
                  this.palco = response;
    
                  this.referenceCode =
                    'PALCO;' + this.usuarioEntidad.numeroDocumento + ',';
                  if (this.palco == null) {
                    alert('Agregar un Palco para continuar');
                  } else {
    
    
    
                    this.palcoServicio.getLocalidadDelPalco(this.palco.id).subscribe((response=>{response
    
    
    
             if(this.darCantidadDePalcosDisponiblesEtapas(response) >0){
                    this.palcoServicio.reservarPalcoExacto(this.palco.id).subscribe(
                      (response) => {
                        response;
    
                        this.referenceCode =
                          this.referenceCode +
                          this.palco.id +
                          ',' +
                          this.palco.nombreEvento +
                          ',' +
                          new Date();
                        this.cargando = false;
    
                        this.valorTotal =
                          this.palco.precio +
                          this.palco.servicio +
                          this.palco.servicioIva;
    
                 
                     
                       
    
                        
    
                          this.AbrirCarrito();
                          if (!this.localidadCargada.efectivo) {
                            this.palcoServicio
                              .rechazarReservaPalco(this.palco.id)
                              .subscribe((response) => response);
                          } else {
                            this.palcoServicio
                              .rechazarReservaPalcoEfectivo(this.palco.id)
                              .subscribe((response) => {
                                response;
                              });
                          }
                      
                      },
    
                      (error) => {
                        error;
                        alert(
                          'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
                        );
                        this.cargando = false;
                        this.ngOnInit();
                      }
                    );
                  
                          
                      }
                    else{
                      this.cargando = false;
                      this.ngOnInit();
                      alert("La etapa de esta localidad se ha agotado, espera unos minutos que se abrira la nueva etapa")
                    }
                    }))
    
                  }
                });
          
    
          }
          else {
            alert('Cargando por favor espere')
          }
          } 
       
        }


        else
        {
          alert('No hay un cliente activo, por favor buscalo')
          
        }
    
    
      }



      
  darCantidadDePalcosDisponiblesEtapas(localidad:Localidad){
    var contador =localidad.maximoVender;
    for(var i =0; i < localidad.palcos.length; i=i+1){
      if(localidad.palcos[i].vendido==true || localidad.palcos[i].proceso==true|| localidad.palcos[i].reservado==true){
  
        contador = contador-1;
      }
    }
    return contador;
  }
  buscarCliente(){
    this.clienteServicio.getClientePorId(this.ccDeBusqueda).subscribe((response)=>{

      this.usuarioEntidad = response;
      if(response==null){
        alert("No se encontro el cliente")
      }
    },
    (error)=>{
      alert("No encontro al usuario")
    }
    )
  }
  
  AbrirCarrito(): void {
    this.carrito();
  }


  carrito() {
 
    const dialogRef = this.dialog.open(CarritoDeComprasPuntosFisicosComponent, {
      width: '100%',
      height: '85%',

      data: {
        valorTotal: this.valorTotal,
        palco: this.palco,
        evento: this.evento,
        usuarioEntidad: this.usuarioEntidad,
        codigoVenta: this.puntoFisico.numeroDocumento,
        referenceCode: this.referenceCode
 
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();
      this.palcoServicio
        .rechazarReservaPalcoInmediatamente(this.palco.id)
        .subscribe((response) => {
          response;
          this.ngOnInit();
        });
    });
  }
}


