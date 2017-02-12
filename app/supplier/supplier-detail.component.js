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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var supplier_service_1 = require('./supplier.service');
var SupplierDetailComponent = (function () {
    function SupplierDetailComponent(_route, _router, _supplierService, _location) {
        this._route = _route;
        this._router = _router;
        this._supplierService = _supplierService;
        this._location = _location;
    }
    SupplierDetailComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function* () {
            var id = +this._route.snapshot.params['id'];
            this.supplier = yield this._supplierService.getSupplier(id);
        });
    };
    SupplierDetailComponent.prototype.onBack = function () {
        this._location.back();
    };
    SupplierDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/supplier/supplier-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, supplier_service_1.SupplierService, common_1.Location])
    ], SupplierDetailComponent);
    return SupplierDetailComponent;
}());
exports.SupplierDetailComponent = SupplierDetailComponent;
//# sourceMappingURL=supplier-detail.component.js.map