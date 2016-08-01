import {Component} from "@angular/core";

@Component({
  selector: 'todolist-item',
  template: `
    <li>
        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Title</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>
  `,
})

export class TodolistItemComponent {}
