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
          path:'evento/:id/pago',
          component: PagoPayUComponent
        },
        {
          path:'evento/:id/pago/regalar',
          component: RegalarBoletaComponent
        }
      ]
}


]

@NgModule({

    declarations:[EventosPerfilComponent, PagoPayUComponent,  RespuestaComponent , ConfirmacionComponent, RegalarBoletaComponent, ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule
      
        
        
    ]

})
export class EventosModule{}