import { Injectable, EventEmitter } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { User } from '../models/user';
import { Driver } from 'selenium-webdriver/opera';
@Injectable()
export class StorageService {
 role:string;
  public commonEmitter: EventEmitter<any> = new EventEmitter()
  constructor(public router: Router) { }
  getSessionData(key): any {
    return window.localStorage[key]
  }

  logout() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('u_id')
    this.router.navigate(['login']);
  }
}
