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

}

class Item {
  public text:string;
  public done:boolean;
  public editMode:boolean;

  constructor(text: string) {
    this.text     = text;
    this.done     = false;
    this.editMode = false;
  }

}
