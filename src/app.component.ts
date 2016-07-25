import {Component} from '@angular/core';
import {TodolistComponent} from "./app/todolist.component";

@Component({
  selector: 'app',
  directives: [TodolistComponent],
  template:`    
    <todolist></todolist>       
  `,
})

export class AppComponent {}

