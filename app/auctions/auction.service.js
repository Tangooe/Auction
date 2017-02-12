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
var AuctionService = (function () {
    function AuctionService(_http) {
        this._http = _http;
        this._auctionUrl = 'http://nackademiskasecure.azurewebsites.net/api/auction/';
        this._categoryUrl = 'http://nackademiskasecure.azurewebsites.net/api/category/';
        this._bidUrl = 'http://nackademiskasecure.azurewebsites.net/api/bid/';
    }
    AuctionService.prototype.getAuctions = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._auctionUrl).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getAuction = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = "" + this._auctionUrl + id;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getCategories = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._categoryUrl).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getCategory = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var categories = yield this.getCategories();
            return categories.find(function (c) { return c.id === id; });
        });
    };
    AuctionService.prototype.getBids = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = "" + this._bidUrl + id;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.postBid = function (bid) {
        return __awaiter(this, void 0, Promise, function* () {
            var bodyString = JSON.stringify(bid);
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
            var response = yield this._http.post(this._bidUrl, bodyString, options).toPromise();
        });
    };
    AuctionService.prototype.postBuyNow = function (buyNow) {
        return __awaiter(this, void 0, Promise, function* () {
            var bodyString = JSON.stringify(buyNow);
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
            var url = this._auctionUrl + 'buynow';
            var response = yield this._http.post(url, bodyString, options).toPromise();
        });
    };
    AuctionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuctionService);
    return AuctionService;
}());
exports.AuctionService = AuctionService;
//# sourceMappingURL=auction.service.js.map