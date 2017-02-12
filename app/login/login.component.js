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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var logininformation_1 = require('./logininformation');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(_location, _loginService, _router) {
        this._location = _location;
        this._loginService = _loginService;
        this._router = _router;
        this.loginInformation = new logininformation_1.LoginInformation();
        this.message = "";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._loginService.login(this.loginInformation).then(function (result) {
            if (!result) {
                _this.message = "Kunde inte logga in!";
            }
            else {
                _this._router.navigate(["/auctions"]);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-screen',
            templateUrl: './login.component.html',
        }), 
        __metadata('design:paramtypes', [common_1.Location, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map