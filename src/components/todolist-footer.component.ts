import {Component} from "@angular/core";
import {CounterComponent} from "./counter.component";

@Component({
  selector: 'todolist-footer',
  directives:[CounterComponent],
  template: `
  <footer class="footer">
    <counter></counter>    
    <button class="clear-completed">Clear completed</button>
  </footer>
`,
})

export class TodolistFooterComponent {}
