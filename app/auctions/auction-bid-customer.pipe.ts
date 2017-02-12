import { PipeTransform, Pipe } from '@angular/core';

import { Auction } from '../auctions/models/auction';
import { User } from '../user/user'

@Pipe({
    name: 'bidCustomer'
})
export class AuctionBidCustomerPipe implements PipeTransform {
    transform(value: User[], customerId: number): User[] {
        customerId = customerId ? customerId: null;
        return customerId ? value.filter((customer: User) => customer.id === customerId) : value;
    }
}