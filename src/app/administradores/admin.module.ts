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
import { AdminEtapasComponent } from './admin-perfil/admin-eventos/admin-etapas/admin-etapas.component';
import { AgregarEtapaComponent } from './admin-perfil/admin-eventos/admin-etapas/agregar-etapa/agregar-etapa.component';
import { UpdatePalcosComponent } from './admin-perfil/admin-eventos/admin-palcos/update-palcos/update-palcos.component';
import { AdminBlogComponent } from './admin-perfil/admin-blog/admin-blog.component';
import { AdminPromotoresComponent } from './admin-perfil/admin-promotores/admin-promotores.component';
import { AdminPuntosFisicosComponent } from './admin-perfil/admin-puntos-fisicos/admin-puntos-fisicos.component';
import { AgregarPuntoComponent } from './admin-perfil/admin-puntos-fisicos/agregar-punto/agregar-punto.component';
import { UpdatePuntoComponent } from './admin-perfil/admin-puntos-fisicos/update-punto/update-punto.component';
import { AdminLectorComponent } from './admin-perfil/admin-eventos/admin-lector/admin-lector.component';
import { AdminMinisterioComponent } from './admin-perfil/admin-ministerio/admin-ministerio.component';
import { AgregarMinisterioComponent } from './admin-perfil/admin-ministerio/agregar-ministerio/agregar-ministerio.component';
import { UpdateMinisterioComponent } from './admin-perfil/admin-ministerio/update-ministerio/update-ministerio.component';
import { AgregarPromotorComponent } from './admin-perfil/admin-promotores/agregar-promotor/agregar-promotor.component';
import { UpdatePromotorComponent } from './admin-perfil/admin-promotores/update-promotor/update-promotor.component';
import { BoletasPromotorComponent } from './admin-perfil/admin-promotores/boletas-promotor/boletas-promotor.component';
import { BoletasPuntosFisicosComponent } from './admin-perfil/admin-puntos-fisicos/boletas-puntos-fisicos/boletas-puntos-fisicos.component';
import { AgregarFotoPerfilComponent } from './admin-perfil/admin-eventos/agregar-foto-perfil/agregar-foto-perfil.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AgregarFotoMapaComponent } from './admin-perfil/admin-eventos/agregar-foto-mapa/agregar-foto-mapa.component';
import { AgregarFotosBannerComponent } from './admin-perfil/admin-eventos/agregar-fotos-banner/agregar-fotos-banner.component';
import { AgregarFotoCiudadComponent } from './admin-perfil/ciudades-admin/agregar-foto-ciudad/agregar-foto-ciudad.component';
import { AdminMensajeComponent } from './admin-perfil/admin-eventos/admin-mensaje/admin-mensaje.component';
import { AgregarImagenFinalComponent } from './admin-perfil/admin-eventos/agregar-imagen-final/agregar-imagen-final.component';
import { AgregarFechaAperturaComponent } from './admin-perfil/admin-eventos/agregar-fecha-apertura/agregar-fecha-apertura.component';
import { AdminAgregarEventosPromotorComponent } from './admin-perfil/admin-promotores/admin-agregar-eventos-promotor/admin-agregar-eventos-promotor.component';
import { AdminAdicionalesComponent } from './admin-perfil/admin-adicionales/admin-adicionales.component';
import { AgregarAdicionalComponent } from './admin-perfil/admin-adicionales/agregar-adicional/agregar-adicional.component';



const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: AdministradoresComponent
      },


      {
        path: 'admin/admin/mapas',
        component: MapasComponent
      },
      {
        path: 'agregar/admin',
        component: AgregarAdministradorComponent
      },
      {
        path: 'update/admin/:id',
        component: UpdateAdminComponent
      },
      {
        path: 'admin/:nombre',
        component: AdminPerfilComponent
      },


      {
        path: 'ministerios',
        component: AdminMinisterioComponent
      },


      {
        path: 'ministerios/agregar',
        component: AgregarMinisterioComponent
      },


      {
        path: 'ministerios/update/:id',
        component: UpdateMinisterioComponent
      },

      {
        path: 'admin/eventos/lista',
        component: AdminEventosComponent
      },

      {
        path: 'admin/eventos/lista/lector/:id',
        component: AdminLectorComponent
      },

      {
        path: 'admin/eventos/lista/etapas/:id/agregar',
        component: AgregarEtapaComponent
      },

      {
        path: 'admin/eventos/lista/etapas/:id',
        component: AdminEtapasComponent
      },

      {
        path: 'admin/eventos/lista/adicionales/:id',
        component: AdminAdicionalesComponent
      },
      {
        path: 'admin/eventos/lista/adicionales/:id/agregar',
        component: AgregarAdicionalComponent
      },
      {
        path: 'admin/eventos/lista/etapas/:id/localidades/:idEtapa/:idLocalidad/palcos',
        component: AdminPalcosComponent
      },

      {
        path: 'admin/eventos/lista/etapas/:id/localidades/:idEtapa/:idLocalidad/palcos/agregar',
        component: AgregarPalcoComponent
      },

      {
        path: 'admin/eventos/lista/etapas/:id/localidades/:idEtapa/:idLocalidad/palcos/update/:idPalco',
        component: UpdatePalcosComponent
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
        path: 'admin/eventos/lista/etapas/:id/localidades/:idEtapa',
        component: AdminLocalidadesComponent
      },

      {
        path: 'admin/eventos/lista/etapas/:id/localidades/:idEtapa/localidad/:idLocalidad',
        component: UpdateLocalidadComponent
      },

      {
        path: 'admin/eventos/lista/etapas/:id/localidades/:idEtapa/agregar',
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
      },
      {
        path: 'blog',
        component: AdminBlogComponent
      },

      {
        path: 'puntosFisicos',
        component: AdminPuntosFisicosComponent
      },
      {
        path: 'puntosFisicos/agregar',
        component: AgregarPuntoComponent
      },
      {
        path: 'puntosFisicos/update/:id',
        component: UpdatePuntoComponent
      },

      {
        path: 'promotores',
        component: AdminPromotoresComponent
      },
      {
        path: 'promotores/agregar',
        component: AgregarPromotorComponent
      },
      {
        path: 'promotores/update/:id',
        component: UpdatePromotorComponent
      },
      {
        path: 'promotores/agregar-evento/:id',
        component: AdminAgregarEventosPromotorComponent
      },
      {
        path: 'promotores/boletasAPagar/:id',
        component: BoletasPromotorComponent
      },

      {
        path: 'puntosFisicos/pagar/:id',
        component: BoletasPuntosFisicosComponent
      },
    ]
  }


]

@NgModule({

  declarations: [
    AdministradoresComponent,
    AdminPerfilComponent,
    AdminEventosComponent,
    AgregarEventoComponent,
    UpdateEventoComponent,
    CiudadesAdminComponent,
    CiudadesUpdateComponent, 
    AgregarCiudadComponent,
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
    AgregarPalcoComponent,
    AdminEtapasComponent,
    AgregarEtapaComponent,
    UpdatePalcosComponent,
    AdminBlogComponent,
    AdminPromotoresComponent,
    AdminPuntosFisicosComponent,
    AgregarPuntoComponent,
    UpdatePuntoComponent,
    AdminLectorComponent,
    AdminMinisterioComponent,
    AgregarMinisterioComponent,
    UpdateMinisterioComponent,
    AgregarPromotorComponent,
    UpdatePromotorComponent,
    BoletasPromotorComponent,
    BoletasPuntosFisicosComponent,
    AgregarFotoPerfilComponent,
    AgregarFotoMapaComponent,
    AgregarFotosBannerComponent,
    AgregarFotoCiudadComponent,
    AdminMensajeComponent,
    AgregarImagenFinalComponent,
    AgregarFechaAperturaComponent,
    AdminAgregarEventosPromotorComponent,
    AdminAdicionalesComponent,
    AgregarAdicionalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    
  ]

})
export class AdminModule { }