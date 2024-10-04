import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',

  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  listTitle: string = 'Event List';
  items: string[] = ['Concert - March 1, 2024', 'Workshop - March 15, 2024', 'Seminar - March 30, 2024'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
