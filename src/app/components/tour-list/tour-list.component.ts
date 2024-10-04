import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',

  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  listTitle: string = 'Tour List';
  items: string[] = ['April 15, 2024 - New York', 'May 20, 2024 - Los Angeles', 'June 10, 2024 - Chicago'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
