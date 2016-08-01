import {Component} from "@angular/core";
import {TodolistHeaderComponent} from "./todolist-header.component";
import {TodolistMainComponent} from "./todolist-main.component";
import {TodolistFooterComponent} from "./todolist-footer.component";
import {TodolistListComponent} from "./todolist-list.component";
import {TodolistToggleComponent} from "./todolist-toggle.component";
import {CounterComponent} from "./counter.component";
import {Item} from "../models/item";

@Component({
  selector: 'todolist',
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
        <todolist-list [items]="items"></todolist-list>
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
  private items: Item[];

  constructor() {
    this.title = 'TODOS';
    this.items = [];
  }

  addItem(text: string){
    this.items.push(new Item(text))
  }

  removeItem(item:Item){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  countLeft(){
    return this.items.filter( item => !item.done ).length;
  }

}
