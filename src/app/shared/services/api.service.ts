import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';


@Injectable()
export class ApiServiceService {

  headers: any;

  constructor(
  ) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    });
  }


  protected post() {
    return new RequestOptions({ headers: this.headers, method: 'post' });
  }

  protected get() {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    });
    return new RequestOptions({ headers: this.headers });
  }

  protected put() {

    return new RequestOptions({ headers: this.headers, method: 'put' });
  }

  protected patch() {
    return new RequestOptions({ headers: this.headers, method: 'patch' });
  }

  protected getResponse(res: any) {
    return res['data'] || {};
  }


}
