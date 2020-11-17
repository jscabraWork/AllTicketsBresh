import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardUsuarioService } from './../service/route-guard-usuario.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';


import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PuntosFisicosComponent } from './puntos-fisicos.component';
import { EventoPuntoFisicoComponent } from './evento-punto-fisico/evento-punto-fisico.component';
import { EventoPalcosPuntosFisicosComponent } from './evento-palcos-puntos-fisicos/evento-palcos-puntos-fisicos.component';
import { EventoTicketsPutosFisicosComponent } from './evento-tickets-putos-fisicos/evento-tickets-putos-fisicos.component';
import { CarritoDeComprasPuntosFisicosComponent } from './carrito-de-compras-puntos-fisicos/carrito-de-compras-puntos-fisicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



const routes: Routes=[

{
    path:'',
    children:[
        {
          path:':user',
          component: PuntosFisicosComponent,
          
        },
        {
            path:':user/evento/:id',
            component: EventoPuntoFisicoComponent
        },
        {
            path:':user/evento/:id/pago/palco/:idLocalidad',
            component: EventoPalcosPuntosFisicosComponent
        },
        {
            path:':user/evento/:id/pago/:idLocalidad',
            component: EventoTicketsPutosFisicosComponent
        }
      ]
}


]

@NgModule({

    declarations:[  PuntosFisicosComponent, EventoPuntoFisicoComponent, EventoPalcosPuntosFisicosComponent, EventoTicketsPutosFisicosComponent, CarritoDeComprasPuntosFisicosComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
    ]

})
export class PuntosFisicosModule{}