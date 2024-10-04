import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapp-list',

  templateUrl: './mobileapp-list.component.html',
  styleUrl: './mobileapp-list.component.css'
})
export class MobileappListComponent {
  listTitle: string = 'Mobile App List';
  items: string[] = ['WhatsApp', 'Instagram', 'Spotify'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
