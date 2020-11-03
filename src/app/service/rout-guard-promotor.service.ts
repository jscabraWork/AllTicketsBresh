import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAutheticationService } from './hardcoded-authetication.service';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardPromotorService implements CanActivate{

  constructor(private autenticador: HardcodedAutheticationService, private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if(this.autenticador.promotorLoggin()){
      return true;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }
    
  }
}
