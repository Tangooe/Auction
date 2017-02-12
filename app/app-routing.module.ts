import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { UserRegisterComponent } from './user/user-register.component';
import { UserFormComponent } from './user/user-form.component';

import { AuctionListComponent } from './auctions/auction-list.component';
import { AuctionDetailComponent } from './auctions/auction-detail.component';
import { AuctionDetailGuard } from './auctions/auction-guard.service';

import { SupplierDetailComponent } from './supplier/supplier-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'auctions', component: AuctionListComponent },
  { path: 'auction/:id', canActivate: [ AuctionDetailGuard ], component: AuctionDetailComponent },
  { path: 'supplier/:id', component: SupplierDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuctionDetailGuard ]
})
export class AppRoutingModule {}
