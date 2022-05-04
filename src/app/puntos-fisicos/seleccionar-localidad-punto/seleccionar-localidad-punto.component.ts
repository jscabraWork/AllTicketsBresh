import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { CantidadBoletasPuntoFisicoComponent } from '../cantidad-boletas-punto-fisico/cantidad-boletas-punto-fisico.component';

@Component({
  selector: 'app-seleccionar-localidad-punto',
  templateUrl: './seleccionar-localidad-punto.component.html',
  styleUrls: ['./seleccionar-localidad-punto.component.css']
})
export class SeleccionarLocalidadPuntoComponent implements OnInit {

  localidad1:Localidad;
  localidad2:Localidad;
  codigoVenta;
  referenceCode;
  evento;
  usuarioEntidad;
  cargando
  contadorBoletas
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.localidad1 ={
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
      boletas:[]
    }
    this.localidad2 ={
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
      boletas:[]
    }

    this.localidad1 = this.data.localidad1;
    this.localidad2 = this.data.localidad2;
    this.referenceCode = this.data.referenceCode
    this.cargando =false
    this.evento = {
      id: '',
      nombre: '',
      fecha: null,
      descripcion: '',
      lugar: '',
      video: '',
      terminosYCondiciones: '',
      recomendaciones: '',
      ciudadIdTexto: null,
      organizadorid: null,
      imagen: null,
      imagenes: [],
      artistas: '',
      fechaFin: null,
      mapa: null,
      localidades: [],

      horaInicio: null,
      horaFin: null,
      etapas: [],
      mapaImagen: null,
      visible: false,
      soldout:false,
      mensaje:null,
      imagenFinal:null,
      fechaApertura:null,
      urlMapa:null,
      adicionales:[],
      oculto:null,
      dineroEntregado:null,
      ciudadNombre:null
    };
    this.evento = this.data.evento
    this.usuarioEntidad = this.data.usuarioEntidad;
    this.codigoVenta = this.data.codigoVenta;
    this.contadorBoletas = this.data.contadorBoletas
  }



  cantidadBoletas(localidad: Localidad) {
    let efectivo = localidad.efectivo;

    const dialogRef = this.dialog.open(CantidadBoletasPuntoFisicoComponent, {
      width: '600px',


      data: {
        idLocalidad: localidad.id,
        referenceCode: this.referenceCode,
        efectivo: efectivo,
        evento: this.evento,
        codigoVenta: this.codigoVenta,
        contadorBoletas: this.contadorBoletas,
        usuarioEntidad: this.usuarioEntidad,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();

      this.ngOnInit();

    });
  }
}
