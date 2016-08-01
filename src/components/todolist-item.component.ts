import {Component} from "@angular/core";
import {Item} from "../models/item";

@Component({
  selector: 'todolist-item',
  inputs: ['item'],
  template: `
    <li [ngClass]="getClass(item)">
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">

          <label>{{ item.text }}</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>
  `,
})

export class TodolistItemComponent {

  getClass(item: Item){
    return {
      completed: item.done,
      editing: item.editMode
    }
  }
}
