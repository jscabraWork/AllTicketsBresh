import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpaycoTransaction } from '../models/epayco.model';

@Injectable({
  providedIn: 'root'
})

export class EpaycoService {


  configUrl = 'https://secure.epayco.co/validation/v1/reference/';

  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'})
  constructor(	private http: HttpClient) { }
  getTransactionResponse(refPayco: string) {
	  return this.http.get<EpaycoTransaction>(this.configUrl+refPayco, {headers: this.httpHeaders})
	}
}
