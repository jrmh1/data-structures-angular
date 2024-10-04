import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',

  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  listTitle: string = 'Flower List';
  items: string[] = ['Roses', 'Tulips', 'Lilies'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
