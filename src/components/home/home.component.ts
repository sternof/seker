import { Component } from '@angular/core';

@Component({
  selector: 'seker-home',
  styles: ['h2 { direction: rtl; }'],
  template: `
    <header class="header">  
      <h2> {{description}}</h2>
      <br>
    </header>
       <seker-links></seker-links>
  `
})

export class HomeComponent {

  description: string = ' עד מתי  ?  ';

}