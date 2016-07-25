import {Component} from "@angular/core";

@Component({
  selector: 'cs-counter',
  inputs:['amount'],
  template: `
      <span class="todo-count">
        <strong>{{amount}}</strong>
        item left
      </span>
     `
})
export class CounterComponent {}