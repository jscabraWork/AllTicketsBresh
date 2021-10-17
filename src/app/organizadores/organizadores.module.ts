import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventoPerfilOrganizadorComponent } from './organizador-perfil/evento-perfil-organizador/evento-perfil-organizador.component';

import { RouteGuardOrganizadorService } from './../service/route-guard-organizador.service';
import { RouteGuardAdminService } from './../service/route-guard-admin.service';
import { OrganizadorPerfilComponent } from './organizador-perfil/organizador-perfil.component';
import { OrganizadoresComponent } from './organizadores.component';



import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoletasPatrocinioComponent } from './organizador-perfil/evento-perfil-organizador/boletas-patrocinio/boletas-patrocinio.component';
import { PromotoresOrganizadorComponent } from './organizador-perfil/evento-perfil-organizador/promotores-organizador/promotores-organizador.component';
import { PalcosPromtorOrganizadorComponent } from './organizador-perfil/evento-perfil-organizador/promotores-organizador/palcos-promtor-organizador/palcos-promtor-organizador.component';
import { ReservasComponent } from './organizador-perfil/evento-perfil-organizador/promotores-organizador/reservas/reservas.component';



const routes: Routes=[

{
    path:'',
    children:[
        {
          path:'',
          component: OrganizadoresComponent,
          canActivate:[RouteGuardAdminService]
        },
        {
          path: 'organizador/:user',
          component: OrganizadorPerfilComponent,
          canActivate:[RouteGuardOrganizadorService]
        },
        {
          path: 'organizador/admin/perfil/:user',
          component: OrganizadorPerfilComponent,
          canActivate:[RouteGuardAdminService]
        },
        {
          path:'organizador/eventos/:id',
          component:EventoPerfilOrganizadorComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/eventos/:id/promotores',
          component:PromotoresOrganizadorComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/eventos/:id/promotores/:idPromotor',
          component:PalcosPromtorOrganizadorComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/eventos/:id/promotores/:idPromotor/reservas',
          component:ReservasComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/admin/eventos/:id',
          component:EventoPerfilOrganizadorComponent,
          canActivate:[RouteGuardAdminService]

        },
        {
          path:'organizador/eventos/:id/patrocinio/:idLocalidad',
          component:BoletasPatrocinioComponent,
          canActivate:[RouteGuardOrganizadorService]

        },


        {
          path:'organizador/admin/eventos/:id/patrocinio/:idLocalidad',
          component:BoletasPatrocinioComponent,
          canActivate:[RouteGuardAdminService]

        },
      ]
}


]

@NgModule({

    declarations:[  OrganizadoresComponent,OrganizadorPerfilComponent, EventoPerfilOrganizadorComponent, BoletasPatrocinioComponent, PromotoresOrganizadorComponent, PalcosPromtorOrganizadorComponent, ReservasComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule  ,
        FormsModule,
       ReactiveFormsModule
    ]

})
export class OrganizadorModule{}