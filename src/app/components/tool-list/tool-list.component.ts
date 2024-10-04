import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  listTitle: string = 'Tool List';
  items: string[] = ['Hammer', 'Screwdriver', 'Wrench'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
