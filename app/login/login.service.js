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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var user_service_1 = require('../user/user.service');
var LoginService = (function () {
    function LoginService(_http, userService) {
        this._http = _http;
        this.userService = userService;
    }
    LoginService.prototype.isLoggedIn = function () {
        return (this.user != null);
    };
    LoginService.prototype.login = function (loginInformation) {
        return __awaiter(this, void 0, Promise, function* () {
            var _this = this;
            var url = "http://nackademiskasecure.azurewebsites.net/api/account/login";
            return yield this._http.post(url, loginInformation, { withCredentials: true }).toPromise()
                .then(function (response) {
                _this.userService.getUser(response.json().id).then(function (user) {
                    _this.user = user;
                });
                return true;
            })
                .catch(function (error) { return false; });
        });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map