import { Component, OnInit }  from '@angular/core';

import { IReview } from './review';
import { ReviewService } from './review.service';

@Component({
    moduleId: module.id,
    templateUrl: 'review-list.component.html',
    styleUrls: ['review-list.component.css']
})
export class ReviewListComponent implements OnInit {
    pageTitle: string = 'List of Book Reviews';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    errorMessage: string;

    reviews: IReview[];

    constructor(private _reviewService: ReviewService) {

    }

    ngOnInit(): void {
        this._reviewService.getReviews()
                .subscribe(reviews => this.reviews = reviews,
                           error => this.errorMessage = <any>error);
    }
}
