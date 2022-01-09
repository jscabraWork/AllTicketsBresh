import { Foto } from "src/app/models/foto.model";
import { Producto } from "./producto.model";


export interface LocalidadProducto{
    id:number,
    nombre:string,
	precio:number,
    servicio:number,
    visible:boolean,
    productos:Producto[],
    imagen:Foto;
}