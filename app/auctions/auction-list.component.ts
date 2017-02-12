import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuctionService } from './auction.service';
import { LoginService } from '../login/login.service';

import { Auction } from './models/auction';
import { Category } from './models/category';

@Component({
    moduleId: module.id,
    selector: 'pm-auctions',
    templateUrl: 'auction-list.component.html'
})
export class AuctionListComponent implements OnInit {
    pageTitle: string = 'Auktioner';
    listFilter: string;
    selectedValue: any = null;
    errorMessage: string;

    auctions: Auction[];
    categories: Category[];

    constructor(private _auctionService: AuctionService,
                private _loginSerivce: LoginService,
                private _router : Router) {

    }

    async ngOnInit() {
        this.categories = await this._auctionService.getCategories();
        this.auctions = await this._auctionService.getAuctions();
    }

    onBuyNow(): void {
        if(!this._loginSerivce.isLoggedIn()) {
            this._router.navigate(['login']);
        }
        else {
            console.log('You pressed buynow while being logged in')
        }
    }
}