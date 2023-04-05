import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _AuthenticationService: AuthenticationService,private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this._AuthenticationService.currentUser.getValue())
    if (this._AuthenticationService.currentUser.getValue() != null) {
      return true;
    }
    else {
      this._Router.navigate(['/login'])
      return false;
    }
  }
}
