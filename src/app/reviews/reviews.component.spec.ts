import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reviewsComponent } from './reviews.component';

describe('reviewsComponent', () => {
  let component: reviewsComponent;
  let fixture: ComponentFixture<reviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [reviewsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(reviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
