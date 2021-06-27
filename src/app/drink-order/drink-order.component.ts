import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink, Topping } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-order',
  templateUrl: './drink-order.component.html',
  styleUrls: ['./drink-order.component.scss'],
})
export class DrinkOrderComponent implements OnInit {
  drink!: Drink;
  tips = 0;
  toppings: Topping[] = [];
  totalPrice = 0;

  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDrink();
    this.getToppings();
  }

  getDrink() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.drinkService.getDrink(id).subscribe((drink) => (this.drink = drink));
  }

  getToppings() {
    this.drinkService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    });
  }

  updateTotalPrice(toppingsQuantity: number[]) {
    let topingPrice = 0;
    for (let i = 0; i < toppingsQuantity.length; i++) {
      topingPrice += toppingsQuantity[i] * this.toppings[i].price;
    }
    this.totalPrice = topingPrice + this.tips + this.drink.price;
  }
}
