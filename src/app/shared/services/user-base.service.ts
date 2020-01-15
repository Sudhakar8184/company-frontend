import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ApiServiceService } from './api.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserBaseService extends ApiServiceService {

  constructor(public http: Http) {
    super();
  }

  signup(data: any): Observable<any> {
    console.log(">?>?>?>", environment);

    return this.http.post(environment.root + 'signup', data, this.post()).map((res) => {
      // console.log(res)
      return res.json()
    }).catch((error) => {
      return new ErrorObservable(error.error);
    })
  }
  
  login(data: any): Observable<any> {
    return this.http.post(environment.root + 'login', data, this.post()).map((res) => {
      console.log(res)
      this.setSession(res)
      return res.json()
    }).catch((error) => {
      return new ErrorObservable(error.error);
    })
  }

  addTeamMember(data: any): Observable<any> {
    console.log(">?>?>?>", environment);

    return this.http.post(environment.root + 'addteammember', data, this.post()).map((res) => {
      // console.log(res)
      return res.json()
    }).catch((error) => {
      return new ErrorObservable(error.error);
    })
  }
  getUsers(data?: any): Observable<any> {
    return this.http.get(environment.root + 'getusers',this.get()).map((res) => {
      return res.json()
    }).catch((error) => {
      return new ErrorObservable(error.error);
    })
  }

  getUserDetails(): Observable<any> {
    return this.http.get(environment.root + 'getuserdetails', this.get()).map((res) => {
      console.log(res)
      return res.json()
    }).catch((error) => {
      return new ErrorObservable(error.error);
    })
  }
  private setSession(data) {
    let main = JSON.parse(data._body)
    if (main.success) {
      window.localStorage['role'] = main.data.role;
      window.localStorage['u_id'] = main.data._id;
      window.localStorage['token'] = main.data.token;
    }
  }
}
