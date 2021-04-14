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

  getPalcoParaCompraIndividual(pNombre, pNumero){
    return this.http.get<Palco>(`${API_URL}/evento/nombre/${pNombre}/palco/numero/${pNumero}`);
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


  comprarPalco(idPalco,pIdCliente,valorPagado,  palco){
    return this.http.put(`${API_URL}/palcos/${idPalco}/comprar/${pIdCliente}/${valorPagado}`, palco)
  }

  aportaALaVaca(idPalco,valorPagado){
    return this.http.put(`${API_URL}/palcos/${idPalco}/comprar/${valorPagado}`, null)
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

  marcarComoReservado(idPalco){
    return this.http.put(`${API_URL}/palcos/${idPalco}/marcarVendido`,null)
  }


  marcarComoVendido(idPalco){
    return this.http.put(`${API_URL}/palcos/${idPalco}/vendeAMano`,null)
  }

  marcarComoProceso(idPalco){
    return this.http.put(`${API_URL}/palcos/${idPalco}/marcarPendiente`,null)
  }






aumentarPersonaPalco(idPalco){
  return this.http.put(`${API_URL}/palcos/${idPalco}/personasMas`,null)
}

reservarPalcoExacto(idPalco){
  return this.http.put<Palco>(`${API_URL}/palcos/palco/${idPalco}/reservar`,null)
}

rechazarReservaPalco(idPalco){
  return this.http.put(`${API_URL}/palcos/${idPalco}/rechazar`,null)
}


rechazarReservaPalcoInmediatamente(idPalco){
  return this.http.put(`${API_URL}/palcos/${idPalco}/rechazarI`,null)
}

pasoMuchoTiempoPaca(idPalco){
  return this.http.put(`${API_URL}/palcos/${idPalco}/vaca/rechazar`,null)
}
  
asignarPalco(codigoVenta:string, palco){
  return this.http.put(`${API_URL}/palcosPromotor/${codigoVenta}`, palco)
  
}



pagarPalcosAPromotor(codigoVenta:string){
  return this.http.put(`${API_URL}/palcosPromotorPagar/${codigoVenta}`, null)
  
}



asignarPalcoPuntoFisico(numeroInterno:number, palco){
  return this.http.put(`${API_URL}/palcosPuntosFisicos/${numeroInterno}`, palco)
  
}



pagarPalcosAPromotorPuntoFisico(numeroInterno:number){
  return this.http.put(`${API_URL}/palcosPuntosFisicosPagar/${numeroInterno}`, null)
  
}

pagarPalco(transaccion:string, valorPagado:number, aceptada:string){
  return this.http.put(`${API_URL}/epaycoPago/${transaccion}/monto/${valorPagado}/aceptada/${aceptada}`,null)
}


}
