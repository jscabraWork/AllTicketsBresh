import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etapa } from 'src/app/eventos/eventos-perfil/etapa.model';

@Injectable({
  providedIn: 'root'
})
export class EtapasDataService {

  constructor(private http: HttpClient) { }

  getEtapaPorId(pId){
    return this.http.get<Etapa>(`${API_URL}/etapas/${pId}`)
  }

  getAllEtapasDeEvento(pIdEvento:string){
    return this.http.get<Etapa[]>(`${API_URL}/etapas/evento/${pIdEvento}`)
  }


  getAllEtapasVisiblesDeEvento(pIdEvento:string, pVisible){
    return this.http.get<Etapa[]>(`${API_URL}/etapas/evento/${pIdEvento}/visible/${pVisible}`)
  }

  addEtapa(pIdEvento,etapa){
    return this.http.post(`${API_URL}/etapas/evento/${pIdEvento}`,etapa)
  }
  hacerVisible(idEtapa, pIdEvento){
    return this.http.put(`${API_URL}/etapas/${idEtapa}/evento/${pIdEvento}`,null)
  }

  borrarEtapa(idEtapa){
    return this.http.delete(`${API_URL}/etapas/${idEtapa}`)
  }
}
