import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardUsuarioService } from './../service/route-guard-usuario.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioComponent } from './usuario.component';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AgregarAmigosComponent } from './usuario-perfil/agregar-amigos/agregar-amigos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CambiarPerfilComponent } from './usuario-perfil/cambiar-perfil/cambiar-perfil.component';
import { ModificarUsuarioAdminComponent } from './modificar-usuario-admin/modificar-usuario-admin.component';
import { CambiarDuenoBoletaComponent } from './usuario-perfil/cambiar-dueno-boleta/cambiar-dueno-boleta.component';




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
        },

        {
          path: 'usuario/admin/:user/amigos-palco/:idPalco',
          component: AgregarAmigosComponent,
          canActivate:[RouteGuardAdminService]
        }
       

    
      ]
}


]

@NgModule({

    declarations:[  UsuarioComponent,UsuarioPerfilComponent,  AgregarAmigosComponent, CambiarPerfilComponent, ModificarUsuarioAdminComponent, CambiarDuenoBoletaComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
     
        MatIconModule, 
    ]

})
export class UsuarioModule{}