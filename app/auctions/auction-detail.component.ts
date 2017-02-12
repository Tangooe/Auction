import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuctionService } from './auction.service';
import { SupplierService } from '../supplier/supplier.service';
import { UserService} from '../user/user.service';
import { LoginService } from '../login/login.service';

import { Auction } from './models/auction';
import { Category } from './models/category';
import { Bid } from './models/bid';
import { BidPost } from './models/bid-post';
import { BuyNowPost } from './models/buy-now-post';
import { Supplier } from '../supplier/supplier';
import { User } from '../user/user';

@Component({
    templateUrl: 'app/auctions/auction-detail.component.html'
})
export class AuctionDetailComponent implements OnInit {
    auction: Auction;
    bid: BidPost = new BidPost();
    buyNowPost: BuyNowPost = new BuyNowPost();
    bids: Bid[];
    category: Category;
    supplier: Supplier;
    suppliers: Supplier[];
    customers: User[];
    currentUser: User;
    message: string;

    constructor(
        private _route: ActivatedRoute, 
        private _router: Router, 
        private _auctionService: AuctionService, 
        private _supplierService: SupplierService,
        private _userService: UserService,
        private _loginSerivce: LoginService,
        private _location: Location) {
    }

    async ngOnInit() {
        let id = +this._route.snapshot.params['id'];

        this.currentUser = await this._loginSerivce.user;
        this.customers = await this._userService.getUsers();
        this.auction = await this._auctionService.getAuction(id);
        this.category = await this._auctionService.getCategory(this.auction.categoryId);
        this.supplier = await this._supplierService.getSupplier(this.auction.supplierId);
        this.bids = await this._auctionService.getBids(id);
        this.bids = this.bids.reverse();
    }

    async onBid() {
        if(!this._loginSerivce.isLoggedIn()) {
            this._router.navigate(['login']);
        }
        else {
            this.bid.auctionId = this.auction.id;
            this.bid.customerId = this.currentUser.id;
            this._auctionService.postBid(this.bid)
            this.message='Ditt bud på ' + this.bid.bidPrice + ' har registrerats'
            console.log('You pressed make bid while being logged in')
        }
    }

    onBuyNow(): void {
        if(!this._loginSerivce.isLoggedIn()) {
            this._router.navigate(['login']);
        }
        else {
            this.buyNowPost.auctionId = this.auction.id;
            this.buyNowPost.customerId = this.currentUser.id;
            this._auctionService.postBuyNow(this.buyNowPost)
        }
    }

    onBack(): void {
        this._router.navigate(['/auctions']);
    }
}