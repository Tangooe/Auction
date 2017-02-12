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
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._customerUrl = "http://nackademiskasecure.azurewebsites.net/api/customer/";
    }
    UserService.prototype.getUsers = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._customerUrl).toPromise();
            return response.json();
        });
    };
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = "" + this._customerUrl + id;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    UserService.prototype.postUser = function (user) {
        return __awaiter(this, void 0, Promise, function* () {
            var bodyString = JSON.stringify(user);
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            var response = yield this._http.post(this._customerUrl, bodyString, options).toPromise();
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map