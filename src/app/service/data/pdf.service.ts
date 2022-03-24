import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Boleta } from './../../eventos/boleta.model';
@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http:HttpClient) { }

  getPdfBoleta(pId:number, imagen:string){
  return this.http.put(`${API_URL}/genpdf/${pId}`,imagen);



  }

}
