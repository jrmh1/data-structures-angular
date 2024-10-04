import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',

  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  listTitle: string = 'Classroom List';
  items: string[] = ['Class 1', 'Class 2', 'Class 3'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
