import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpaycoTransaction } from '../models/epayco.model';

@Injectable({
  providedIn: 'root'
})
export class EpaycoService {
  configUrl = '/validation/v1/reference/';
  constructor(	private http: HttpClient) { }
  getTransactionResponse(refPayco: string) {
	  return this.http.get<EpaycoTransaction>(this.configUrl+refPayco);
	}
}
