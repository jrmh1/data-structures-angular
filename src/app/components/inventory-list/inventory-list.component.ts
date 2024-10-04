import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
 
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  listTitle: string = 'Inventory List';
  items: string[] = ['Laptop', 'Mouse', 'Keyboard'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
