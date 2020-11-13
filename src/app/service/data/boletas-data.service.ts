import { Boleta } from './../../eventos/boleta.model';
import { Evento } from './../../eventos/evento.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/usuario/cliente.model';
import { Asistente } from 'src/app/administradores/admin-perfil/admin-eventos/admin-lector/asistente.model';

@Injectable({
  providedIn: 'root'
})
export class BoletasDataService {

  url=`${API_URL}/eventos/`
  constructor(private http:HttpClient) { }

  getClienteDeUnaBoleta(pIdBoleta:number){
    return this.http.get<Cliente>(`${API_URL}/boletas/cliente/${pIdBoleta}`);
  }
  
  getAsistenteDeUnaBoleta(pIdBoleta:number){
    return this.http.get<Asistente>(`${API_URL}/boletas/asistente/${pIdBoleta}`);
  }
  getBoletaPorId(pId:number){
    return this.http.get<Boleta>(`${API_URL}/boletas/${pId}`);
  }

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


  

  reservarBoletaIndividual(pEvento:string, pIdLocalidad:number , pBoleta:Boleta){

    return this.http.put(this.url+ `${pEvento}/boletas/${pIdLocalidad}/reservar`, pBoleta);
  }

  reservarBoletaLocalidad(pEvento:string, pIdLocalidad:number, cantidad ){

    return this.http.put <Boleta[]>(this.url+ `${pEvento}/boletas/${pIdLocalidad}/reservarLocalidad/${cantidad}`,null);
  }


  rechazarReservaBoleta( boletas:Boleta[]){

    return this.http.put(`${API_URL}/reservar/rechazar`, boletas);
  }


  rechazarReservaBoletaInstantaneamente(  boletas:Boleta[] ){

    return this.http.put(`${API_URL}/reservar/rechazarI`, boletas);
  }


  comprarBoleta(pEvento:string, pBoleta:Boleta[], pCliente){

    return this.http.put(this.url+ `${pEvento}/boletas/comprar/${pCliente}`, pBoleta);
  }


  
  getBoletasDeUnClienteYDeUnaLocalidad(pEvento:string, pNombreL:string, pCliente:number){

    return this.http.get<Boleta[]>(this.url+`${pEvento}/localidades/${pNombreL}/boletas/cliente/${pCliente}`);  

  }

  addMultiplesBoletasPatrocinio(pEvento,  pIdLocalidad:number,cantidad:number, correoPatrocinio:string, nombrePatrocinador:string){
    return this.http.post(this.url+`${pEvento}/localidades/${pIdLocalidad}/boletas/${cantidad}/patrocinio/${correoPatrocinio}/${nombrePatrocinador}`, null); 
  }

  comprarBoletaParaAsistente(pEvento,pIdLocalidad,pIdBoleta, asistente){
    return this.http.put(`${API_URL}/eventos/${pEvento}/boletas/${pIdLocalidad}/comprar/boleta/${pIdBoleta}/asistente`, asistente);
  }
  
  marcarComoUtiliza(pIdBoleta){
    return this.http.put(`${API_URL}/boletas/marcar/${pIdBoleta}`,null)
  }

  reservarBoletaExacta(pEvento,pIdBoleta){
    return this.http.put <Boleta>(this.url+ `${pEvento}/boletas/{pIdLocalidad}/reservar/${pIdBoleta}`,null);
  }

  asignarBoletasPromotor(codigoVenta:string, boletas){
    return this.http.put(`${API_URL}/boletasPromotor/${codigoVenta}`, boletas)
    
  }

  
pagarBoletasAPromotor(codigoVenta:string){
  return this.http.put(`${API_URL}/boletasPromotorPagar/${codigoVenta}`, null)
  
}



asignarBoletasPuntoFisico(numeroInterno:number, boletas){
  return this.http.put(`${API_URL}/boletasPuntosFisicos/${numeroInterno}`, boletas)
  
}



pagarBoletasAPromotorPuntoFisico(numeroInterno:number){
  return this.http.put(`${API_URL}/boletasPuntosFisicosPagas/${numeroInterno}`, null)
  
}


}