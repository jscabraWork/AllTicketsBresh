import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';

@Injectable({
  providedIn: 'root'
})
export class AsistenteDataService {

  constructor(private http:HttpClient) { }

  getAsistente(pId){
    return this.http.get<Asistente>(`${API_URL}/asistentes/${pId}`);
  }
}
