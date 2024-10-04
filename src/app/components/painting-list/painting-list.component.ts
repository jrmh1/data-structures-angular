import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
 
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  listTitle: string = 'Painting List';
  items: string[] = ['Mona Lisa', 'Starry Night', 'The Scream'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
