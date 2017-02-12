import { PipeTransform, Pipe } from '@angular/core';

import { Auction } from './models/auction';

@Pipe({
    name: 'auctionFilter'
})
export class AuctionFilterPipe implements PipeTransform {

    transform(value: Auction[], filterBy: string, selectedValue: any): Auction[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
        selectedValue = selectedValue ? selectedValue: null;

        let filterByActive = value.filter((auction: Auction) => new Date().getTime() < new Date(auction.endTime).getTime()).filter((auction: Auction) => auction.sold === false);
        let filterByName = filterBy ? filterByActive.filter((auction: Auction) => auction.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : filterByActive;
        return selectedValue ? filterByName.filter((auction: Auction) => auction.categoryId === selectedValue) : filterByName;
    }
}