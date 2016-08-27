import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],
  inputs: ['item'],
  outputs: ['destroy', 'editing'],

  template: `
    <li [ngClass]="{completed: item.completed, editing: item.editing}">
      <div class="view">
      
        <input class="toggle"
               type="checkbox" 
               [checked]="item.completed" 
               #completedCheckbox 
               (change)="changeCompleted(completedCheckbox.checked)">
               
        <label (click)="editItem()">{{ item.title }}</label>
        
        <button class="destroy" (click)="destroyItem()"></button>
        
      </div>
      
      <input class="edit"
             [value]="item.title" 
             #editItemInput 
             (keyup.enter)="changeTitle(editItemInput.value)" 
             (keyup.escape)="cancelEdit()">
    </li>
  `
})

export class TodoItemComponent {
  item;
  destroy = new EventEmitter();
  editing = new EventEmitter();

  changeCompleted(checked) {
    this.item.completed = checked;
  }
  
  destroyItem() {
    this.destroy.emit(this.item);
  }

  editItem() {
    this.editing.emit(this.item);
    this.item.editing = true;
  }

  changeTitle(newTitle) {
    this.item.title = newTitle;
    this.item.editing = false;
  }

  cancelEdit() {
    this.item.editing = false;
  }
}
