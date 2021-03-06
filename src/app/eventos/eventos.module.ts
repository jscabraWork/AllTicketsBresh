import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoraPipe } from './../pipes/horas.pipe';
import { RespuestaComponent } from './eventos-perfil/pago-pay-u/respuesta/respuesta.component';
import { ConfirmacionComponent } from './eventos-perfil/pago-pay-u/confirmacion/confirmacion.component';
import { PagoPayUComponent } from './eventos-perfil/pago-pay-u/pago-pay-u.component';



import { EventosPerfilComponent } from './eventos-perfil/eventos-perfil.component';
import { EventosComponent } from './eventos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ComprarPalcosComponent } from './eventos-perfil/pago-pay-u/comprar-palcos/comprar-palcos.component';
import { VacaComponent } from './eventos-perfil/pago-pay-u/comprar-palcos/vaca/vaca.component';
import { CarritoDeComprasComponent } from './eventos-perfil/pago-pay-u/carrito-de-compras/carrito-de-compras.component';
import { ImagenEventosComponent } from './eventos-perfil/imagen-eventos/imagen-eventos.component';

import { MatIconModule } from '@angular/material/icon';
import { HttpInterceptBasicAuthService } from '../service/http/http-intercept-basic-auth.service';
import { CountdownModule } from 'ngx-countdown';
import { AdicionalComponent } from './eventos-perfil/pago-pay-u/adicional/adicional.component';
import { CantidadBoletasComponent } from './eventos-perfil/pago-pay-u/cantidad-boletas/cantidad-boletas.component';
import { LocalidadSeleccionComponent } from './eventos-perfil/pago-pay-u/localidad-seleccion/localidad-seleccion.component';
import { ManejoDiasComponent } from './eventos-perfil/pago-pay-u/comprar-palcos/manejo-dias/manejo-dias.component';
import { RedesSocialesComponent } from '../redes-sociales/redes-sociales.component';
import { GrupoAvalComponent } from './eventos-perfil/pago-pay-u/carrito-de-compras/grupo-aval/grupo-aval.component';











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
          path:'evento/:id/pago/:idLocalidad/:codigoVenta/promotor',
          component: PagoPayUComponent
        },
        {
          path:'evento/:id/pago/palco/:idLocalidad',
          component: ComprarPalcosComponent
        },
        {
          path:'evento/:id/pago/palco/:idLocalidad/:codigoVenta',
          component: ComprarPalcosComponent
        },
       /* {
          path:'evento/:id/pago/palco/:idLocalidad/vaca',
          component: VacaComponent
        },*/
        
        {
          path:'respuesta',
          component: RespuestaComponent
        },
        {
          path:'confirmacion',
          component: ConfirmacionComponent
        }
      ]
}


]

@NgModule({

    declarations:[EventosPerfilComponent,RedesSocialesComponent, PagoPayUComponent,  RespuestaComponent , ConfirmacionComponent, ComprarPalcosComponent,HoraPipe, VacaComponent, CarritoDeComprasComponent, ImagenEventosComponent, AdicionalComponent, CantidadBoletasComponent, LocalidadSeleccionComponent, ManejoDiasComponent, GrupoAvalComponent ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        CountdownModule,
        
         
      
        
        
    ],
    providers: [
      {provide:HTTP_INTERCEPTORS, useClass: HttpInterceptBasicAuthService, multi: true  },
      
    ],

})
export class EventosModule{}