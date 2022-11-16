import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
