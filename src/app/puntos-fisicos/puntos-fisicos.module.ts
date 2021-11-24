import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardUsuarioService } from './../service/route-guard-usuario.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';


import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PuntosFisicosComponent } from './puntos-fisicos.component';
import { EventoPuntoFisicoComponent } from './evento-punto-fisico/evento-punto-fisico.component';

import { CarritoDeComprasPuntosFisicosComponent } from './carrito-de-compras-puntos-fisicos/carrito-de-compras-puntos-fisicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CountdownModule } from 'ngx-countdown';
import { CantidadBoletasPuntoFisicoComponent } from './cantidad-boletas-punto-fisico/cantidad-boletas-punto-fisico.component';




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
             
      ]
}


]

@NgModule({

    declarations:[  PuntosFisicosComponent, EventoPuntoFisicoComponent, CarritoDeComprasPuntosFisicosComponent, CantidadBoletasPuntoFisicoComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        CountdownModule,
    ]

})
export class PuntosFisicosModule{}