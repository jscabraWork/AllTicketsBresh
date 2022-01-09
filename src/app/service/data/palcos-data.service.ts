import { Palco } from './../../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL, API_URL2 } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/usuario/cliente.model';
import { Localidad } from 'src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';

@Injectable({
  providedIn: 'root'
})
export class PalcosDataService {

  constructor(private http: HttpClient) { }

  getAllPalcosDeUnEvento(pIdEvento:string){
    return this.http.get(`${API_URL}/eventos/${pIdEvento}/palcos`)

  }

  getAllPalcosVendidoDeLocalidad(pIdLocalidad){
    return this.http.get(`${API_URL}/localidad/ventas/${pIdLocalidad}/palcos`)

  }



  getPalco(pIdLocalidad, pIdPalco){
    return this.http.get<Palco>(`${API_URL}/localidad/${pIdLocalidad}/palcos/${pIdPalco}`);
  }

  getPalcoParaCompraIndividual(pNombre, pNumero){
    return this.http.get<Palco>(`${API_URL}/evento/nombre/${pNombre}/palco/numero/${pNumero}`);
  }

  getAllPalcosPromotorEvento(pIdPromotor, pNombre){
    return this.http.get<Palco[]>(`${API_URL}/palcos/promotor/${pIdPromotor}/${pNombre}`)
  }

  getClientesDeUnPalco(pIdPalco)
  {
    return this.http.get<Cliente[]>(`${API_URL}/palcos/clientes/${pIdPalco}`)
  }
  agregarPalcosALocalidad(pIdLocalidad:number, palco:Palco, numeroArriba:number, numeroAbajo:number, letra){
    return this.http.post(`${API_URL}/localidad/${pIdLocalidad}/palcos/${numeroArriba}/${numeroAbajo}/${letra}`,palco)



  }

getLocalidadDelPalco(pIdPalco){
  return this.http.get<Localidad>(`${API_URL}/palco/${pIdPalco}/localidad`)
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
  
  quitarClientesAlPalco(idPalco, pIdCliente){
    return this.http.put(`${API_URL}/palco/quitar/${idPalco}/${pIdCliente}`,null)
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


  
  marcarComoDisponible(idPalco){
    return this.http.put(`${API_URL}/palcos/${idPalco}/disponible`,null)
  }



revisarUsoBeneficio(numeroDocumento,pNombre){
  return this.http.get<boolean>(`${API_URL}/promotor/uso-beneficio/${numeroDocumento}/${pNombre}`);
}



reservarPalcoExacto(idPalco){
  return this.http.put<Palco>(`${API_URL}/palcos/palco/${idPalco}/reservar`,null)
}

rechazarReservaPalcoEfectivo(idPalco){
  return this.http.put(`${API_URL}/palcos/${idPalco}/rechazar/efectivo`,null)
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
  

acomodarPreciosAlternos(pIdPalco){
  return this.http.put(`${API_URL}/localidad/palcos/${pIdPalco}/alternos`,null);
}

acomodarPreciosOriginales(pIdPalco){
  return this.http.put(`${API_URL}/localidad/palcos/${pIdPalco}/originales`,null);
}

pagarPalcosAPromotor(codigoVenta:string){
  return this.http.put(`${API_URL}/palcosPromotorPagar/${codigoVenta}`, null)
  
}



comprarPuntoFiscoPalco(referenceCode){
  return this.http.post(`${API_URL}/puntoFisico/palcos/recibir`,referenceCode)
}



pagarPalcosAPromotorPuntoFisico(numeroInterno:number){
  return this.http.put(`${API_URL}/palcosPuntosFisicosPagar/${numeroInterno}`, null)
  
}

pagarPalco(transaccion:string, valorPagado:number, aceptada:string){
  return this.http.put(`${API_URL}/epaycoPago/${transaccion}/monto/${valorPagado}/aceptada/${aceptada}`,null)
}

voltear(pIdLocalidad){
  return this.http.get(`${API_URL}/voltear/${pIdLocalidad}`)
}

mandarQRPalco(pIdPalco){
  return this.http.get(`${API_URL2}/palco/qrs/${pIdPalco}`)
}

}
