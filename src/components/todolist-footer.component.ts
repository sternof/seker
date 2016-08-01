import {Component} from "@angular/core";
import {CounterComponent} from "./counter.component";

@Component({
  selector: 'todolist-footer',
  directives:[CounterComponent],
  template: `<counter></counter>`,
})

export class TodolistFooterComponent {}
