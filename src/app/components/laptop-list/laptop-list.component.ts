import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',

  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  listTitle: string = 'Laptop List';
  items: string[] = ['Dell XPS 13', 'MacBook Pro', 'HP Spectre x360'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
