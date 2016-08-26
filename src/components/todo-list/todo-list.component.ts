import { Component } from '@angular/core';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list">

      <!-- Item -->
      <li>
        <div class="view">
          <input class="toggle"
                 type="checkbox">
          <label>Todo Title</label>
          <button class="destroy"></button>
        </div>
        <input class="edit">
      </li>

      <!-- Completed -->
      <li class="completed">
        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 checked>
          <label>Todo Title</label>
          <button class="destroy"></button>
        </div>
        <input class="edit">
      </li>

      <!-- Editing Item -->
      <li class="editing">
        <div class="view">
          <input class="toggle"
                 type="checkbox">
          <label>Todo Title</label>
          <button class="destroy"></button>
        </div>
        <input class="edit">
      </li>

      <!-- /Item-->
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

}