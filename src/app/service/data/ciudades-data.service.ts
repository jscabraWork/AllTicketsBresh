import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadesDataService {

  constructor(private http:HttpClient) { }

  url=`${API_URL}/ciudades`
  urlGetOne=`${API_URL}/ciudades/`;
  urlGetEventos=`${API_URL}/ciudades/eventos/`;
  getCiudades(){
    return this.http.get(this.url);
  }

  getCiudad(id:number)
  {
    return this.http.get(this.urlGetOne+id);
  }

  getEventosCiudad(id:number){
    return this.http.get(this.urlGetEventos+id)

  }
  deleteCiudad(id:string){
    return this.http.delete(`${API_URL}/ciudades/${id}`);
  }

  updateCiudad(id:string, ciudad){
    return this.http.put(`${API_URL}/ciudades/${id}`, ciudad);
  }

 addCiudad(ciudad){
    return this.http.post(`${API_URL}/ciudades`, ciudad);
  }
}
