import { Component } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';

@Component({
  selector: 'aah-todo-input',
  styleUrls: ['./todo-input.component.css'],

  template: `
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus
           #newTodoInput
           (keyup.enter)="addItem(newTodoInput)">
  `
})

export class TodoInputComponent {

  constructor(private todoListService: TodoListService) {}

  addItem(inputElement) {
    this.todoListService.addItem(inputElement.value);
    inputElement.value = '';
  }
  
}
