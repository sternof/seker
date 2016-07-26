import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector  : 'app',
  directives: [ROUTER_DIRECTIVES],
  template  : `
    <h1>Angular2 Course</h1>
    <router-outlet></router-outlet>          
    `,
})

export class AppComponent {

}

