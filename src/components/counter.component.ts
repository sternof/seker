import {Component} from "@angular/core";

@Component({
  selector: 'counter',
  inputs:['value', 'entity'],
  template: `
    <span class="todo-count">
      <strong>{{ value }}</strong>
      {{ entity }} left
    </span>
 `,
})

export class CounterComponent {}
