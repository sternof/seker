import {Component} from "@angular/core";

@Component({
  selector: 'todolist-header',
  inputs: ['title'],
  template: `
    <header class="header">    
      <h1>{{ title }}</h1>
      
      <input class="new-todo"
             placeholder="What needs to be done?"
             autofocus>
    </header>
  `,
})

export class TodolistHeaderComponent {}
