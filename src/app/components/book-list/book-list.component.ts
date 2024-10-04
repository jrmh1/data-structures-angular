import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',

  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  listTitle: string = 'Book List';
  items: string[] = ['Book 1', 'Book 2', 'Book 3'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
