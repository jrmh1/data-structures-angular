import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontact-list',

  templateUrl: './phonecontact-list.component.html',
  styleUrl: './phonecontact-list.component.css'
})
export class PhonecontactListComponent {
  listTitle: string = 'Phone Contact List';
  items: string[] = ['A', 'B', 'C'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
