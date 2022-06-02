import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpaycoTransaction } from '../models/epayco.model';

@Injectable({
  providedIn: 'root'
})

export class EpaycoService {


  configUrl = 'https://secure.epayco.co/validation/v1/reference/';


  private http: HttpClient;

  constructor(	private handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }


  getTransactionResponse(refPayco: string) {
	  return this.http.get<EpaycoTransaction>(this.configUrl+refPayco)
	}

  login(){

    const urlEndPoint = 'https://apify.epayco.co/login';

    const credenciales = btoa('6eab8941497b56b64deba0385714aafe:350ea281d8ab95c5d77aac4c310b829d');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + credenciales,
      //'public_key':'6eab8941497b56b64deba0385714aafe',
      
    });

    return this.http.post<any>(urlEndPoint, {}, {headers: httpHeaders});
    //return this.http.post<any>(urlEndPoint, {}, {headers:{Authorization: 'Basic ' + credenciales}});
    
  }


  crearToken(token, tarjeta){

    const urlEndPoint = 'https://apify.epayco.co/token/card';

 

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      //'public_key':'6eab8941497b56b64deba0385714aafe',
      
    });
    
    return this.http.post<any>(urlEndPoint, tarjeta, {headers: httpHeaders});
    //return this.http.post<any>(urlEndPoint, {}, {headers:{Authorization: 'Basic ' + credenciales}});
    
  }
}
