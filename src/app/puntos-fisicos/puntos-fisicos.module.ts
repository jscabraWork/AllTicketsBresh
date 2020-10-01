import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardUsuarioService } from './../service/route-guard-usuario.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';


import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PuntosFisicosComponent } from './puntos-fisicos.component';
import { EventoPuntoFisicoComponent } from './evento-punto-fisico/evento-punto-fisico.component';



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
        }
      ]
}


]

@NgModule({

    declarations:[  PuntosFisicosComponent, EventoPuntoFisicoComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule, 
    ]

})
export class PuntosFisicosModule{}