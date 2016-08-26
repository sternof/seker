import { Component } from '@angular/core';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list">

      <li *ngFor="let item of todoList" 
          [ngClass]="{completed: item.completed, editing: item.editing}">
        <div class="view">
        
          <input class="toggle"
                 type="checkbox" 
                 [checked]="item.completed" 
                 #completedCheckbox 
                 (change)="changeCompleted(item, completedCheckbox.checked)">
                 
          <label (click)="editItem(item)">{{ item.title }}</label>
          
          <button class="destroy" (click)="destroyItem(item)"></button>
          
        </div>
        
        <input class="edit"
               [value]="item.title" 
               #editItemInput 
               (keyup.enter)="changeTitle(item, editItemInput.value)" 
               (keyup.escape)="cancelEdit(item)">
      </li>

    </ul>
  `
})

export class TodoListComponent {

  todoList = [
    {title: 'RSVP Yes', completed: true, editing: false},
    {title: 'Set up environment', completed: true, editing: false},
    {title: 'Clone project', completed: false, editing: false},
    {title: 'Come to meetup', completed: false, editing: true},
  ];

  changeCompleted(item, checked) {
    item.completed = checked;
  }

  destroyItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  editItem(item) {
    this.todoList.forEach((listItem) => listItem.editing = false);
    item.editing = true;
  }

  changeTitle(item, newTitle) {
    item.title = newTitle;
    item.editing = false;
  }

  cancelEdit(item) {
    item.editing = false;
  }
}
