import { PipeTransform, Pipe } from '@angular/core';

import { Auction } from './models/auction';
import { Category } from './models/category'

@Pipe({
    name: 'auctionCategory'
})
export class AuctionCategoryPipe implements PipeTransform {
    transform(value: Category[], categoryId: number): Category[] {
        categoryId = categoryId ? categoryId: null;
        return categoryId ? value.filter((category: Category) => category.id === categoryId) : value;
    }
}