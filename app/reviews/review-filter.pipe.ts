import {  PipeTransform, Pipe } from '@angular/core';
import { IReview } from './review';

@Pipe({
    name: 'reviewFilter'
})
export class ReviewFilterPipe implements PipeTransform {

    transform(value: IReview[], filterBy: string): IReview[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((review: IReview) =>
            review.book.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
