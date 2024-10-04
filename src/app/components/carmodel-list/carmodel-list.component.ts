import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodel-list',

  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {
  listTitle: string = 'Car Model List';
  items: string[] = ['Tesla Model S', 'BMW X5', 'Audi A6'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
