import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Auction } from './models/auction';
import { Category } from './models/category';
import { Bid } from'./models/bid';
import { BidPost } from './models/bid-post';
import { BuyNowPost } from './models/buy-now-post';

@Injectable()
export class AuctionService {
    private _auctionUrl = 'http://nackademiskasecure.azurewebsites.net/api/auction/';
    private _categoryUrl = 'http://nackademiskasecure.azurewebsites.net/api/category/';
    private _bidUrl = 'http://nackademiskasecure.azurewebsites.net/api/bid/';

    constructor(private _http: Http) { }

    async getAuctions(): Promise<Auction[]> {
        const response = await this._http.get(this._auctionUrl).toPromise();
        return response.json();
    }
    async getAuction(id: number): Promise<Auction> {
        const url = `${this._auctionUrl}${id}`;
        const response = await this._http.get(url).toPromise();
        return response.json();
    }
    async getCategories(): Promise<Category[]> {
        const response = await this._http.get(this._categoryUrl).toPromise();
        return response.json();
    }
    async getCategory(id: number): Promise<Category> {
        let categories = await this.getCategories();
        return categories.find(c => c.id === id);
    }
    async getBids(id: number): Promise<Bid[]> {
        const url = `${this._bidUrl}${id}`;
        const response = await this._http.get(url).toPromise();
        return response.json();
    }
    async postBid(bid: BidPost): Promise<any> {
        let bodyString = JSON.stringify(bid);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true}); 
        
        const response = await this._http.post(this._bidUrl, bodyString, options).toPromise();
    }
    async postBuyNow(buyNow: BuyNowPost): Promise<any> {
        let bodyString = JSON.stringify(buyNow);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true }); 
        
        const url = this._auctionUrl + 'buynow';
        const response = await this._http.post(url, bodyString, options).toPromise();
    }
}