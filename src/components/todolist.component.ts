import { Component } from '@angular/core';

@Component({
  selector: 'todolist',
  styles:['div {text-align: center}'],
  template: `
    <section class="todoapp">
      <section class="main">

    <input class="toggle-all"
           type="checkbox">
    
      </section>
</section>

    `,
})

export class TodolistComponent {}
