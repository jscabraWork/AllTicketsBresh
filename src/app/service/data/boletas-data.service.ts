import { Boleta } from './../../eventos/boleta.model';
import { Evento } from './../../eventos/evento.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletasDataService {

  url=`${API_URL}/eventos/`
  constructor(private http:HttpClient) { }


  getAllBoletasLocalidad(pEvento:string, pLocalidad:number){
    return this.http.get(this.url+`${pEvento}/localidades/${pLocalidad}/boletas`);
  }


  addMultiplesBoletas(pEvento, pBoleta, pIdLocalidad:number,cantidad:number){
    return this.http.post(this.url+`${pEvento}/localidades/${pIdLocalidad}/boletas/${cantidad}`, pBoleta); 
  }


  
  deleteEvento(idEvento:string, pIdLocalidad:number, pIdBoleta){
    return this.http.delete(`${API_URL}/eventos/${idEvento}/localidades/${pIdLocalidad}/boletas/${pIdBoleta}`); 
  }


  getBoletasVendidasYNoVendidas(pEvento:string, pLocalidad:number, vendida:boolean){

    return this.http.get(this.url+`${pEvento}/localidades/${pLocalidad}/boletas/vendida/${vendida}`);  

  }

  getBoletasVendidasYReservado(pEvento:string, pLocalidad:number, vendida:boolean, reservado:boolean){

    return this.http.get<Boleta[]>(this.url+`${pEvento}/localidades/${pLocalidad}/boletas/vendida/${vendida}/reservado/${reservado}`);  

  }


  

  reservarBoleta(pEvento:string, pIdLocalidad:number , pBoleta:Boleta){

    return this.http.put(this.url+ `${pEvento}/boletas/${pIdLocalidad}/reservar`, pBoleta);
  }


  rechazarReservaBoleta(pEvento:string, pIdLocalidad:number , pBoleta:Boleta){

    return this.http.put(this.url+ `${pEvento}/boletas/${pIdLocalidad}/reservar/rechazar`, pBoleta);
  }

  
  comprarBoleta(pEvento:string, pIdLocalidad:number , pBoleta:Boleta, pCliente){

    return this.http.put(this.url+ `${pEvento}/boletas/${pIdLocalidad}/comprar/${pCliente}`, pBoleta);
  }


  
  getBoletasDeUnClienteYDeUnaLocalidad(pEvento:string, pNombreL:string, pCliente:number){

    return this.http.get<Boleta[]>(this.url+`${pEvento}/localidades/${pNombreL}/boletas/cliente/${pCliente}`);  

  }

  
  
}