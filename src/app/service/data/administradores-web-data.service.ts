import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresWebDataService {

 
  constructor(
    private http: HttpClient
  ) { }


  getAllAdministradores(){
    return this.http.get(`${API_URL}/administradores`);
  }
  getAdministrador(id){
    return this.http.get(`${API_URL}/administradores/${id}`)
  }

  deleteAdministrador(id){
    return this.http.delete(`${API_URL}/administradores/${id}`)
  }
  updateAdministrador(id, admin){
    return this.http.put(`${API_URL}/administradores/${id}`, admin)
  }

  addAdministrador(admin){
    return this.http.post(`${API_URL}/administradores`, admin)
  }

}
