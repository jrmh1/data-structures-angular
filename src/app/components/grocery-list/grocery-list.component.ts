import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
 
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  listTitle: string = 'Grocery List';
  items: string[] = ['Milk', 'Eggs', 'Bread'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
