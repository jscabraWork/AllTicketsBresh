import { Foto } from "../models/foto.model";

export interface Ciudad {
    id: number,
    nombre:string,
    imagen:Foto,
    temperatura:number
}