import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',

  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  listTitle: string = 'Lecture List';
  items: string[] = ['Math 101', 'History 201', 'Physics 301'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
