import { API_URL } from './../app.constants';
import { HttpClient } from '@angular/common/http';

import { Admin } from './../administradores/admin.model';
import { AdministradoresWebDataService } from './data/administradores-web-data.service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAutheticationService {

 
  
  constructor( private http: HttpClient) {
   
   }


authenticate(username,password){

 
  return this.http.get<Usuario>(`${API_URL}/usuarios/usuarios/${username}` );
 
  
  
 
  }



  getUsuario(){
    return sessionStorage.getItem('usuario');
  }
  getAdmin(){
    return sessionStorage.getItem('administrador');
  }

  getContador(){
    return sessionStorage.getItem('contador');
  }
  getOrganizador(){
    return sessionStorage.getItem('organizador');
  }

  getMinisterio(){
    return sessionStorage.getItem('ministerio');
  }

  getPuntoFisico(){
    return sessionStorage.getItem('puntoF');
  }
  getPromotor(){
    return sessionStorage.getItem('promotor');
  }



  usuarioLoggin(){
    let usuario =sessionStorage.getItem('usuario');
    return !(usuario==null);
  }
  organizadorLoggin(){
    let usuario =sessionStorage.getItem('organizador');
    return !(usuario==null);
  }
  adminLoggin(){
    let usuario =sessionStorage.getItem('administrador');
    return !(usuario==null);
  }

  coordinadorLoggin(){
    let usuario =sessionStorage.getItem('coordinador');
    return !(usuario==null);
  }



  ministerioLoggin(){
    let usuario =sessionStorage.getItem('ministerio');
    return !(usuario==null);

  }

  promotorLoggin(){
    let usuario =sessionStorage.getItem('promotor');
    return !(usuario==null);

  }
  contadorLoggin(){
    let usuario =sessionStorage.getItem('contador');
    return !(usuario==null);

  }
 puntoFisicoLoggin(){
    let usuario =sessionStorage.getItem('puntoF');
    return !(usuario==null);

  }
  logout(){
    sessionStorage.removeItem('usuarioEntidad');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('promotor');
    sessionStorage.removeItem('organizador');
    sessionStorage.removeItem('administrador');
    sessionStorage.removeItem('ministerio');
    sessionStorage.removeItem('puntoF');
    sessionStorage.removeItem('coordinador');
    sessionStorage.removeItem('contador');
  }
}
