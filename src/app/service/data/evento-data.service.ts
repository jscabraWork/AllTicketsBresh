import { API_URL } from './../../app.constants';
import { Evento } from './../../eventos/evento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoDataService {

  constructor(private http: HttpClient) { }

urlGet=`${API_URL}/eventos`
urlGetOne=`${API_URL}/eventos/`;
  getAllEventos(){
    return this.http.get<Evento[]>(this.urlGet);
  }

  getAllEventosVisibles(){
    return this.http.get<Evento[]>(this.urlGet+"/visibles");
  }


  getEventoId(id:string){
    
    return this.http.get<Evento>(this.urlGetOne+id);
  }
  deleteEvento(id:string){
    return this.http.delete(`${API_URL}/eventos/${id}`);
  }


  updateEventoId(id:string, evento){
    
    return this.http.put(`${API_URL}/eventos/${id}`,evento);
  }
  cambiarVisibilidad(id:string){
    
    return this.http.put(`${API_URL}/eventos/visible/${id}`,null);
  }

  
  addEventoId( evento){
    
    return this.http.post(`${API_URL}/eventos`,evento);
  }
}
