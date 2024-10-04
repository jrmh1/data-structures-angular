import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',

  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  listTitle: string = 'Destination List';
  items: string[] = ['Paris', 'New York', 'Tokyo'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
  
}
