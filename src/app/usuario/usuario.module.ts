import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardUsuarioService } from './../service/route-guard-usuario.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioComponent } from './usuario.component';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TicketsUsuarioComponent } from './usuario-perfil/tickets-usuario/tickets-usuario.component';
import { AgregarAmigosComponent } from './usuario-perfil/agregar-amigos/agregar-amigos.component';




const routes: Routes=[

{
    path:'',
    children:[
        {
          path:'',
          component: UsuarioComponent,
          canActivate:[RouteGuardAdminService]
        },
        {
          path: 'usuario/:user',
          component: UsuarioPerfilComponent,
          canActivate:[RouteGuardUsuarioService]
        },
       

     


        {
          path: 'usuario/admin/:user',
          component: UsuarioPerfilComponent,
          canActivate:[RouteGuardAdminService]
        }
        ,
        {
          path: 'usuario/:user/amigos-palco/:idPalco',
          component: AgregarAmigosComponent,
          canActivate:[RouteGuardUsuarioService]
        }


       

    
      ]
}


]

@NgModule({

    declarations:[  UsuarioComponent,UsuarioPerfilComponent, TicketsUsuarioComponent, AgregarAmigosComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule, 
    ]

})
export class UsuarioModule{}