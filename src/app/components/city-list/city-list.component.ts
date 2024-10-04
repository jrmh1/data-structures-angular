import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',

  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  listTitle: string = 'City List';
  items: string[] = ['New York', 'Los Angeles', 'Chicago'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
