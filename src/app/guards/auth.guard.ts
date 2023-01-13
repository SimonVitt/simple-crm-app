import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginguardService } from '../services/loginguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {     
    let sessionId = localStorage.getItem('loggedIn');
    console.log(route.paramMap.get('id'));
    console.log(sessionId);
    if(sessionId === route.paramMap.get('id')){
      return true;
    }else{
      this.router.navigateByUrl('');
      return false;
    }
  }
  
}
