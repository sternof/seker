import {Component} from "@angular/core";
import {TodolistComponent} from "./todolist.component";

@Component({
  selector: 'app',
  directives:[TodolistComponent],
  template: `<todolist></todolist>`,
})

export class AppComponent {}
