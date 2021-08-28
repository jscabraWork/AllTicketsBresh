import { Evento } from './../evento.model';
import { Localidad } from './../../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
export interface Etapa {

   
    id:number,
    localidades:Localidad[],
	nombre:string
	evento: Evento;
	visible:boolean;
	promotorVenta:boolean

}
