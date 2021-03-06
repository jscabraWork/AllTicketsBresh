import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Evento } from 'src/app/eventos/evento.model';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { EtapasDataService } from 'src/app/service/data/etapas-data.service';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { PromotorDataService } from 'src/app/service/data/promotor-data.service';

import { ReservasDataService } from 'src/app/service/data/reservas-data.service';
import { HardcodedAutheticationService } from 'src/app/service/hardcoded-authetication.service';
import { Promotor } from '../../promotor.model';
import { ReservarComponent } from './reservar/reservar.component';
import { LocalidadesDataService } from 'src/app/service/data/localidades-data.service';
import { ReservarBoletasComponent } from './reservar/reservar-boletas/reservar-boletas.component';
@Component({
  selector: 'app-localidad-promotor',
  templateUrl: './localidad-promotor.component.html',
  styleUrls: ['./localidad-promotor.component.css']
})
export class LocalidadPromotorComponent implements OnInit {
  miId: string
  evento: Evento;
  etapas: Etapa[] = [];
  user: string
  promotor: Promotor
  localidad: Localidad
  idLocalidad
  cargando:boolean
  uso:boolean
  vender:boolean 
  cantidad:number
  
  constructor(private servicio: PromotorDataService,
    private autenticador: HardcodedAutheticationService
    , private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: EventoDataService,
    private etapaServicio: EtapasDataService,
    private palcoServicio: PalcosDataService,
    private reservaServicio: ReservasDataService,

    private servicioLocalidad: LocalidadesDataService
    ) { }


  ngOnInit(): void {
    this.cantidad=0
    this.vender =false
    this.uso=true
    this.cargando=false
    this.etapas= [];
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
    this.promotor = {
      boletasVendidas: [],
      codigoventa: null,
      contrasena: null,
      dineroTotal: null,
      nombre: null,
      numeroDocumento: null,
      tipo: null,
      tipoDocumento: null,
      usuario: null,
      boletasCanjeadas: [],
      palcosCanjeados: [],
      palcosVendidos: [],
      celular: null,
      correo: null,
      eventos: []
    }

    this.evento = new Evento();







    this.route.paramMap.subscribe(params => {
      this.miId = params.get('id');
      this.idLocalidad = params.get('idLocalidad')
      this.service.getEventoId(this.miId).subscribe(response => {
        this.handleGetSuccesfull(response);
        this.user = this.autenticador.getPromotor()

        this.servicio.getPromotorByUsuario(this.user).subscribe(response => {
    
          this.promotor = response
          this.palcoServicio.revisarUsoBeneficio(this.promotor.numeroDocumento,this.evento.nombre).subscribe(response => {
            this.uso = response
          })

        },
          error => {
            alert('Sucedio un error por favor intente m??s tarde')
          })
        

        this.etapaServicio.getAllEtapasVisiblesDeEvento(this.evento.id, true).subscribe(r => {
          this.manejar(r);


          this.etapaServicio.getAllEtapasVisiblesPromotor(this.evento.id,true).subscribe(response=>{
          
            this.etapas= this.etapas.concat(response)
    
            for (let i = 0; i < this.etapas.length; i++) {
              console.log(this.etapas.length);
              for (let j = 0; j < this.etapas[i].localidades.length; j++) {
  
                if (this.etapas[i].localidades[j].id == this.idLocalidad) {
                  this.localidad = this.etapas[i].localidades[j];
                }
              }
  
            
            }
            let numeros = [this.localidad.id]
            this.servicioLocalidad.getBoletasLocalidades(numeros).subscribe(response=>{
              console.log(response)
              this.localidad.boletas = response[0]
            })
            
              var contador =this.localidad.maximoVender;
              for(var i =0; i < this.localidad.palcos.length; i=i+1){
                if(this.localidad.palcos[i].vendido==true || this.localidad.palcos[i].proceso==true|| this.localidad.palcos[i].reservado==true){
            
                  contador = contador-1;
                }
              }
         
            if(contador>0){
              this.vender=true
            }
            })


         


        })



      });


    })
  }

  


  handleGetSuccesfull(response) {
    if (response.visible || response.oculto) {
      this.evento = response;
    }
  }

  manejar(response) {
    this.etapas = response;
  }

  agregarPalcoIndividual(numero) {

    if(!this.cargando){
      this.cargando = true
    this.palcoServicio
      .getPalcoParaCompraIndividualID(numero)
      .subscribe((response) => {
        let a = response;
        console.log(a)
        if(!a.reservado && !a.proceso && !a.vendido){
        console.log("A")
        this.palcoServicio.reservarPalcoExacto(response.id).subscribe(response=>{
          response
          
          if((a.precio+a.servicio+a.servicioIva)<=this.localidad.precio+this.localidad.servicio+this.localidad.servicioPorcentaje){
          this.palcoServicio.acomodarPreciosOriginales(a.id).subscribe(response=>{
            response
            this.reservar(a)
          })
        }
        else{
          this.reservar(a)
        }

        });
        
      }
      else{
        alert(
          'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
        );
      }
        
      },

        (error) => {
          console.log(error)
          error;
          alert(
            'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
          );

          this.ngOnInit();
        }
      );
    }
  }

  agregarPalcoIndividualPromotor(numero) {

    if(!this.cargando){
      this.cargando = true
    this.palcoServicio
      .getPalcoParaCompraIndividual(this.evento.nombre, numero)
      .subscribe((response) => {
        let a = response;
        console.log(a)
        if(!a.reservado && !a.proceso && !a.vendido){
        console.log("A")
        this.palcoServicio.reservarPalcoExacto(response.id).subscribe(response=>{
          response
          this.palcoServicio.acomodarPreciosAlternos(a.id).subscribe(response=>{
            response
            this.reservar(a)
          })
          
        });
      }
      else{
        alert(
          'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
        );
      }
        
      },

        (error) => {
          console.log(error)
          error;
          alert(
            'Alguien acaba de seleccionar este palco, intenta seleccionar otro'
          );

          this.ngOnInit();
        }
      );
    }
  }

  reservar(response: Palco) {
    const dialogRef = this.dialog.open(ReservarComponent, {
      width: '70%',
      height: '60%',

      data: {
        palco: response,
        promotorId:this.promotor.numeroDocumento
      },
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.ngOnInit()
    })
  }

  elminarReserva(idReserva){
    this.reservaServicio.deleteReserva(idReserva).subscribe(response=>{
      
      this.ngOnInit()
    })
  }

  reservarBoletasPorLocalidad() {
    this.cantidad = this.cantidad+1;
  }
  quitaBoletaLocalidad(){
    if(this.cantidad>0){
    this.cantidad = this.cantidad-1;
    }
  }

  reservarBoleta(){
  if(this.cantidad>0 && !this.cargando){
    this.cargando = true
    const dialogRef = this.dialog.open(ReservarBoletasComponent, {
      width: '70%',
      height: '60%',

      data: {
        cantidad: this.cantidad,
        localidad:this.localidad.id,
        promotor: this.promotor.numeroDocumento
      },
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.ngOnInit()
    })
  }
}
}
