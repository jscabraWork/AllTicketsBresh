import { BooleanPipe } from './../pipes/booleans.pipe';
import { UpdateAdminComponent } from './admin-perfil/update-admin/update-admin.component';
import { AgregarAdministradorComponent } from './admin-perfil/agregar-administrador/agregar-administrador.component';
import { AgregarOrganizadorComponent } from './admin-perfil/agregar-organizador/agregar-organizador.component';


import { UpdateOrganizadorComponent } from './admin-perfil/update-organizador/update-organizador.component';
import { FormsModule } from '@angular/forms';
import { CiudadesUpdateComponent } from './admin-perfil/ciudades-update/ciudades-update.component';

import { CiudadesAdminComponent } from './admin-perfil/ciudades-admin/ciudades-admin.component';

import { AgregarEventoComponent } from './admin-perfil/agregar-evento/agregar-evento.component';
import { AdminEventosComponent } from './admin-perfil/admin-eventos/admin-eventos.component';
import { AdminPerfilComponent } from './admin-perfil/admin-perfil.component';

import { AdministradoresComponent } from './administradores.component';


import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateEventoComponent } from './admin-perfil/update-evento/update-evento.component';
import { AgregarCiudadComponent } from './admin-perfil/agregar-ciudad/agregar-ciudad.component';
import { AdminBoletasComponent } from './admin-perfil/admin-eventos/admin-boletas/admin-boletas.component';
import { AgregarBoletasComponent } from './admin-perfil/admin-eventos/admin-boletas/agregar-boletas/agregar-boletas.component';
import { AdminLocalidadesComponent } from './admin-perfil/admin-eventos/admin-localidades/admin-localidades.component';
import { AgregarLocalidadComponent } from './admin-perfil/admin-eventos/admin-localidades/agregar-localidad/agregar-localidad.component';
import { UpdateLocalidadComponent } from './admin-perfil/admin-eventos/admin-localidades/update-localidad/update-localidad.component';
import { MapasComponent } from './admin-perfil/mapas/mapas.component';
import { AdminPalcosComponent } from './admin-perfil/admin-eventos/admin-palcos/admin-palcos.component';
import { AgregarPalcoComponent } from './admin-perfil/admin-eventos/admin-palcos/agregar-palco/agregar-palco.component';


const routes: Routes=[

{
    path:'',
    children:[
        {
          path:'',
          component: AdministradoresComponent
        },


        {
          path:'admin/admin/mapas',
          component: MapasComponent
        },
        {
          path:'agregar/admin',
          component: AgregarAdministradorComponent
        },
        {
          path:'update/admin/:id',
          component: UpdateAdminComponent
        },
        {
          path: 'admin/:nombre',
          component: AdminPerfilComponent
        },

        {
          path: 'admin/eventos/lista',
          component: AdminEventosComponent
        },

        {
          path: 'admin/eventos/lista/:id/palcos',
          component: AdminPalcosComponent
        },

        {
          path: 'admin/eventos/lista/:id/palcos/agregar',
          component: AgregarPalcoComponent
        },

        {
          path: 'admin/eventos/lista/localidad/boletas/:id/:idLocalidad/:nombreLocalidad',
          component: AdminBoletasComponent
        },

        {
          path: 'admin/eventos/lista/localidad/boletas/:id/:idLocalidad/:nombreLocalidad/agregar',
          component: AgregarBoletasComponent
        },
        
        {
          path: 'admin/eventos/lista/localidades/:id',
          component: AdminLocalidadesComponent
        },

        {
          path: 'admin/eventos/lista/localidades/:id/localidad/:idLocalidad',
          component: UpdateLocalidadComponent
        },

        {
          path: 'admin/eventos/lista/localidades/:id/agregar',
          component: AgregarLocalidadComponent
        },




        {
          path: 'admin/eventos/lista/agregar',
          component: AgregarEventoComponent
        },
        {
          path: 'admin/eventos/lista/update/:id',
          component: UpdateEventoComponent
        },
        {
          path: 'admin/ciudades/lista',
          component: CiudadesAdminComponent
        },
        {
          path: 'admin/ciudades/lista/agregar',
          component: AgregarCiudadComponent
        },
      
        {
          path: 'admin/ciudades/lista/update/:id',
          component: CiudadesUpdateComponent
        },
        {
          path: 'admin/organizadores/lista/update/:id',
          component: UpdateOrganizadorComponent
        },
        {
          path: 'admin/organizadores/lista/agregar',
          component: AgregarOrganizadorComponent
        }
      ]
}


]

@NgModule({

    declarations:[  
      AdministradoresComponent,
      AdminPerfilComponent,
       AdminEventosComponent, 
       AgregarEventoComponent,
       UpdateEventoComponent,
        CiudadesAdminComponent,
      CiudadesUpdateComponent
      ,AgregarCiudadComponent,    
      UpdateOrganizadorComponent,
      AgregarOrganizadorComponent,
      AgregarAdministradorComponent,
      UpdateAdminComponent,
      AdminBoletasComponent,
      BooleanPipe,
      AgregarBoletasComponent,
      AdminLocalidadesComponent,
      AgregarLocalidadComponent,
      UpdateLocalidadComponent,
      MapasComponent,
      AdminPalcosComponent,
      AgregarPalcoComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule,
        FormsModule
    ]

})
export class AdminModule{}