import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seker-home',
  template: `
    <header class="header rtl">  
      <h2> {{description}}</h2>
      <br>
    </header>
       <seker-router-links></seker-router-links>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  description: string = 'סקר - פה יוסבר על הסקר ';

  constructor() { }

  ngOnInit() {
  }

}
