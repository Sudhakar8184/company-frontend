import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      localStorage.removeItem('token')
      localStorage.removeItem('u_id')
      localStorage.removeItem('role')
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}