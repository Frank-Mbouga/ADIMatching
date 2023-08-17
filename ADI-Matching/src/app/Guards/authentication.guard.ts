import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstoreService } from '../services/localstore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private localstore: LocalstoreService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userAccess:boolean = false;
        if( this.localstore.get('User').data['loginStatus'] === true) {
          return this.localstore.get('User').data['loginStatus']
        }  
      
      alert('Cannot Access Application');

    return false;
  }
  
}
