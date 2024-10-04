import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
 
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  listTitle: string = 'Presentation List';
  items: string[] = ['The Impact of Technology', 'Climate Change Solutions', 'Future of AI'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
