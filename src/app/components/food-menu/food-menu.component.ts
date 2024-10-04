import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',

  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  listTitle: string = 'Food Menu';
  items: string[] = ['Pizza', 'Burger', 'Pasta'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
