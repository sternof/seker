import {Component} from "@angular/core";
import {TodolistHeaderComponent} from "./todolist-header.component";
import {TodolistMainComponent} from "./todolist-main.component";
import {TodolistFooterComponent} from "./todolist-footer.component";
import {TodolistListComponent} from "./todolist-list.component";
import {TodolistToggleComponent} from "./todolist-toggle.component";
import {CounterComponent} from "./counter.component";
import {ItemList} from "../models/item-list";
import {Logger} from "../models/logger";

@Component({
  selector: 'todolist',
  providers: [ItemList],
  directives:[
      TodolistHeaderComponent,
      TodolistMainComponent,
      TodolistFooterComponent,
      TodolistListComponent,
      TodolistToggleComponent,
      CounterComponent,
  ],
  template: `
    <section class="todoapp">
    
      <todolist-header [title]="title"></todolist-header>
      
      <todolist-main>
        <todolist-toggle></todolist-toggle>
        <todolist-list [items]="model.items"></todolist-list>
      </todolist-main>
      
      <todolist-footer>
        <counter [value]="countLeft()" 
                 entity="items" ></counter>    
        <button class="clear-completed">Clear completed</button>
      </todolist-footer>
      
    </section>
   `,
})

export class TodolistComponent {

  private title: string;
  private model: ItemList;

  constructor(model: ItemList) {
    this.title = "TODOS";
    this.model = model;
  }

  countLeft(){
    return this.model.items.filter( item => !item.done ).length;
  }

}
