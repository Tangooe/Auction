import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Supplier } from './supplier';

@Injectable()
export class SupplierService {
    private _supplierUrl = 'http://nackademiskasecure.azurewebsites.net/api/supplier/';

    constructor(private _http: Http) { }

    async getSuppliers(): Promise<Supplier[]> {
        const response = await this._http.get(this._supplierUrl).toPromise();
        return response.json();
    }
    async getSupplier(id: number): Promise<Supplier> {
        const url = `${this._supplierUrl}${id}`;
        const response = await this._http.get(url).toPromise();
        return response.json();
    }
}