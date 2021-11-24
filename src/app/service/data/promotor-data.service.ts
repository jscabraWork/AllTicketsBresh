import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Promotor } from 'src/app/promotor-perfil/promotor.model';

@Injectable({
  providedIn: 'root'
})
export class PromotorDataService {

  constructor(private http:HttpClient) { }

  getAllPromotores(){
    return this.http.get<Promotor[]>((`${API_URL}/promotores`)); 
  }

  getAllPromotoresByEventoId(pIdEvento){
    return this.http.get<Promotor[]>((`${API_URL}/promotores/eventos/${pIdEvento}`)); 
  }

  getAllPromotoresByEventoIdParaOrganizador(pIdEvento){
    return this.http.get((`${API_URL}/promotores/eventos/${pIdEvento}/organizador`)); 
  }

  getPromotorById(pId)
  {
    return this.http.get<Promotor>((`${API_URL}/promotores/${pId}`)); 
  }

  addPromotor(promotor:Promotor){
    return this.http.post<Promotor>((`${API_URL}/promotores`), promotor); 
  }

  updatePromotor(promotor:Promotor, pId){
    return this.http.put<Promotor>((`${API_URL}/promotores/${pId}`), promotor); 
  }

  deletePromotorById(pId)
  {
    return this.http.delete<Promotor>((`${API_URL}/promotores/${pId}`)); 
  }

  getPromotorByCodigoVenta(pCodigoVenta)
  {
    return this.http.get<Promotor>((`${API_URL}/promotores/codigo/${pCodigoVenta}`)); 
  }

  getPromotorByUsuario(pUsuario)
  {
    return this.http.get<Promotor>((`${API_URL}/promotores/usuario/${pUsuario}`)); 
  }

 
}
