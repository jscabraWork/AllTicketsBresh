import { Evento } from './../eventos/evento.model';
export interface Organizador {
    nombre: string,
    numeroDocumento: string,
    tipoDocumento: string,
    usuario:string,
    contrasena: string,
    tipo: string,
    eventos:Evento []
        
           

}