import { HardcodedAutheticationService } from './hardcoded-authetication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardMinisterioService implements CanActivate{

  constructor(private autenticador: HardcodedAutheticationService, private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if(this.autenticador.ministerioLoggin()){
      return true;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }
    
  }
}
