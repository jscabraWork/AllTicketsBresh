import { ResumirPipe } from './pipes/resumir.pipe';
import { HttpInterceptBasicAuthService } from './service/http/http-intercept-basic-auth.service';
import { AdminModule } from './administradores/admin.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EventosComponent } from './eventos/eventos.component';
import { EventosModule } from './eventos/eventos.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SePromotorComponent } from './se-promotor/se-promotor.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { OrganizadorModule } from './organizadores/organizadores.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ResumirPipe2 } from './pipes/resumir.pipe copy';
import { LOCALE_ID, NgModule } from '@angular/core';
import localePy from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CalendarioDeEventosComponent } from './calendario-de-eventos/calendario-de-eventos.component';
import { PerfilMinisterioComponent } from './perfil-ministerio/perfil-ministerio.component';
import { PuntosFisicosComponent } from './puntos-fisicos/puntos-fisicos.component';
import { PromotorPerfilComponent } from './promotor-perfil/promotor-perfil.component';
 
registerLocaleData(localePy, 'es');


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    BlogComponent,

    NosotrosComponent,

    SePromotorComponent,

    ContactanosComponent,
    
    CiudadesComponent,
  
    EventosComponent,
  
    LoginComponent,

    ErrorComponent,

    MenuComponent,

    FooterComponent,

    LogoutComponent,

    RegistrarseComponent,
    ResumirPipe,
     ResumirPipe2,
     CalendarioDeEventosComponent,
     PerfilMinisterioComponent,
     PuntosFisicosComponent,
     PromotorPerfilComponent
  

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    CiudadesModule,
    EventosModule,
    UsuarioModule,
    AdminModule,
    OrganizadorModule,
    HttpClientModule
    
   
  ],
  
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: HttpInterceptBasicAuthService, multi: true  },
    {provide: LOCALE_ID, useValue: 'es' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  
}
