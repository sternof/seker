import { Component } from '@angular/core';
import {ItemComponent} from "./cs-list-item.component";

@Component({
    selector: 'cs-list',
    directives: [ItemComponent],
    inputs:['items'],
    template: `
        <ul class="todo-list">
          <cs-item *ngFor="let item of items" 
                   [item]="item"></cs-item>      
        </ul>
     `
})

export class ListComponent {}