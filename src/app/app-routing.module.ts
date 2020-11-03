import { CalendarioComponent } from './calendario/calendario.component';
import { RouteGuardPuntoFisicoService } from './service/route-guard-punto-fisico.service';
import { PuntosFisicosComponent } from './puntos-fisicos/puntos-fisicos.component';
import { RouteGuardMinisterioService } from './service/route-guard-ministerio.service';
import { PerfilMinisterioComponent } from './perfil-ministerio/perfil-ministerio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RouteGuardUsuarioService } from './service/route-guard-usuario.service';
import { RouteGuardOrganizadorService } from './service/route-guard-organizador.service';
import { RouteGuardAdminService } from './service/route-guard-admin.service';
import { LogoutComponent } from './logout/logout.component';
import { EventosPerfilComponent } from './eventos/eventos-perfil/eventos-perfil.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { CiudadesEventosComponent } from './ciudades/ciudades-eventos/ciudades-eventos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { SePromotorComponent } from './se-promotor/se-promotor.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { EventosComponent } from './eventos/eventos.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


  {
    path:'ciudades', 
    loadChildren:() => import('./ciudades/ciudades.module').then(m => m.CiudadesModule)
  },

  {
    path:'usuarios', 
    
    loadChildren:() => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  
    
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
    path:'eventos', 
    loadChildren:() => import('./eventos/eventos.module').then(n => n.EventosModule)
  },
  {
    path:'blog', component: BlogComponent
  },
  {
    path:'nosotros', component: NosotrosComponent
  },

  {
    path:'sePromotor', component: SePromotorComponent
    
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
    path:'calendario', component: CalendarioComponent
  },
  
  {
    path:'', component: HomeComponent
  }
  ,
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
