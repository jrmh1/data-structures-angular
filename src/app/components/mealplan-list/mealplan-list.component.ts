import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplan-list',

  templateUrl: './mealplan-list.component.html',
  styleUrl: './mealplan-list.component.css'
})
export class MealplanListComponent {
  listTitle: string = 'Meal Plan List';
  items: string[] = ['Breakfast: Oatmeal', 'Lunch: Grilled Chicken', 'Dinner: Pasta'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
