import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Bin } from 'src/app/eventos/eventos-perfil/pago-pay-u/carrito-de-compras/grupo-aval/bin.model';

@Injectable({
  providedIn: 'root'
})
export class BinDataService {

  constructor(private http:HttpClient) { }

  getBin(bin:string){
    return this.http.get<Bin>(`${API_URL}/bines/${bin}`);
  }
}
