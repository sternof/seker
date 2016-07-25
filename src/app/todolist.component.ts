import {Component, ViewEncapsulation} from "@angular/core";
import {GRID_COMPONENTS} from "../grid/index";
import {SHARED_COMPONENTS} from "../shared/index";
import {TodolistHeaderComponent} from "./cs-todolist-header.component";
import {Item} from "../models/item";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector  : 'todolist',
  directives: [...GRID_COMPONENTS, ...SHARED_COMPONENTS, TodolistHeaderComponent],
  styleUrls: ['todolist.css'],
  template  : `
    <cs-layout>
    
       <cs-header>
        <cs-todolist-header [title]="appTitle"
                            (itemAdded)="addItem($event)" >                            
        </cs-todolist-header>                           
       </cs-header>
       
       <cs-main>       
        <cs-toggle></cs-toggle>
        <cs-list [items]="items"></cs-list>
       </cs-main>
      
      <cs-footer>
        <cs-counter></cs-counter>
        <cs-button></cs-button>
      </cs-footer>
      
    </cs-layout>
   `
})

export class TodolistComponent {

  private appTitle: string;
  private items: Item[];

  constructor() {
    this.items    = [];
    this.appTitle = "ToDo";

    this.items.push(new Item('Learn Angular'));
  }

  addItem(item: string){
    console.log(item);
  }

}