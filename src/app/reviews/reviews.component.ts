import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class reviewsComponent implements OnInit {
  pendingReview = '';

  constructor(public reviewService: ReviewService) {}

  ngOnInit(): void {}

  addStoreReview() {
    // this.reviews = this.reviewService.reviews;
    if (this.pendingReview) {
      this.reviewService.addStoreReview(this.pendingReview);
    }
  }
}
