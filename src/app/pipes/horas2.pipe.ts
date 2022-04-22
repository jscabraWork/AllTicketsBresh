import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'horas2'
})
export class HoraPipe2 implements PipeTransform{

    transform(valor: string, args?:any){
        
        
        if(valor.substr(0,2)=='12'){
            return '12' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='13'){
            return '1' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='14'){
            return '2' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='15'){
            return '3' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='16'){
            return '4' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='17'){
            return '5' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='18'){
            return '6' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='19'){
            return '7' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='20'){
            return '8' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='21'){
            return '9' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='22'){
            return '10' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='23'){
            return '11' +':' +valor.substr(3,4) +' PM';
        }
        if(valor.substr(0,2)=='00'){
            return '12' +':' +valor.substr(3,4) +' AM';
        }

        if(valor.substr(0,2)=='01'){
            return '1' +':' +valor.substr(3,4) +' AM';
        }

        if(valor.substr(0,2)=='02'){
            return '2' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='03'){
            return '3' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='04'){
            return '4' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='05'){
            return '5' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='06'){
            return '6' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='07'){
            return '7' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='08'){
            return '8' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='09'){
            return '9' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='10'){
            return '10' +':' +valor.substr(3,4) +' AM';
        }
        if(valor.substr(0,2)=='11'){
            return '11' +':' +valor.substr(3,4) +' AM';
        }

        

    }
}