import { Palco } from './../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalcosDataService {

  constructor(private http: HttpClient) { }

  getAllPalcosDeUnEvento(pIdEvento:string){
    return this.http.get(`${API_URL}/eventos/${pIdEvento}/palcos`)

  }

  getAllPalcosVendidosDeUnEvento(pIdEvento, pVendido){
    return this.http.get<Palco[]>(`${API_URL}/eventos/${pIdEvento}/palcos/vendido/${pVendido}`)
  }
  agregarPalcosALocalidad(pIdLocalidad:number, palco:Palco, cantidad:number){
    return this.http.post(`${API_URL}/localidad/${pIdLocalidad}/palcos/${cantidad}`,palco)



  }
  borrarPalco(pIdPalco, pIdEvento){
    return this.http.delete(`${API_URL}/eventos/${pIdEvento}/palcos/${pIdPalco}`)
  }
}
