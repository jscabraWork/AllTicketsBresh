import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAutheticationService } from './hardcoded-authetication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardContadorService implements CanActivate{

  constructor(private autenticador:HardcodedAutheticationService, private route: Router, private router:ActivatedRoute) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.autenticador.contadorLoggin() ){
      return true;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }
    
  }
}
