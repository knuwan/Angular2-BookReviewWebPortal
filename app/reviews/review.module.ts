import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ReviewListComponent } from './review-list.component';
import { ReviewDetailComponent } from './review-detail.component';
import { ReviewDetailGuard } from './review-guard.service';

import { ReviewFilterPipe } from './review-filter.pipe';
import { ReviewService } from './review.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'reviews', component: ReviewListComponent },
      { path: 'review/:id',
        canActivate: [ ReviewDetailGuard],
        component: ReviewDetailComponent
      }
    ])
  ],
  declarations: [
    ReviewListComponent,
    ReviewDetailComponent,
    ReviewFilterPipe
  ],
  providers: [
    ReviewService,
    ReviewDetailGuard
  ]
})
export class ReviewModule {}
