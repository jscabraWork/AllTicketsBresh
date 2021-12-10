import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAutheticationService } from './hardcoded-authetication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardCoordinadorService {

  constructor(private autenticador:HardcodedAutheticationService, private route: Router, private router:ActivatedRoute) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.autenticador.coordinadorLoggin() ){
      return true;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }
    
  }
}
