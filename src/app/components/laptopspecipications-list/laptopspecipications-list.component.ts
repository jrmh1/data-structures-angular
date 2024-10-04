import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecipications-list',
  
  templateUrl: './laptopspecipications-list.component.html',
  styleUrl: './laptopspecipications-list.component.css'
})
export class LaptopspecipicationsListComponent {
  listTitle: string = 'Laptop Specifications List';
  items: string[] = ['16GB RAM', '512GB SSD', 'Intel i7'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
