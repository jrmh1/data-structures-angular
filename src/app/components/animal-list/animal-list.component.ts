import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',

  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  listTitle: string = 'Animal List';
  items: string[] = ['Lion', 'Tiger', 'Elephant'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
