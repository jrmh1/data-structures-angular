import { Component } from '@angular/core';

@Component({
  selector: 'app-developertool-list',
 
  templateUrl: './developertool-list.component.html',
  styleUrl: './developertool-list.component.css'
})
export class DevelopertoolListComponent {
  listTitle: string = 'Developer Tools List';
  items: string[] = ['Visual Studio Code', 'Git', 'Docker'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
