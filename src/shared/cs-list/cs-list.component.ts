import { Component } from '@angular/core';
import {ItemComponent} from "./cs-list-item.component";

@Component({
    selector: 'cs-list',
    directives: [ItemComponent],
    template: `
        <ul class="todo-list">
          <cs-item></cs-item>      
        </ul>
     `
})
export class ListComponent {}