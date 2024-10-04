import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',

  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  listTitle: string = 'Framework List';
  items: string[] = ['Angular', 'React', 'Vue.js'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
