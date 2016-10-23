import { Component } from '@angular/core';

@Component({
  selector: 'aah-header',
  styleUrls: ['./header.component.css'],

  template: `
    <header class="header">  
      <h1>{{ title }}</h1>  
      <h2> {{description}}</h2>
      <!--
      <aah-todo-input></aah-todo-input>
      -->
    </header>
  `
})

export class HeaderComponent {

  title: string = 'Seker';
  description: string = 'this seker is for ... ';

}
