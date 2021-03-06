import { API_URL } from './../../app.constants';
import { Organizador } from './../../organizadores/organizador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizadorDataService {

  url=`${API_URL}/organizadores`;
  constructor(private http: HttpClient, ) { }

  getUsuarios(){
    return this.http.get(this.url);
  }

  getOrganizadorUsuario(usuario:string){
    return this.http.get<Organizador>(`${API_URL}/organizadores/usuario/${usuario}`)
  }

  getOrganizadorId(id:string){
    return this.http.get<Organizador>(`${API_URL}/organizadores/${id}`)
  }

  deleteOrganizador(id:string){

    return this.http.delete(`${API_URL}/organizadores/${id}`);
  }
  updateOrganizador(id:string, orga){

    return this.http.put(`${API_URL}/organizadores/${id}`,orga);
  }
  
  addOrganizador(orga){

    return this.http.post(`${API_URL}/organizadores`,orga);
  }
  
  darEventos(pId){
    return this.http.get(`${API_URL}/eventos/para-organizador/${pId}`)
    
  }
  darEvento(pId){
    return this.http.get(`${API_URL}/eventos/para-organizador/evento/${pId}`)
    
  }

  
}
