import {Component} from "@angular/core";
import {ItemList} from "../models/item-list";

@Component({
  selector: 'todolist-header',
  inputs: ['title'],
  template: `
    <header class="header">    
      <h1>{{ title }}</h1>
      
      <input class="new-todo"
             #item
             (keydown.enter)="model.addItem(item.value)"  
             placeholder="What needs to be done?"
             autofocus>
    </header>
  `,
})

export class TodolistHeaderComponent {
  private model: ItemList;

  constructor(model: ItemList) {
    this.model = model;
  }

}
