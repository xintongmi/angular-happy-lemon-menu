import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService) {}

  getDrinks(): void {
    this.drinkService
      .getDrinks()
      .subscribe((drinks) => (this.drinks = drinks.slice(0, 5)));
  }
  ngOnInit(): void {
    this.getDrinks();
  }
}
