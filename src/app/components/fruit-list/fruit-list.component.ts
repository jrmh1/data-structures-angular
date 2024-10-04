import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',

  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  listTitle: string = 'Fruit List';
  items: string[] = ['Apple', 'Banana', 'Orange'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
