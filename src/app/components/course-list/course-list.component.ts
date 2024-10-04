import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',

  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  listTitle: string = 'Course List';
  items: string[] = ["IT", "Tourism", "HRM"];
 

  newItem: string = '';

  addCourse() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = ''; 
    }
  }
}
