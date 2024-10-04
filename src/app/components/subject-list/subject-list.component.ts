import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',

  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  listTitle: string = 'Subject List';
  items: string[] = ['Mathematics', 'Physics', 'Chemistry'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
