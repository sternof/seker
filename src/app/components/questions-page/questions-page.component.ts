import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seker-questions-page',
  template: `
  <section class="main">
    <seker-questions-list></seker-questions-list>
  </section>
  <seker-footer></seker-footer>
  `,
  styleUrls: ['../app.component.css']
})
export class QuestionsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
