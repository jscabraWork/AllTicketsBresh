import { Cliente } from './../../usuario/cliente.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosDataService {

  url=`${API_URL}/clientes`;
  constructor(private http: HttpClient) { }


  getAllClientes(){
    return this.http.get(this.url);
  }
  getCliente(usuario:string){
    return this.http.get<Cliente>(this.url+'/usuario/'+usuario);
  }

  getClientePorId(pId:number){
    return this.http.get<Cliente>(this.url+'/'+pId);
  }

  
  createCliente(usuario){
    return this.http.post(`${API_URL}/clientes`,usuario);
  }

  deleteUsuario(id:number){

    return this.http.delete(`${API_URL}/clientes/${id}`);
  }

  updateCliente(id:number, usuario){
    return this.http.put(`${API_URL}/clientes/${id}`, usuario);
  }


}
