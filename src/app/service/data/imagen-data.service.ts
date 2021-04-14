import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, API_URL2 } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ImagenDataService {

  constructor(private http:HttpClient) { }

  uploadFotoEvento(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL2}/upload/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  uploadFotoFinal(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL2}/upload/fotoFinal/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  uploadFotoEventoBanner(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL2}/upload/imagenesbanner/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }
  uploadImagenMapa(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL2}/upload/mapa/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  uploadImagenCiudad(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL2}/upload/ciudad/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  getFiles(){
    return this.http.get(`${API_URL2}/files`)
  }

  deleteFile(filename:string){

    return this.http.get(`${API_URL2}/${filename}`)
  }
}
