import { Boleta } from '../eventos/boleta.model';

export interface Promotor{
    nombre:string;
    numeroDocumento:number;
    tipoDocumento:string;
    usuario:string;
    contrasena:string;
    tipo:string;
    codigoventa:string;
	dineroTotal:string;
	boletasVendidas: Boleta[];
	
}