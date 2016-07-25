import {Component, ViewEncapsulation} from "@angular/core";
import {GRID_COMPONENTS} from "../grid/index";
import {SHARED_COMPONENTS} from "../shared/index";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector  : 'todolist',
  directives: [...GRID_COMPONENTS, ...SHARED_COMPONENTS],
  styleUrls: ['todolist.css'],
  template  : `
    <cs-layout>
    
       <cs-header>
       
        <h1>todos</h1>
    
        <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>           
       </cs-header>
       
       <cs-main>       
        <cs-toggle></cs-toggle>
        <cs-list></cs-list>
       </cs-main>
      
      <cs-footer>
        <cs-counter></cs-counter>
        <cs-button></cs-button>
      </cs-footer>
      
    </cs-layout>
   `
})

export class TodolistComponent {}