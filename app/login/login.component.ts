import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginInformation } from './logininformation';
import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  selector: 'login-screen',
  templateUrl: './login.component.html',
})

export class LoginComponent { 
  loginInformation: LoginInformation = new LoginInformation();
  message: string = "";

  constructor(private _location: Location, 
              private _loginService: LoginService,
              private _router: Router) {  }

  login(): void {
    this._loginService.login(this.loginInformation).then(result => {
      if ( !result ) {
        this.message = "Kunde inte logga in!";
      }
      else {
        this._router.navigate(["/auctions"]);
      }
    });
  }
}