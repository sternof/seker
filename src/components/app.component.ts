import {Component, ViewEncapsulation} from "@angular/core";
import {TodolistComponent} from "./todolist.component";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styleUrls: ['todolist.css'],
  directives:[TodolistComponent],
  template: `<todolist></todolist>`,
})

export class AppComponent {}
