import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',

  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  listTitle: string = 'Podcast List';
  items: string[] = ['Episode 1: Getting Started', 'Episode 2: Advanced Techniques', 'Episode 3: Expert Insights'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
