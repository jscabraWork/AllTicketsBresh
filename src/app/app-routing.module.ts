
import { RouteGuardPuntoFisicoService } from './service/route-guard-punto-fisico.service';

import { RouteGuardMinisterioService } from './service/route-guard-ministerio.service';

import { RouteGuardUsuarioService } from './service/route-guard-usuario.service';
import { RoutGuardPromotorService } from './service/rout-guard-promotor.service';
import { RouteGuardOrganizadorService } from './service/route-guard-organizador.service';
import { RouteGuardAdminService } from './service/route-guard-admin.service';
import { LogoutComponent } from './logout/logout.component';


import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';


import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminosYCondicionesComponent } from './terminos-ycondiciones/terminos-ycondiciones.component';
import { BannerComponent } from './banner/banner.component';
import { ComoComprarComponent } from './como-comprar/como-comprar.component';
import { OlvidoComponent } from './olvido/olvido.component';
import { TratamientoDatosComponent } from './tratamiento-datos/tratamiento-datos.component';
import { ReservasPromotorComponent } from './reservas-promotor/reservas-promotor.component';
import { RouteGuardCoordinadorService } from './service/route-guard-coordinador.service';
import { CoordinadorPerfilComponent } from './coordinador-perfil/coordinador-perfil.component';
import { AdminLectorComponent } from './administradores/admin-perfil/admin-eventos/admin-lector/admin-lector.component';
import { TerminosAvalComponent } from './terminos-aval/terminos-aval.component';
import { ReservaBoletaComponent } from './reserva-boleta/reserva-boleta.component';


const routes: Routes = [


  {
    path:'ciudades', 
    loadChildren:() => import('./ciudades/ciudades.module').then(m => m.CiudadesModule)
  },
{
  path:'reservas/:id',
  component:ReservasPromotorComponent
}
  ,

  {
    path:'comprar/boletas/:id',
    component:ReservaBoletaComponent
  }
    ,
  

  {
    path:'usuarios', 
    
    loadChildren:() => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  
    
  },
  {
    path:'promotor',
    loadChildren:() => import('./promotor-perfil/promotor.module').then(m => m.PromotorModule),
    canActivate:[RoutGuardPromotorService]
  },

  {
    path:'administradores', 
    
    loadChildren:() => import('./administradores/admin.module').then(m => m.AdminModule),
    canActivate:[RouteGuardAdminService]
  },

  {
    path:'organizadores', 
    
    loadChildren:() => import('./organizadores/organizadores.module').then(m => m.OrganizadorModule),
    
  },

  {
    path:'home', component: HomeComponent
  },
   {
    path:'banner', component: BannerComponent
  },
  {
    path:'eventos', 
    loadChildren:() => import('./eventos/eventos.module').then(n => n.EventosModule)
  },
  {
    path:'blog', component: BlogComponent
  },
  
{
  path:'terminosYcondiciones', component: TerminosYCondicionesComponent
}
  ,

  {
    path:'como-comprar', component:ComoComprarComponent
  },
  {
    path:'nosotros', component: NosotrosComponent
  },


  {
    path:'login', component: LoginComponent
  },


  
  {
    path:'logout', component: LogoutComponent,
    canActivate:[ RouteGuardUsuarioService]
  },
  {
    path:'logoutA', component: LogoutComponent,
    canActivate:[ RouteGuardAdminService]
  },
  {
    path:'logoutO', component: LogoutComponent,
    canActivate:[ RouteGuardOrganizadorService]
  },
  {
    path:'logoutP', component: LogoutComponent,
    canActivate:[ RouteGuardPuntoFisicoService]
  },
  {
    path:'logoutM', component: LogoutComponent,
    canActivate:[ RouteGuardMinisterioService]
  },

  {
    path:'logoutPromotor', component: LogoutComponent,
    canActivate:[ RoutGuardPromotorService]
  },
  
  {
    path:'logoutCoordinador', component: LogoutComponent,
    canActivate:[ RouteGuardCoordinadorService]
  },

  {
    path:'perfilCoordinador/:nombre', component: CoordinadorPerfilComponent,
    canActivate:[ RouteGuardCoordinadorService]
  },

  {
    path:'perfilCoordinador/:nombre/lector/:id', component: AdminLectorComponent,
    canActivate:[ RouteGuardCoordinadorService]
  },
  {
    path:'perfilMinisterio', 
    loadChildren:() => import('./perfil-ministerio/ministerio.module').then(m => m.MinisterioModule),
    canActivate:[ RouteGuardMinisterioService]
  },
  {
    path:'puntoFisico',
    loadChildren:() => import('./puntos-fisicos/puntos-fisicos.module').then(m => m.PuntosFisicosModule),
    canActivate:[ RouteGuardPuntoFisicoService]
  },
  {
    path:'terminosYCondiciones', component: TerminosYCondicionesComponent
  }
,
{
  path:'terminosAval', component: TerminosAvalComponent
}
  ,
  {
    path:'tratamientoDatos', component: TratamientoDatosComponent
  },


  {
    path:'', component: HomeComponent
  },

  {
    path:'**', component: ErrorComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
