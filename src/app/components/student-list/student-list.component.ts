import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
 
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  listTitle: string = 'Student List';
  items: string[] = ['Ashleigh', 'Bogart', 'Kim'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
