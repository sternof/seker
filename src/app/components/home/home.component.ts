import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seker-home',
  template: `
    <header class="header">  
      <h2> {{description}}</h2>
      <br>
    </header>
       <seker-router-links></seker-router-links>
  `,
  styles: ['h2 { direction: rtl; }']
})
export class HomeComponent implements OnInit {
  description: string = 'סקר - פה יוסבר על הסקר ';

  constructor() { }

  ngOnInit() {
  }

}
