import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',

  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  listTitle: string = 'Vegetable List';
  items: string[] = ['Carrot', 'Broccoli', 'Spinach'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
