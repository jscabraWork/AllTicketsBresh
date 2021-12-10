import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PayUDataService {

  constructor(private http: HttpClient) { }

  getHistorial(response, nombreEvento){
    return this.http.get(`${API_URL}/payu/response/${response}/${nombreEvento}`);
  }

}
