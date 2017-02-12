import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SupplierService } from './supplier.service';

import { Supplier } from './supplier';

@Component({
    templateUrl: 'app/supplier/supplier-detail.component.html'
})
export class SupplierDetailComponent implements OnInit {
    supplier: Supplier;

    errorMessage: string;

    constructor(
        private _route: ActivatedRoute, 
        private _router: Router, 
        private _supplierService: SupplierService,
        private _location: Location) {

    }

    async ngOnInit()  {        
        let id = +this._route.snapshot.params['id'];
        this.supplier = await this._supplierService.getSupplier(id);
    }

    onBack(): void {
        this._location.back();
    }
}