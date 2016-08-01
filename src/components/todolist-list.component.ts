import {Component} from "@angular/core";
import {TodolistItemComponent} from "./todolist-item.component";

@Component({
  selector: 'todolist-list',
  directives:[TodolistItemComponent],
  template: `
    <ul class="todo-list">
      <todolist-item></todolist-item>
    </ul>
  `,
})

export class TodolistListComponent {}
