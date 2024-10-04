import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',

  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  listTitle: string = 'Game List';
  items: string[] = ['Chess', 'Poker', 'Monopoly'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
