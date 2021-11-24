import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL } from 'src/app/app.constants';
import { Reserva } from 'src/app/models/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasDataService {

  constructor(private http: HttpClient) { }
  getAllReservas(){
    return this.http.get(`${API_URL}/reservas`)
  }
  getAllReservasNoVendidasDePromotorPorEvento(pIdPromotor,nombreEvento){
    return this.http.get(`${API_URL}/reservas/promotor/${pIdPromotor}/${nombreEvento}`)
  }
  getReserva(pIdReserva:number){
    return this.http.get<Reserva>(`${API_URL}/reservas/${pIdReserva}`)
  }
  postReserva(reserva:Reserva,pIdPromotor,pIdPalco){
    return this.http.post<Reserva>(`${API_URL}/reservas/${pIdPromotor}/${pIdPalco}`,reserva)
}
  deleteReserva(pId){
    return this.http.delete(`${API_URL}/reservas/${pId}`)
}

getPalcoReserva(pIdReserva:number){
  return this.http.get<Palco>(`${API_URL}/reservas/palco/${pIdReserva}`)
}
getAllReservasParaOrganizador(pIdEvento){
  return this.http.get((`${API_URL}/promotores/eventos/reservas/${pIdEvento}/organizador`)); 
}

}