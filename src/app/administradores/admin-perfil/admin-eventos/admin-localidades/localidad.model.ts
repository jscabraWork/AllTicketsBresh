import { Palco } from './../admin-palcos/palco.model';
import { Boleta } from './../../../../eventos/boleta.model';
export interface Localidad {
    id:number;
    nombre: string;
    precio:number;
    
    servicio:number;
    nombreEtapa:string;
    boletasPatrocinio:Boleta[];
    palcos:Palco[];
    servicioPorcentaje:number;
    efectivo:boolean;
    maximoVender:number;
    boletas:Boleta[];
    vaca:boolean
}