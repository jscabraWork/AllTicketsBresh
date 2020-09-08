import { Palco } from './../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Boleta } from './../eventos/boleta.model';
export interface Cliente {
   

    nombre: string,
    numeroDocumento: number,
    tipoDocumento: string,
    usuario: string,
    contrasena:string,

    celular:string,
	correo:string,
    direccion:string,
    publicidad: boolean,
    boletas:Boleta[],
    palcos:Palco[]
    


    
}