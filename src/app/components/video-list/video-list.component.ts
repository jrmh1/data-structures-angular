import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',

  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  listTitle: string = 'Video List';
  items: string[] = ['Inception', 'Interstellar', 'The Matrix'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
