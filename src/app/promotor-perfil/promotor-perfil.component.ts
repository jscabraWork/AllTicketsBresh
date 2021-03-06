import { Component, OnInit } from '@angular/core';
import { Palco } from '../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Etapa } from '../eventos/eventos-perfil/etapa.model';
import { EtapasDataService } from '../service/data/etapas-data.service';
import { PromotorDataService } from '../service/data/promotor-data.service';
import { HardcodedAutheticationService } from '../service/hardcoded-authetication.service';
import { Promotor } from './promotor.model';

@Component({
  selector: 'app-promotor-perfil',
  templateUrl: './promotor-perfil.component.html',
  styleUrls: ['./promotor-perfil.component.css']
})
export class PromotorPerfilComponent implements OnInit {
  promotor:Promotor
  user
  tickets=false
  palcos = false
  datos = true

  constructor(private servicio: PromotorDataService, private autenticador: HardcodedAutheticationService) { }
  
  ngOnInit(): void {
    this.promotor={
      boletasVendidas:[],
      codigoventa:null,
      contrasena:null,
      dineroTotal:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null,
      boletasCanjeadas:[],
      palcosCanjeados:[],
      palcosVendidos:[],
      celular:null,
      correo:null,
      eventos:[]
    }

    this.user= this.autenticador.getPromotor()
    this.servicio.getPromotorByUsuario(this.user).subscribe( response=>{
   
      this.promotor = response

    },
    error=>{
      alert('Sucedio un error por favor intente más tarde')
    })
  }
  
darDineroRecaudado(palco:Palco){
  return ((palco.precioParcialPagado)/(palco.servicio+palco.servicioIva+palco.precio))*palco.precio
}
}
