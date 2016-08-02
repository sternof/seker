import { Component } from '@angular/core';

@Component({
  selector: 'aah-header',

  styles: [
    `
      .header h1 {
        position: absolute;
        top: -155px;
        width: 100%;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
      }
      
      .new-todo {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
      }
    `
  ],

  template: `
    <header class="header">
  
      <!-- Header Title-->
      <h1>{{ title }}</h1>
  
      <!--Header Form-->
      <input class="new-todo"
             placeholder="What needs to be done?"
             autofocus #todoInput 
             (keyup.enter)="changeTitle(todoInput.value)" >
    </header>
  `
})

export class HeaderComponent {

  title:string = 'AfterHours Todo';

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}
