import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
 
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  listTitle: string = 'Furniture List';
  items: string[] = ['Sofa', 'Table', 'Chair'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
