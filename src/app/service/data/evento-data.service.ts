import { API_URL } from './../../app.constants';
import { Evento } from './../../eventos/evento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from 'src/app/models/foto.model';
import { Ciudad } from 'src/app/ciudades/ciudad.model';


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
    
    return this.http.get(`${API_URL}/eventos/${id}`);
  }
  getEventoIdPerfil(id:string){
    
    return this.http.get(`${API_URL}/eventos/perfil/${id}`);
  }
  getCiudadDeEvento(id:string){
    
    return this.http.get<Ciudad>(this.urlGetOne+"ciudad/"+id);
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

  cambiarSoldout(id:string){
    
    return this.http.put(`${API_URL}/eventos/soldout/${id}`,null);
  }
  cambiarOculto(pId:string){
    
    return this.http.put(`${API_URL}/eventos/oculto/${pId}`,null);
  }

  addEventoId( evento, idOrganizador){
    
    return this.http.post(`${API_URL}/eventos/organizador/${idOrganizador}`,evento);
  }


  agregarMensaje(pIdEvento:string,pMensaje:string){
    
    return this.http.put(`${API_URL}/eventos/evento/${pIdEvento}/mensaje/${pMensaje}`,null);
  }
 
  getFotoFinalDeEvento(pDescripcion){
    return this.http.get<Foto>(`${API_URL}/eventos/fotoFinal/${pDescripcion}`)
  }

  asignarFechaApertura(pId, year, month,dayOfMonth,hour,minute){
    return this.http.put(`${API_URL}/evento/${pId}/fechaApertura/${year}/${month}/${dayOfMonth}/${hour}/${minute}`,null)
  }

  agregarPromotorAEvento(idEvento, idPromotor){
    return this.http.put(`${API_URL}/evento/promotor/agregar/${idEvento}/${idPromotor}`,null)
  }
  eliminarPromotorAEvento(idEvento, idPromotor){
    return this.http.put(`${API_URL}/evento/promotor/eliminar/${idEvento}/${idPromotor}`,null)
  }

  agregarOrganizadorAlEvento(id,idOrganizador){
    return this.http.put(`${API_URL}/eventos/${id}/organizaor/${idOrganizador}`,null)
  }

}
