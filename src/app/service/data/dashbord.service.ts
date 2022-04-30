import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  constructor(private http:HttpClient) { }

  dashbord()
  {
    return this.http.get(`${API_URL}/dashbord`);
  }
}
