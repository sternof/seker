import {Component} from "@angular/core";
import {TodolistItemComponent} from "./todolist-item.component";
import {ItemList} from "../models/item-list";

@Component({
  selector  : 'todolist-list',
  directives: [TodolistItemComponent],
  inputs    : ['items'],
  template  : `
    <ul class="todo-list">
      <todolist-item *ngFor="let item of items"
                     (destroyed)="model.removeItem($event)"
                     [item]="item">                     
      </todolist-item>
            
    </ul>
  `,
})

export class TodolistListComponent {

  constructor(private model:ItemList) {
  }

}
