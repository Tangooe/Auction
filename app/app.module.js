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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var auction_list_component_1 = require('./auctions/auction-list.component');
var auction_detail_component_1 = require('./auctions/auction-detail.component');
var auction_service_1 = require('./auctions/auction.service');
var auction_guard_service_1 = require('./auctions/auction-guard.service');
var supplier_detail_component_1 = require('./supplier/supplier-detail.component');
var supplier_service_1 = require('./supplier/supplier.service');
var auction_filter_pipe_1 = require('./auctions/auction-filter.pipe');
var auction_category_pipe_1 = require('./auctions/auction-category.pipe');
var auction_bid_customer_pipe_1 = require('./auctions/auction-bid-customer.pipe');
var login_component_1 = require('./login/login.component');
var login_service_1 = require('./login/login.service');
var user_service_1 = require('./user/user.service');
var user_register_component_1 = require('./user/user-register.component');
var user_form_component_1 = require('./user/user-form.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                auction_list_component_1.AuctionListComponent,
                auction_detail_component_1.AuctionDetailComponent,
                auction_filter_pipe_1.AuctionFilterPipe,
                auction_category_pipe_1.AuctionCategoryPipe,
                auction_bid_customer_pipe_1.AuctionBidCustomerPipe,
                login_component_1.LoginComponent,
                supplier_detail_component_1.SupplierDetailComponent,
                user_register_component_1.UserRegisterComponent,
                user_form_component_1.UserFormComponent
            ],
            providers: [
                auction_service_1.AuctionService,
                auction_guard_service_1.AuctionDetailGuard,
                login_service_1.LoginService,
                user_service_1.UserService,
                supplier_service_1.SupplierService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map