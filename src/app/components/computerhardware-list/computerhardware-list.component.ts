import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardware-list',

  templateUrl: './computerhardware-list.component.html',
  styleUrl: './computerhardware-list.component.css'
})
export class ComputerhardwareListComponent {
  listTitle: string = 'Computer Hardware List';
  items: string[] = ['GPU', 'Motherboard', 'RAM'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
