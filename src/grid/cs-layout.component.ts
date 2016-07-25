import {Component} from '@angular/core';

@Component({
  selector: 'cs-layout',
  template:`
  <section class="todoapp">
    <ng-content></ng-content>
  </section>
  `
})

export class LayoutComponent {}