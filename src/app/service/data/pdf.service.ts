import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { API_URL, API_URL2 } from 'src/app/app.constants';
import { Boleta } from './../../eventos/boleta.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http:HttpClient) { }

  getPdfBoleta(pId:number, imagen:string){
  return this.http.put(`${API_URL}/genpdf/${pId}`,imagen);



  }

  upload(file): Observable<HttpEvent<any>>{
    
    const formData: FormData= new FormData();
    formData.append('files', file);
    
    const req = new HttpRequest('POST',`${API_URL2}/subir/pdf`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

}
