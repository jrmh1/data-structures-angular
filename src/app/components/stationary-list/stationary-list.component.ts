import { Component } from '@angular/core';

@Component({
  selector: 'app-stationary-list',

  templateUrl: './stationary-list.component.html',
  styleUrl: './stationary-list.component.css'
})
export class StationaryListComponent {
  listTitle: string = 'Stationery List';
  items: string[] = ['Pens', 'Notebooks', 'Sticky Notes'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
