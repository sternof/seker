import { Component } from '@angular/core';

@Component({
  selector: 'aah-header',
  styles: [`h1 { 
    position: absolute;
  top: -155px;
  width: 100%;
  font-size: 50px;
  font-weight: 100;
  text-align: center;
  color: blue;
  direction: rtl; }`],
  template: `
    <header class="header">  
      <h1>{{ title }}</h1>  
    </header>
  `
})

export class HeaderComponent {

  title: string = 'סקר';

}
