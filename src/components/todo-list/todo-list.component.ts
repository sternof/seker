import { Component } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';

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
  todoList;

  constructor(private todoListService: TodoListService) {
    this.todoList = todoListService.getTodoList();
  }

  destroyItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  editItem() {
    this.todoList.forEach((listItem) => listItem.editing = false);
  }
}
