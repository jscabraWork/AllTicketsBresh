import { Palco } from './../administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { Boleta } from './../eventos/boleta.model';
export interface Cliente {
   

    nombre: string,
    numeroDocumento: string,
    tipoDocumento: string,
    usuario: string,
    contrasena:string,

    celular:string,
	correo:string,
    
    publicidad: boolean,
    boletas:Boleta[],
    palcos:Palco[]
    


    
}