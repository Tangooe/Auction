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
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var user_register_component_1 = require('./user/user-register.component');
var user_form_component_1 = require('./user/user-form.component');
var auction_list_component_1 = require('./auctions/auction-list.component');
var auction_detail_component_1 = require('./auctions/auction-detail.component');
var auction_guard_service_1 = require('./auctions/auction-guard.service');
var supplier_detail_component_1 = require('./supplier/supplier-detail.component');
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: user_register_component_1.UserRegisterComponent },
    { path: 'form', component: user_form_component_1.UserFormComponent },
    { path: 'auctions', component: auction_list_component_1.AuctionListComponent },
    { path: 'auction/:id', canActivate: [auction_guard_service_1.AuctionDetailGuard], component: auction_detail_component_1.AuctionDetailComponent },
    { path: 'supplier/:id', component: supplier_detail_component_1.SupplierDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [auction_guard_service_1.AuctionDetailGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map