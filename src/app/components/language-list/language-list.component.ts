import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',

  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  listTitle: string = 'Language List';
  items: string[] = ['English', 'Spanish', 'French'];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
}
