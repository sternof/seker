import {Component} from "@angular/core";
import {TodolistHeaderComponent} from "./todolist-header.component";
import {TodolistMainComponent} from "./todolist-main.component";
import {TodolistFooterComponent} from "./todolist-footer.component";

@Component({
  selector: 'todolist',
  directives:[
      TodolistHeaderComponent,
      TodolistMainComponent,
      TodolistFooterComponent
  ],
  template: `
    <section class="todoapp">
      <todolist-header></todolist-header>
      <todolist-main></todolist-main>
      <todolist-footer></todolist-footer>
    </section>
   `,
})

export class TodolistComponent {}
