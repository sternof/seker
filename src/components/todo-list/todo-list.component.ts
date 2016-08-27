import { Component } from '@angular/core';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list">

      <aah-todo-item *ngFor="let item of todoList"
                     [item]="item"
                     (destroy)="destroyItem($event)"
                     (editing)="editItem()">
      </aah-todo-item>

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

  destroyItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  editItem() {
    this.todoList.forEach((listItem) => listItem.editing = false);
  }
}
