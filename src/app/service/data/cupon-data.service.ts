import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CuponDataService {

  constructor(private http:HttpClient) { }


  validarCupon(codigo:string,idBoleta:number,cantidad:number)
  {
    return this.http.get(`${API_URL}/cupon/codigo/${codigo}/${idBoleta}/${cantidad}`);
  }

  cuponseValidos(idLocalidad:number){
    return this.http.get(`${API_URL}/cupones/${idLocalidad}`);
  }
  
}
