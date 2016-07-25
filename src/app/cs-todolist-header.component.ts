import {Component} from "@angular/core";

@Component({
  selector: 'cs-todolist-header',
  inputs:['title'],
  template: `
    <h1>{{title}}</h1>
        
    <input class="new-todo"
       placeholder="What needs to be done?"
       autofocus>
    `
})
export class TodolistHeaderComponent {


}