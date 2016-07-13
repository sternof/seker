import {Component, ViewEncapsulation} from '@angular/core';
import {TodolistHeaderComponent} from "./todolist-header.component";
import {ItemListComponent} from "./item-list.component";
import {TodolistFooterComponent} from "./todolist-footer.component";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'todolist',
  styleUrls: ['./todolist.css'],
  directives:[
      TodolistHeaderComponent,
      ItemListComponent,
      TodolistFooterComponent
  ],
  template: `
    <section class="todoapp">
      
      <todolist-header></todolist-header>
            
      <section class="main">

      <input class="toggle-all"
           type="checkbox">
    
      </section>
      
      <item-list></item-list>
      
      <todolist-footer></todolist-footer>
      
</section>

    `,
})

export class TodolistComponent {}
