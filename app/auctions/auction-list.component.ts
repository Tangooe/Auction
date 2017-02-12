import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuctionService } from './auction.service';
import { LoginService } from '../login/login.service';

import { Auction } from './models/auction';
import { Category } from './models/category';
import { BuyNowPost } from './models/buy-now-post';
import { User } from '../user/user';

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

    buyNowPost: BuyNowPost = new BuyNowPost();
    auctions: Auction[];
    categories: Category[];
    currentUser: User;

    constructor(private _auctionService: AuctionService,
                private _loginSerivce: LoginService,
                private _router : Router) {

    }

    async ngOnInit() {
        this.currentUser = await this._loginSerivce.user;
        this.categories = await this._auctionService.getCategories();
        this.auctions = await this._auctionService.getAuctions();
    }

    onBuyNow(id: number): void {
        if(!this._loginSerivce.isLoggedIn()) {
            this._router.navigate(['login']);
        }
        else {
            this.buyNowPost.auctionId = id;
            this.buyNowPost.customerId = this.currentUser.id;
            this._auctionService.postBuyNow(this.buyNowPost)
        }
    }
}