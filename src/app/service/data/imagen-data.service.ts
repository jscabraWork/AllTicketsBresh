import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ImagenDataService {

  constructor(private http:HttpClient) { }

  uploadFotoEvento(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL}/upload/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  uploadFotoEventoBanner(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL}/upload/imagenesbanner/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }
  uploadImagenMapa(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL}/upload/mapa/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  uploadImagenCiudad(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL}/upload/ciudad/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  getFiles(){
    return this.http.get(`${API_URL}/files`)
  }

  deleteFile(filename:string){

    return this.http.get(`${API_URL}/${filename}`)
  }
}
