import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MandarCorreosService {

  constructor(private http: HttpClient) { }

  contactanos(nombre, mensaje, correo){
    return this.http.get(`${API_URL}/contactanos/${nombre}/${mensaje}/${correo}`)
  }
}
