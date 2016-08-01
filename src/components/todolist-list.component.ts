import {Component} from "@angular/core";
import {TodolistItemComponent} from "./todolist-item.component";

@Component({
  selector: 'todolist-list',
  directives:[TodolistItemComponent],
  template: `<todolist-item></todolist-item>`,
})

export class TodolistListComponent {}
