import { Component, OnInit } from '@angular/core';
import { Topping } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss'],
})
export class ToppingsComponent implements OnInit {
  toppings?: Topping[];
  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.getToppings();
  }
  getToppings() {
    this.drinkService
      .getToppings()
      .subscribe((toppings) => (this.toppings = toppings));
  }
}
