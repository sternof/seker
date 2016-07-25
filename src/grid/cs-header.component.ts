import {Component} from '@angular/core';

@Component({
  selector: 'cs-header',
  template:`
  <header class="header">
    <ng-content></ng-content>
  </header>
  `
})

export class HeaderComponent {}