"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var login_service_1 = require('../login/login.service');
var user_post_1 = require('./user-post');
var loginInformation_1 = require('../login/loginInformation');
var UserRegisterComponent = (function () {
    function UserRegisterComponent(_http, _userService, _loginService, _router) {
        this._http = _http;
        this._userService = _userService;
        this._loginService = _loginService;
        this._router = _router;
        this.user = new user_post_1.UserPost();
        this.loginInformation = new loginInformation_1.LoginInformation();
    }
    UserRegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('submit');
        this._userService.postUser(this.user);
        console.log('userposted');
        this.loginInformation.email = this.user.email;
        console.log('email bound');
        this.loginInformation.password = this.user.password;
        console.log('password bound');
        this._loginService.login(this.loginInformation).then(function (result) {
            if (!result) {
                _this.message = "Kunde inte logga in!";
            }
            else {
                console.log('login successfull');
                _this._router.navigate(["/auctions"]);
            }
        });
    };
    UserRegisterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/user-register.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService, login_service_1.LoginService, router_1.Router])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
exports.UserRegisterComponent = UserRegisterComponent;
//# sourceMappingURL=user-register.component.js.map