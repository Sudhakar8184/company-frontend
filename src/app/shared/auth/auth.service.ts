import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
// import * as jwt_decode from "jwt-decode";
@Injectable()
export class AuthService {
  private jwtHelper;

  constructor(private router: Router,public storageserivce :StorageService) {
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    try{
      const token = localStorage.getItem('token');
      // decode the token to get its payload
      if (token) {
        const tokenPayload = this.jwtHelper.decodeToken(token);
        if (tokenPayload.id == localStorage.getItem('u_id') && tokenPayload.role == localStorage.getItem('role') ) {
          this.storageserivce.role = tokenPayload.role
          return true;
        }
        return false;
      } else {
        return false
      }
    }
    catch{
      return false
    }
  }

}