import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drink } from './drink';
import { MessageService } from './message.service';
import { MENU } from './mock-menu';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor(private messageService: MessageService) {}

  getDrinks(): Observable<Drink[]> {
    this.messageService.add('MessageService: fetched drinks');
    return of(MENU);
  }

  getDrink(id: string): Observable<Drink> {
    const drink = MENU.find((d) => d.id === id)!;
    return of(drink);
  }
}
