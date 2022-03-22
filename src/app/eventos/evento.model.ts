import { Etapa } from './eventos-perfil/etapa.model';
import { Palco } from './../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Localidad } from './../administradores/admin-perfil/admin-eventos/admin-localidades/localidad.model';
import { Foto } from '../models/foto.model';
import { Adicionales } from '../administradores/admin-perfil/admin-adicionales/adicionales.model';
import { LocalidadProducto } from './localidadP.model';

export class Evento {
    id: string;
    nombre:string;
    fecha:Date;
    descripcion:string;
    lugar:string;
    video:string;
    terminosYCondiciones:string;
    recomendaciones:string;
    ciudadIdTexto:number;
    imagen:Foto;
    imagenes:Foto[];
    artistas;
    fechaFin:Date;
    mapa: string;
    localidades:Localidad[];
    
    horaInicio:string;
    horaFin:string;
    etapas:Etapa[];
    mapaImagen:Foto;
    visible:boolean;
    soldout:boolean;
    mensaje:string;
    imagenFinal:Foto;
    fechaApertura:Date;
    urlMapa:string;
    adicionales:Adicionales[];
    oculto:boolean;
    dineroEntregado:number;
    ciudadNombre:string;
    localidadesProducto:LocalidadProducto[];
    visibleAP:boolean;
    terminado:boolean;
    imprimir:boolean;

}