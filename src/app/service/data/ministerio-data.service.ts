import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Ministerio } from 'src/app/perfil-ministerio/ministerio.model';

@Injectable({
  providedIn: 'root'
})
export class MinisterioDataService {

  constructor(private http: HttpClient) { }

  public getAllMinisterio()
  {
    return this.http.get<Ministerio[]>(`${API_URL}/ministerios`)
  }


  public getMinisterioId(pId)
  {
    return this.http.get<Ministerio>(`${API_URL}/ministerios/${pId}`)
  }

  public crearMinisterios(ministerio:Ministerio){
    return this.http.post(`${API_URL}/ministerios`, ministerio)
  }

  public modificarMinisterios(ministerio:Ministerio){
    return this.http.put(`${API_URL}/ministerios`, ministerio)
  }


  public deleteMinisterioId(pId)
  {
    return this.http.delete(`${API_URL}/ministerios/${pId}`)
  }
}
