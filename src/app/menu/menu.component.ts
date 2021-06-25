import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Drink } from '../drink';
import { MENU } from '../mock-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  drinks = MENU;
  selectedDrink?: Drink;
  @Output() drinkSelect = new EventEmitter<Drink>();

  onSelect(drink: Drink) {
    this.selectedDrink = drink;
    this.drinkSelect.next(drink);
  }

  constructor() {}

  ngOnInit(): void {}
}
