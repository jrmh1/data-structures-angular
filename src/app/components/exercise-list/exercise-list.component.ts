import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',

  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  listTitle: string = 'Exercise List';
  items: string[] = ['Push-ups', 'Squats', 'Lunges'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
