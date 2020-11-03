import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoraPipe } from './../pipes/horas.pipe';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { PromotorPerfilComponent } from './promotor-perfil.component';









const routes: Routes=[

{
    path:'',
    children:[
        {
          path:':user',
          component: PromotorPerfilComponent
        },
        
      ]
}


]

@NgModule({

    declarations:[PromotorPerfilComponent],
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