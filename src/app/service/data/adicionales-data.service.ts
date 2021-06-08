import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adicionales } from 'src/app/administradores/admin-perfil/admin-adicionales/adicionales.model';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AdicionalesDataService {

  constructor(private http: HttpClient) { }
  
	public  getAllAdicionales() {
		return this.http.get<Adicionales>(`${API_URL}/adicionales`);
	}
	
	public getAdicionaById(pId) {
		return this.http.get<Adicionales>(`${API_URL}/adicionales/${pId}`);
	}
	
	
	public agregarAEvento(adicional:Adicionales,pIdEvento:string) {
	
		return this.http.post<Adicionales>(`${API_URL}/adicionales/evento/${pIdEvento}`,adicional);
	}
	
	public agregarAPalco(adicional:Adicionales,pIdPalaco:number) {
		return this.http.post<Adicionales>(`${API_URL}/adicionales/palco/${pIdPalaco}`,adicional);
	}

	public borrarAdicionaById(pId) {
		return this.http.delete<Adicionales>(`${API_URL}/adicionales/${pId}`);
	}
	
}
