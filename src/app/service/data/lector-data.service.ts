import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL3 } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LectorDataService {

  constructor(private http: HttpClient) { }

  getPalco(texto:string){
    return this.http.get(`${API_URL3}/lector/palco/${texto}`);
  }

  ingresarPersonas(idPalco:number, personasIngresar:number) {
    return this.http.get(`${API_URL3}/lector/entrar/${idPalco}/personas/${personasIngresar}`);
   
  }
  getBoleta(texto:string){
    return this.http.get(`${API_URL3}/lector/boleta/${texto}`);
  }
}
