import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
 
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  listTitle: string = 'Employee List';
  items: string[] = ['Ashleigh', 'Bogart', 'Kim'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
