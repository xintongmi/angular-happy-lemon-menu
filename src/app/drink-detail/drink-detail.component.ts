import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss'],
})
export class DrinkDetailComponent implements OnInit {
  drink?: Drink;

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
