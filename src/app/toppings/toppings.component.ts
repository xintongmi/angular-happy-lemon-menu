import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Topping } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss'],
})
export class ToppingsComponent implements OnInit {
  toppings?: Topping[];
  toppingsQuantity: number[] = [];
  @Output() toppingsAdd = new EventEmitter<number[]>();

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.getToppings();
  }

  getToppings() {
    this.drinkService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
      this.toppingsQuantity = [];
      for (let i = 0; i < toppings.length; i++) {
        this.toppingsQuantity.push(0);
      }
    });
  }

  addToppings(toppingsQuantity: number[]) {
    // To ensure the excution of addToppings later than ngModel update the value of toppingsQuantity[i]
    setTimeout(() => {
      this.toppingsAdd.next(toppingsQuantity);
    });
  }
}
