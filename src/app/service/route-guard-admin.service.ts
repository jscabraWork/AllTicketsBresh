import { HardcodedAutheticationService } from './hardcoded-authetication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardAdminService implements CanActivate{

  constructor(private autenticador:HardcodedAutheticationService, private route: Router, private router:ActivatedRoute) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.autenticador.adminLoggin() ){
      return true;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }
    
  }
}
