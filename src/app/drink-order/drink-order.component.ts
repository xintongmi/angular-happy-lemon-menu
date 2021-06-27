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
  toppingsQuantity: number[] = [];
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
    this.drinkService.getDrink(id).subscribe((drink) => {
      this.drink = drink;
      this.totalPrice = drink.price;
    });
  }

  getToppings() {
    this.drinkService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    });
  }

  updateTotalPrice() {
    let toppingPrice = 0;
    for (let i = 0; i < this.toppingsQuantity.length; i++) {
      toppingPrice += this.toppingsQuantity[i] * this.toppings[i].price;
    }
    this.totalPrice = toppingPrice + this.tips + this.drink.price;
  }
}
