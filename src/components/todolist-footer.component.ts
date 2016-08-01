import {Component} from "@angular/core";

@Component({
  selector: 'todolist-footer',
  template: `
  <footer class="footer">      
    <ng-content></ng-content>
  </footer>
`,
})

export class TodolistFooterComponent {}
