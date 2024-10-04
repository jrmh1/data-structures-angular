import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',

  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  listTitle: string = 'Budget List';
  items: string[] = ['Rent', 'Groceries', 'Utilities'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
