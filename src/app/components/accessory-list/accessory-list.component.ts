import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  listTitle: string = 'Accessory List';
  items: string[] = ['Phone Case', 'Charger', 'Headphones'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
