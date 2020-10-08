import { Palco } from './../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/usuario/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class PalcosDataService {

  constructor(private http: HttpClient) { }

  getAllPalcosDeUnEvento(pIdEvento:string){
    return this.http.get(`${API_URL}/eventos/${pIdEvento}/palcos`)

  }

  getPalco(pIdLocalidad, pIdPalco){
    return this.http.get<Palco>(`${API_URL}/localidad/${pIdLocalidad}/palcos/${pIdPalco}`);
  }
  getAllPalcosVendidosDeUnaLocalidad(pIdLocalidad, pVendido){
    return this.http.get<Palco[]>(`${API_URL}/localidad/${pIdLocalidad}/palcos/vendido/${pVendido}}`)
  }

  getClientesDeUnPalco(pIdPalco)
  {
    return this.http.get<Cliente[]>(`${API_URL}/palcos/clientes/${pIdPalco}`)
  }
  agregarPalcosALocalidad(pIdLocalidad:number, palco:Palco, cantidad:number){
    return this.http.post(`${API_URL}/localidad/${pIdLocalidad}/palcos/${cantidad}`,palco)



  }
  borrarPalco(pIdPalco, pIdEvento){
    return this.http.delete(`${API_URL}/eventos/${pIdEvento}/palcos/${pIdPalco}`)
  }


  comprarPalco(idPalco,pIdCliente,valorPagado){
    return this.http.put(`${API_URL}/palcos/${idPalco}/comprar/${pIdCliente}/${valorPagado}`, null)
  }


  reservarPalco(idLocalidad){
    return this.http.put<Palco>(`${API_URL}/palcos/localidad/${idLocalidad}/reservar`,null)
  }

  modificarPalco(idPalco,pIdLocalidad, palco:Palco){
      return this.http.put(`${API_URL}/localidad/${pIdLocalidad}/palcos/${idPalco}`,palco)
  }

  agregarClientesAlPalco(idPalco, pIdCliente){
    return this.http.put(`${API_URL}/palcos/${idPalco}/agregarCliente/${pIdCliente}`,null)
  }
}
