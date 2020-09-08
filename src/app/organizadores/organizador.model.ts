import { Evento } from './../eventos/evento.model';
export interface Organizador {
    nombre: string,
    numeroDocumento: number,
    tipoDocumento: string,
    usuario:string,
    contrasena: string,
    tipo: string,
    eventos:Evento []
        
           

}