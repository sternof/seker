import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import {Store} from "../../app.store";

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],
  template: `
    <ul class="todo-list" >
     <aah-todo-item *ngFor="let item of store.state.list" 
     [item]="item">
     </aah-todo-item>
   </ul>
  `
})
export class TodoListComponent  {
private store: Store;

// needs ListService in order to init the list
constructor(  _store: Store ,  private listService : ListService) {
this.store = _store;
}
}

