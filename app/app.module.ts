import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';

import { AuctionListComponent } from './auctions/auction-list.component';
import { AuctionDetailComponent } from './auctions/auction-detail.component';
import { AuctionService } from './auctions/auction.service';
import { AuctionDetailGuard } from './auctions/auction-guard.service';

import { SupplierDetailComponent } from './supplier/supplier-detail.component';
import { SupplierService } from './supplier/supplier.service';

import { AuctionFilterPipe } from './auctions/auction-filter.pipe';
import { AuctionCategoryPipe } from './auctions/auction-category.pipe';
import { AuctionBidCustomerPipe } from './auctions/auction-bid-customer.pipe';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { UserService} from './user/user.service';
import { UserRegisterComponent} from './user/user-register.component'; 
import { UserFormComponent } from './user/user-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    AuctionListComponent,
    AuctionDetailComponent,
    AuctionFilterPipe,
    AuctionCategoryPipe,
    AuctionBidCustomerPipe,
    LoginComponent,
    SupplierDetailComponent,
    UserRegisterComponent,
    UserFormComponent
  ],
  providers: [
    AuctionService,
    AuctionDetailGuard,
    LoginService,
    UserService,
    SupplierService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }