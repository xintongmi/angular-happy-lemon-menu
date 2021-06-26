import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  reviews: string[] = [];

  constructor() {}

  addStoreReview(myReview: string) {
    this.reviews.push(myReview);
  }
}
