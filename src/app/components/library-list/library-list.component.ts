import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',

  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  listTitle: string = 'Library List';
  items: string[] = ['Lodash', 'Axios', 'Moment.js'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
