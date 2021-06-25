import { Component } from '@angular/core';
import { Drink } from './drink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Happy Lemon';
  selectedDrink?: Drink;
  onDrinkSelect(drink: Drink) {
    this.selectedDrink = drink;
  }
}
