import { Localidad } from "src/app/administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model";

export interface ReservaBoletas{


	id:number,
	cantidad:number,
	numeroDocumentoReserva:string,
	localidad:Localidad,
    usado:boolean,
	promotorDocumento:string
}