import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
 
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  listTitle: string = 'Music Playlist';
  items: string[] = ['Music 1', 'Music 2', 'Music 3'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
