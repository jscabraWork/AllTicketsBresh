import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoraPipe } from './../pipes/horas.pipe';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { PromotorPerfilComponent } from './promotor-perfil.component';
import { EventoPromotorComponent } from './evento-promotor/evento-promotor.component';
import { LocalidadPromotorComponent } from './evento-promotor/localidad-promotor/localidad-promotor.component';
import { ReservarComponent } from './evento-promotor/localidad-promotor/reservar/reservar.component';
import { LinkComponent } from './evento-promotor/localidad-promotor/reservar/link/link.component';









const routes: Routes=[

{
    path:'',
    children:[
        {
          path:':user',
          component: PromotorPerfilComponent
        },
        {
          path:':user/:id',
          component: EventoPromotorComponent
        },
        {
          path:':user/:id/:idLocalidad',
          component: LocalidadPromotorComponent
        },
                
      ]
}


]

@NgModule({

    declarations:[PromotorPerfilComponent, EventoPromotorComponent, LocalidadPromotorComponent, ReservarComponent, LinkComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
  

      
        
        
    ]

})
export class PromotorModule{}