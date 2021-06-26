import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  selectedDrink?: Drink;

  constructor() {}

  onDrinkSelect(drink: Drink) {
    this.selectedDrink = drink;
  }

  ngOnInit(): void {}
}
