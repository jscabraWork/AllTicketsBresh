import { PuntoFisico } from './../../puntos-fisicos/puntoFisico.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuntosFisicosDataService {

  constructor(private http: HttpClient) { }

  getAllPuntosFisicos(){
    return this.http.get(`${API_URL}/puntosFisicos`)
  }

  getPuntoPorId(pId)
  {
    return this.http.get<PuntoFisico>(`${API_URL}/puntosFisicos/${pId}`)
  }


  getPuntoPorUsuario(pUsuario)
  {
    return this.http.get<PuntoFisico>(`${API_URL}/puntosFisicos/usuario/${pUsuario}`)
  }
  agregarPunto(punto){
    return this.http.post(`${API_URL}/puntosFisicos`, punto);
  }

  updatePunto(punto){
    return this.http.put(`${API_URL}/puntosFisicos`, punto)
  }
  deletePunto(pId){
    return this.http.delete(`${API_URL}/puntosFisicos/${pId}`)
  }

}
