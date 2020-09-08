import { Palco } from './../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Localidad } from './../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';

export interface Evento {
    id: string,
    nombre:string,
    fecha:Date,
    descripcion:string,
    lugar:string,
    video:string,
    terminosYCondiciones:string,
    recomendaciones:string,
    ciudadIdTexto:number,
    organizadorid:number,
    imagen:string,
    imagenes:string[],
    artistas,
    fechaFin:Date,
    mapa: string,
    localidades:Localidad[],
    palcos:Palco[]

}