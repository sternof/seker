import {Component} from '@angular/core';

@Component({
  selector: 'cs-footer',
  template:`
  <footer class="footer">
    <ng-content></ng-content>
  </footer>
  `
})

export class FooterComponent {}