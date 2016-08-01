import {Component} from "@angular/core";

@Component({
  selector: 'todolist-main',
  template: `
    <section class="main">
      <ng-content></ng-content>      
    </section>
  `,
})

export class TodolistMainComponent {}
