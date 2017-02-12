import { Injectable } from '@angular/core';
import { LoginInformation } from './logininformation';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginService {
  user: User;

  constructor(private _http: Http, private userService: UserService) { }
  
  isLoggedIn(): boolean {
    return (this.user != null)
  }
  async login(loginInformation: LoginInformation): Promise<boolean> 
  {
    const url = "http://nackademiskasecure.azurewebsites.net/api/account/login";
    return await this._http.post(url, loginInformation, { withCredentials: true } ).toPromise()
    .then(response => {
      this.userService.getUser(response.json().id).then(user => {
        this.user = user;
      });
      return true;
    })
    .catch(error => false);
  }
}
