import { Boleta } from './../../../../eventos/boleta.model';
export interface Localidad {
    id:number,
    nombre: string,
    precio:number,
    boletas:Boleta[],
    servicio:number,
    nombreEtapa:string,
    boletasPatrocinio:Boleta[]
   
}