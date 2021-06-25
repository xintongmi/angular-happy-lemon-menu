import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Drink } from '../drink';
import { DrinkService } from '../drink.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  drinks: Drink[] = [];
  selectedDrink?: Drink;
  @Output() drinkSelect = new EventEmitter<Drink>();

  constructor(
    private drinkService: DrinkService,
    private messageService: MessageService
  ) {}

  onSelect(drink: Drink) {
    this.selectedDrink = drink;
    this.drinkSelect.next(drink);
    this.messageService.add(`Selected drink id=${drink.id}`);
  }

  getDrinks(): void {
    this.drinkService.getDrinks().subscribe((drinks) => (this.drinks = drinks));
    // this.drinks = this.drinkService.getDrinks();
  }

  ngOnInit(): void {
    this.getDrinks();
  }
}
