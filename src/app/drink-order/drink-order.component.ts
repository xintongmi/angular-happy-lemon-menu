import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-order',
  templateUrl: './drink-order.component.html',
  styleUrls: ['./drink-order.component.scss'],
})
export class DrinkOrderComponent implements OnInit {
  drink?: Drink;
  tips?: number;

  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDrink();
  }

  getDrink() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.drinkService.getDrink(id).subscribe((drink) => (this.drink = drink));
  }
}
