import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshow-list',

  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TvshowListComponent {
  listTitle: string = 'TV Show List';
  items: string[] = ['Breaking Bad', 'Stranger Things', 'The Crown'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
