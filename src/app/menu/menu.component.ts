import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';
import { MENU } from '../mock-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  drinks = MENU;

  constructor() {}

  ngOnInit(): void {}
}
