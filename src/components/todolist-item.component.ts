import {Component, EventEmitter, Output, Input} from "@angular/core";
import {Item} from "../models/item";

@Component({
  selector: 'todolist-item',
  template: `
    <li [ngClass]="getClass(item)">
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">

          <label>{{ item.text }}</label>

          <button (click)="destroyed.emit(item)" class="destroy"></button>

        </div>

        <input class="edit">

      </li>
  `,
})

export class TodolistItemComponent {

  @Input()  private item: Item;
  @Output() private destroyed: EventEmitter<Item>;

  constructor() {
    this.destroyed = new EventEmitter<Item>();
  }

  getClass(item: Item){
    return {
      completed: item.done,
      editing: item.editMode
    }
  }
}
