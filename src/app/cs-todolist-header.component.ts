import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'cs-todolist-header',
  inputs:['title'],
  template: `
    <h1>{{title}}</h1>
        
    <input class="new-todo"
           #itemBox           
           placeholder="What needs to be done?"
           (keydown.enter)="itemAdded.emit(itemBox.value)"
           autofocus>
    `
})
export class TodolistHeaderComponent {

  @Output()
  private itemAdded: EventEmitter<string>;

  constructor() {
    this.itemAdded = new EventEmitter<string>();
  }

}