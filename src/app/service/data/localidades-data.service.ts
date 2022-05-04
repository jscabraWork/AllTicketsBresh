import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';
import { Boleta } from 'src/app/eventos/boleta.model';

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



  addLocalidadAEvento( localidad, pEvento:string, pIdEtapa:number){
    
    return this.http.post(`${API_URL}/eventos/${pEvento}/localidades/etapas/${pIdEtapa}`,localidad); 
  }
  setAdiciones(pIdLocalidad:number,precio,servicio,servicioIVA,adiciones,maximoAdiciones){

    return this.http.put<Etapa> (`${API_URL}/eventos/localidades/adiciones/localidad/${pIdLocalidad}/${precio}/${servicio}/${servicioIVA}/${adiciones}/${maximoAdiciones}`,null)
  }

  setAlternoss(pIdLocalidad:number,precio,servicio,servicioIVA){

    return this.http.put<Etapa> (`${API_URL}/eventos/localidades/localidad/${pIdLocalidad}/${precio}/${servicio}/${servicioIVA}`,null)
  }


  
  deleteEvento(idEvento:string, pIdLocalidad:number){
    return this.http.delete(`${API_URL}/eventos/${idEvento}/localidades/${pIdLocalidad}`); 
  }


 
  modificarLocalidad(localidad:Localidad, pEvento, pIdLocalidad, pIdEtapa:number){
    return this.http.put(`${API_URL}/eventos/${pEvento}/localidades/${pIdLocalidad}/etapa/${pIdEtapa}`, localidad);
  }

  cambiarEfectivo(localidad:number){
    return this.http.put(`${API_URL}/localidad/efectivo/${localidad}`,null);
  }

  mandarLocalidad(idLocalidad:number){
    return this.http.get(`${API_URL}/localidad/qrs/${idLocalidad}`);
  }

  getBoletasLocalidades(localidades:number[]){
    return this.http.put<Boleta[][]>(`${API_URL}/localidades/boletas`, localidades);
  }
}
