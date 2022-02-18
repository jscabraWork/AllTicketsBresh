import { Cliente } from './../../usuario/cliente.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  mandarCorreo(cliente:Cliente, contrasena){
    return this.http.post(`${API_URL}/clientes/correo/${contrasena}`, cliente)
  }

  getClientePorId(pId:string){
    return this.http.get<Cliente>(this.url+'/'+pId);
  }

  
  createCliente(usuario):Observable<any>{
    return this.http.post(`${API_URL}/clientes`,usuario).pipe(
      catchError(e=>{
   
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);})
    );
  }


  olvidoContrasenia(correo:string){
    return this.http.get(`${API_URL}/olvido/${correo}`)
  }
  deleteUsuario(id:string){

    return this.http.delete(`${API_URL}/clientes/${id}`);
  }

  updateCliente(id:string, usuario){
    return this.http.put(`${API_URL}/clientes/${id}`, usuario).pipe(
      catchError(e=>{
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }


}
