import {Component} from '@angular/core';

@Component({
  selector: 'cs-main',
  template:`
  <section class="main">
    <ng-content></ng-content>
  </section>
  `
})

export class MainComponent {}