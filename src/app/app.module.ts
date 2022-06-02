import { PuntosFisicosModule } from './puntos-fisicos/puntos-fisicos.module';
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
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MensajeComponent } from './mensaje/mensaje.component';
import { TerminosYCondicionesComponent } from './terminos-ycondiciones/terminos-ycondiciones.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { BannerComponent } from './banner/banner.component';
import { ComoComprarComponent } from './como-comprar/como-comprar.component';
import { OlvidoComponent } from './olvido/olvido.component';

import { CountdownModule } from 'ngx-countdown';
import { TratamientoDatosComponent } from './tratamiento-datos/tratamiento-datos.component';
import { ReservasPromotorComponent } from './reservas-promotor/reservas-promotor.component';
import { CoordinadorPerfilComponent } from './coordinador-perfil/coordinador-perfil.component';
import { TokenInterceptor } from './service/interceptors/token.interceptor';
import { AuthInterceptor } from './service/interceptors/auth.interceptor';
import { MensajeLinkComponent } from './mensaje-link/mensaje-link.component';
import { TerminosAvalComponent } from './terminos-aval/terminos-aval.component';

//SERVICIOS

//FIN SERVICIOS
registerLocaleData(localePy, 'es');
declare const THREEx: any;
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    BlogComponent,

    NosotrosComponent,

    

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


     PreguntasFrecuentesComponent,
     CalendarioComponent,
     MensajeComponent,
     TerminosYCondicionesComponent,
     
     BannerComponent,
     ComoComprarComponent,
     OlvidoComponent,
     TratamientoDatosComponent,
     ReservasPromotorComponent,
     CoordinadorPerfilComponent,
     MensajeLinkComponent,
     TerminosAvalComponent
    

  

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    CiudadesModule,

    UsuarioModule,
    AdminModule,
    OrganizadorModule,
    HttpClientModule,
    PuntosFisicosModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CountdownModule,
    MatIconModule,
    

  
    
   
  ],
  
  providers: [
   
    
    {provide: LOCALE_ID, useValue: 'es', } ,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
  
}
