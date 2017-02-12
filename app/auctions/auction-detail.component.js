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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var auction_service_1 = require('./auction.service');
var supplier_service_1 = require('../supplier/supplier.service');
var user_service_1 = require('../user/user.service');
var login_service_1 = require('../login/login.service');
var bid_post_1 = require('./models/bid-post');
var buy_now_post_1 = require('./models/buy-now-post');
var AuctionDetailComponent = (function () {
    function AuctionDetailComponent(_route, _router, _auctionService, _supplierService, _userService, _loginSerivce, _location) {
        this._route = _route;
        this._router = _router;
        this._auctionService = _auctionService;
        this._supplierService = _supplierService;
        this._userService = _userService;
        this._loginSerivce = _loginSerivce;
        this._location = _location;
        this.bid = new bid_post_1.BidPost();
        this.buyNowPost = new buy_now_post_1.BuyNowPost();
    }
    AuctionDetailComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function* () {
            var id = +this._route.snapshot.params['id'];
            this.currentUser = yield this._loginSerivce.user;
            this.customers = yield this._userService.getUsers();
            this.auction = yield this._auctionService.getAuction(id);
            this.category = yield this._auctionService.getCategory(this.auction.categoryId);
            this.supplier = yield this._supplierService.getSupplier(this.auction.supplierId);
            this.bids = yield this._auctionService.getBids(id);
            this.bids = this.bids.reverse();
        });
    };
    AuctionDetailComponent.prototype.onBid = function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._loginSerivce.isLoggedIn()) {
                this._router.navigate(['login']);
            }
            else {
                this.bid.auctionId = this.auction.id;
                this.bid.customerId = this.currentUser.id;
                this._auctionService.postBid(this.bid);
                this.message = 'Ditt bud på ' + this.bid.bidPrice + ' har registrerats';
                console.log('You pressed make bid while being logged in');
            }
        });
    };
    AuctionDetailComponent.prototype.onBuyNow = function () {
        if (!this._loginSerivce.isLoggedIn()) {
            this._router.navigate(['login']);
        }
        else {
            this.buyNowPost.auctionId = this.auction.id;
            this.buyNowPost.customerId = this.currentUser.id;
            this._auctionService.postBuyNow(this.buyNowPost);
        }
    };
    AuctionDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/auctions']);
    };
    AuctionDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/auctions/auction-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, auction_service_1.AuctionService, supplier_service_1.SupplierService, user_service_1.UserService, login_service_1.LoginService, common_1.Location])
    ], AuctionDetailComponent);
    return AuctionDetailComponent;
}());
exports.AuctionDetailComponent = AuctionDetailComponent;
//# sourceMappingURL=auction-detail.component.js.map