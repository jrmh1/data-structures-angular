import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  listTitle: string = 'Artist List';
  items: string[] = ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
