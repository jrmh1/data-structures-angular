import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',

  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

  listTitle: string = 'Country List';
  items: string[] = ['Philippines', 'Canada', 'Australia'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
