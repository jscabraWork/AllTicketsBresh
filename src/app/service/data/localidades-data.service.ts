import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesDataService {
 
  constructor(private http: HttpClient) { }


  getAllLocalidadesDeEvento(pEvento:string){
    return this.http.get<Localidad[]>(`${API_URL}/eventos/${pEvento}/localidades`);
  }

  getLocaliddadPorId(pIdLocalidad:number, pEvento:string){

    return this.http.get<Localidad> (`${API_URL}/eventos/${pEvento}/localidades/localidad/${pIdLocalidad}`)
  }

  addLocalidadAEvento( localidad, pEvento:string){
    
    return this.http.post(`${API_URL}/eventos/${pEvento}/localidades`,localidad); 
  }


  deleteEvento(idEvento:string, pIdLocalidad:number){
    return this.http.delete(`${API_URL}/eventos/${idEvento}/localidades/${pIdLocalidad}`); 
  }


  getAllLocalidadesDeEventoNombre(pEvento:string){
    return this.http.get<Localidad[]>(`${API_URL}/eventos/nombre/${pEvento}/localidades`);
  }

  modificarLocalidad(localidad:Localidad, pEvento, pIdLocalidad){
    return this.http.put(`${API_URL}/eventos/${pEvento}/localidades/${pIdLocalidad}`, localidad);
  }
}
