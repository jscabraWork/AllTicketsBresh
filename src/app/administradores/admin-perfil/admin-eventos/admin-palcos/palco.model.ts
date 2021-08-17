import { Reserva } from "src/app/models/reserva.model";

export interface Palco {

	id:number,
      precio:number,
	
	  precioParcialPagado:number
	
	  servicio:number,
	
	  nombreEvento:string,
	  nombre:string,
	  personasAdentro: number,
	  vendido:boolean,
	  reservado:boolean,
	  personasMaximas:number,
	  numeroDentroDeEvento:string,
	  fechaVendido : Date,
	  servicioIva:number,
	  proceso:boolean,
	  disponible:boolean,
	  idLocalidad:number,
	  reserva:Reserva
}
