import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { UserPost } from './user-post';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private _customerUrl = `http://nackademiskasecure.azurewebsites.net/api/customer/`;

  constructor(private _http: Http) { }
  
  async getUsers(): Promise<User[]> {
    const response = await this._http.get(this._customerUrl).toPromise();
    return response.json();
  }
  async getUser(id: number): Promise<User> {
    const url = `${this._customerUrl}${id}`
    const response = await this._http.get(url).toPromise();
    return response.json();
  }
  async postUser(user: UserPost): Promise<any> {
        let bodyString = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        
        const response = await this._http.post(this._customerUrl, bodyString, options).toPromise();
  }
}
