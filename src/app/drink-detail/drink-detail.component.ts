import { Component, Input, OnInit } from '@angular/core';
import { Drink } from '../drink';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss'],
})
export class DrinkDetailComponent implements OnInit {
  @Input() drink?: Drink;
  constructor() {}

  ngOnInit(): void {}
}
