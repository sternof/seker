import {Component} from "@angular/core";

@Component({
  selector: 'cs-todolist-header',
  template: `
    <h1>todos</h1>
        
    <input class="new-todo"
       placeholder="What needs to be done?"
       autofocus>
    `
})
export class TodolistHeaderComponent {


}