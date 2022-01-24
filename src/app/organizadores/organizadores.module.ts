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
import { ReservasOrganizadorComponent } from './organizador-perfil/evento-perfil-organizador/reservas-organizador/reservas-organizador.component';
import { VentasEspecificasComponent } from './organizador-perfil/evento-perfil-organizador/ventas-especificas/ventas-especificas.component';
import { HistorialComponent } from './organizador-perfil/evento-perfil-organizador/historial/historial.component';
import { RouteGuardContadorService } from '../service/route-guard-contador.service';



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
          path:'contador',
          component: OrganizadoresComponent,
          canActivate:[RouteGuardContadorService]
        },
        {
          path: 'organizador/:user',
          component: OrganizadorPerfilComponent,
          canActivate:[RouteGuardOrganizadorService]
        },
        {
          path: 'contador/organizador/perfil/:user',
          component: OrganizadorPerfilComponent,
          canActivate:[RouteGuardContadorService]
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
          path:'contador/organizador/perfil/:user/organizador/eventos/:id',
          component:EventoPerfilOrganizadorComponent,
          canActivate:[RouteGuardContadorService] 

        },
        {
          path:'organizador/eventos/:id/promotores',
          component:PromotoresOrganizadorComponent,
          canActivate:[RouteGuardOrganizadorService]

        },


        {
          path:'organizador/eventos/:id/reservas',
          component:ReservasOrganizadorComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/admin/eventos/:id/reservas',
          component:ReservasOrganizadorComponent,
          canActivate:[RouteGuardAdminService]

        },



        {
          path:'organizador/eventos/:id/historial',
          component:HistorialComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/admin/eventos/:id/historial',
          component:HistorialComponent,
          canActivate:[RouteGuardAdminService]

        },

        {
          path:'organizador/eventos/:id/localidad/:idLocalidad',
          component:VentasEspecificasComponent,
          canActivate:[RouteGuardOrganizadorService]

        },
        {
          path:'organizador/admin/eventos/:id/localidad/:idLocalidad',
          component:VentasEspecificasComponent,
          canActivate:[RouteGuardAdminService]

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
        {
          path:'organizador/admin/eventos/:id/promotores',
          component:PromotoresOrganizadorComponent,
          canActivate:[RouteGuardAdminService]

        },
        {
          path:'organizador/admin/eventos/:id/promotores/:idPromotor',
          component:PalcosPromtorOrganizadorComponent,
          canActivate:[RouteGuardAdminService]

        },
        {
          path:'organizador/admin/eventos/:id/promotores/:idPromotor/reservas',
          component:ReservasComponent,
          canActivate:[RouteGuardAdminService]

        },
      ]
}


]

@NgModule({

    declarations:[  OrganizadoresComponent,OrganizadorPerfilComponent, EventoPerfilOrganizadorComponent, BoletasPatrocinioComponent, PromotoresOrganizadorComponent, PalcosPromtorOrganizadorComponent, ReservasComponent, ReservasOrganizadorComponent, VentasEspecificasComponent, HistorialComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule  ,
        FormsModule,
       ReactiveFormsModule
    ]

})
export class OrganizadorModule{}