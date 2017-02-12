import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { LoginService } from '../login/login.service';

import { UserPost } from './user-post';
import { LoginInformation } from '../login/loginInformation';

@Component({
    templateUrl: 'app/user/user-register.component.html'
})
export class UserRegisterComponent {

    message: string;
    user: UserPost = new UserPost();
    loginInformation: LoginInformation = new LoginInformation();

    constructor(private _http: Http,
                private _userService: UserService,
                private _loginService: LoginService,
                private _router: Router) {}

    onSubmit(): void {
        console.log('submit');

        this._userService.postUser(this.user);
        console.log('userposted');

        this.loginInformation.email = this.user.email;
        console.log('email bound');
        this.loginInformation.password = this.user.password;
        console.log('password bound');
        this._loginService.login(this.loginInformation).then(result => {
        if ( !result ) {
            this.message = "Kunde inte logga in!";
        }
        else {
            console.log('login successfull');
            this._router.navigate(["/auctions"]);
        }
        });
    }
}