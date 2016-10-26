import { Component } from '@angular/core';

@Component({
  selector: 'seker-questions-page',
  styleUrls: ['../app.component.css'],
template: `

  <!--aah-header></aah-header-->

  <section class="main">

    <!--input class="toggle-all"
           type="checkbox"-->

    <aah-todo-list></aah-todo-list>

  </section>

  <aah-footer></aah-footer>
  `
})

export class QuestionsPageComponent {}