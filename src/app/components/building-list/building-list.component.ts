import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',

  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  listTitle: string = 'Building List';
  items: string[] = ['Library', 'Science Block', 'Main Hall'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
