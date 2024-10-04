import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',

  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  listTitle: string = 'Sports List';
  items: string[] = ['Volleyball', 'Basketball', 'Badminton'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
