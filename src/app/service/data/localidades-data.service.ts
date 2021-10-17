import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';

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

  
  getEtapaPorIdLocalidad(pIdLocalidad:number){

    return this.http.get<Etapa> (`${API_URL}/localidad/${pIdLocalidad}`)
  }

  getLocalidadVisibleId(pIdLocalidad:number){
    return this.http.get<Localidad> (`${API_URL}/localidad/${pIdLocalidad}/visibles`)
  }
  addLocalidadAEvento( localidad, pEvento:string, pIdEtapa:number){
    
    return this.http.post(`${API_URL}/eventos/${pEvento}/localidades/etapas/${pIdEtapa}`,localidad); 
  }
  setAdiciones(pIdLocalidad:number,precio,servicio,servicioIVA,adiciones,maximoAdiciones){

    return this.http.get<Etapa> (`${API_URL}/eventos/localidades/adiciones/localidad/${pIdLocalidad}/${precio}/${servicio}/${servicioIVA}/${adiciones}/${maximoAdiciones}`)
  }

  setAlternoss(pIdLocalidad:number,precio,servicio,servicioIVA){

    return this.http.get<Etapa> (`${API_URL}/eventos/localidades/localidad/${pIdLocalidad}/${precio}/${servicio}/${servicioIVA}`)
  }


  
  deleteEvento(idEvento:string, pIdLocalidad:number){
    return this.http.delete(`${API_URL}/eventos/${idEvento}/localidades/${pIdLocalidad}`); 
  }


  getAllLocalidadesDeEventoNombre(pEvento:string){
    return this.http.get<Localidad[]>(`${API_URL}/eventos/nombre/${pEvento}/localidades`);
  }

  modificarLocalidad(localidad:Localidad, pEvento, pIdLocalidad, pIdEtapa:number){
    return this.http.put(`${API_URL}/eventos/${pEvento}/localidades/${pIdLocalidad}/etapa/${pIdEtapa}`, localidad);
  }

  cambiarEfectivo(localidad:number){
    return this.http.put(`${API_URL}/localidad/efectivo/${localidad}`,null);
  }
}
