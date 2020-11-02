import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoraPipe } from './../pipes/horas.pipe';
import { RespuestaComponent } from './eventos-perfil/pago-pay-u/respuesta/respuesta.component';
import { ConfirmacionComponent } from './eventos-perfil/pago-pay-u/confirmacion/confirmacion.component';
import { PagoPayUComponent } from './eventos-perfil/pago-pay-u/pago-pay-u.component';



import { EventosPerfilComponent } from './eventos-perfil/eventos-perfil.component';
import { EventosComponent } from './eventos.component';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegalarBoletaComponent } from './eventos-perfil/pago-pay-u/regalar-boleta/regalar-boleta.component';
import { ComprarPalcosComponent } from './eventos-perfil/pago-pay-u/comprar-palcos/comprar-palcos.component';
import { VacaComponent } from './eventos-perfil/pago-pay-u/comprar-palcos/vaca/vaca.component';
import { CarritoDeComprasComponent } from './eventos-perfil/pago-pay-u/carrito-de-compras/carrito-de-compras.component';
import { ImagenEventosComponent } from './eventos-perfil/imagen-eventos/imagen-eventos.component';
import { CarritoDeComprasAsistenteComponent } from './eventos-perfil/pago-pay-u/regalar-boleta/carrito-de-compras-asistente/carrito-de-compras-asistente.component';
import { MatIconModule } from '@angular/material/icon';









const routes: Routes=[

{
    path:'',
    children:[
        {
          path:'',
          component: EventosComponent
        },
        {
          path: 'evento/:id',
          component: EventosPerfilComponent
        },
        {
          path:'evento/:id/pago/:idLocalidad',
          component: PagoPayUComponent
        },
        {
          path:'evento/:id/pago/palcos/vaca',
          component: VacaComponent
        },
        {
          path:'evento/:id/pago/regalar',
          component: RegalarBoletaComponent
        }
      ]
}


]

@NgModule({

    declarations:[EventosPerfilComponent, PagoPayUComponent,  RespuestaComponent , ConfirmacionComponent, RegalarBoletaComponent, ComprarPalcosComponent,HoraPipe, VacaComponent, CarritoDeComprasComponent, ImagenEventosComponent, CarritoDeComprasAsistenteComponent ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
  

      
        
        
    ]

})
export class EventosModule{}