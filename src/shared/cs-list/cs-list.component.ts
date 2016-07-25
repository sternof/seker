import { Component } from '@angular/core';
import {ItemComponent} from "./cs-list-item.component";
import {Todolist} from "../../models/list";

@Component({
    selector: 'cs-list',
    directives: [ItemComponent],
    providers:[Todolist],
    inputs:['items'],
    template: `
        <ul class="todo-list">
          <cs-item *ngFor="let item of items"
                   (destroyItem)="model.removeItem(item)"          
                   [item]="item"></cs-item>      
        </ul>
     `
})

export class ListComponent {
    private model:Todolist;

    constructor(model: Todolist) {
        this.model = model;
    }

}