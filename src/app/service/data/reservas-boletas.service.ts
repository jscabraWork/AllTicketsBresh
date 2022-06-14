import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { ReservaBoletas } from 'src/app/promotor-perfil/evento-promotor/localidad-promotor/reservar/reservaBoleta';

@Injectable({
  providedIn: 'root'
})
export class ReservasBoletasService {

  constructor(private http: HttpClient) { }

  guardar(pIdPromotor,pIdLocalidad,reserva:ReservaBoletas){
    return this.http.post<ReservaBoletas>(`${API_URL}/reserva/boletas/${pIdPromotor}/${pIdLocalidad}`,reserva)
  }

  getReservaPorId(pIdReserva){
    return this.http.get<any>(`${API_URL}/reserva/boletas/get/${pIdReserva}`)
  }
}
