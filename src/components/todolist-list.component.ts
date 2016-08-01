import {Component} from "@angular/core";
import {TodolistItemComponent} from "./todolist-item.component";

@Component({
  selector: 'todolist-list',
  directives:[TodolistItemComponent],
  inputs:['items'],
  template: `
    <ul class="todo-list">
      <todolist-item *ngFor="let item of items" 
                     [item]="item">                     
      </todolist-item>
    </ul>
  `,
})

export class TodolistListComponent {}
