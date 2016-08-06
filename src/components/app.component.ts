import {Component} from '@angular/core';
import { PipeEndsWithComponent } from '../shared/pipes/string/ends-with/ends-with.component';

@Component({
  selector: 'app',
  directives: [PipeEndsWithComponent],
  template: `
    <h1>Angular2 Course</h1>
    <pipe-ends-with></pipe-ends-with>
    `,
})

export class AppComponent {}
