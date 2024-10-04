import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',

  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  listTitle: string = 'Software List';
  items: string[] = ['Visual Studio Code', 'Adobe Photoshop', 'Slack'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
