import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IReview } from './review';

@Injectable()
export class ReviewService {
    private _reviewUrl = 'app/api/reviews/reviews.json';

    constructor(private _http: Http) { }

    getReviews(): Observable<IReview[]> {
        return this._http.get(this._reviewUrl)
            .map((response: Response) => <IReview[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getReview(id: number): Observable<IReview> {
        return this.getReviews()
            .map((reviews: IReview[]) => reviews.find(p => p.reviewId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
