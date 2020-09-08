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
  getOrganizador(){
    return sessionStorage.getItem('organizador');
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
  logout(){
   
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('organizador');
    sessionStorage.removeItem('administrador');
  }
}
