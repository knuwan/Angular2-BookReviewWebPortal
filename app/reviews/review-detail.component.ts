import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IReview } from './review';
import { ReviewService } from './review.service';

@Component({
    moduleId: module.id,
    templateUrl: 'review-detail.component.html'
})
export class ReviewDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Review Detail';
    review: IReview;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _reviewService: ReviewService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getReview(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getReview(id: number) {
        this._reviewService.getReview(id).subscribe(
            review => this.review = review,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/reviews']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Review Detail: ' + message;
    }
}
