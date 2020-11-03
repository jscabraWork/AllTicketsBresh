import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardUsuarioService } from './../service/route-guard-usuario.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';


import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerfilMinisterioComponent } from './perfil-ministerio.component';
import { EventoMinisterioComponent } from './evento-ministerio/evento-ministerio.component';




const routes: Routes=[

{
    path:'',
    children:[
        {
          path:':user',
          component: PerfilMinisterioComponent,
          
        },
        {
            path:':user/evento/:id',
            component: EventoMinisterioComponent
        }
      
      ]
}


]

@NgModule({

    declarations:[  PerfilMinisterioComponent, EventoMinisterioComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule 
    ]

})
export class MinisterioModule{}