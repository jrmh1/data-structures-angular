import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  listTitle: string = 'Movie List';
  items: string[] = ['Inception', 'The Matrix', 'Interstellar'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
