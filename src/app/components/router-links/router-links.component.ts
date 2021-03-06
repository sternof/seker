import { Component, OnInit } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-router-links',
  template: `
<header class="rtl">
  <br><br>
 <hr>
  <a routerLink="/questions" routerLinkActive="active">{{ToQuestions}}</a>
    <br>
  <a routerLink="/links" routerLinkActive="active">{{ToLinks}}</a>
    <br>
  <a routerLink="/addquestions" routerLinkActive="active">{{ToAddQuestions}}</a>
   <br>
  <a routerLink="/" routerLinkActive="active">{{ToHome}}</a>
    <br>
 </header>
  `,
  styles: []
})
export class RouterLinksComponent implements OnInit {
private ToHome = 'לדף הראשי';
private ToQuestions = 'לתחילת המשאל';
private ToLinks = 'לדף הלינקים';
private ToAddQuestions = 'להוספת שאלות למאגר';

  constructor() { }

  ngOnInit() {
  }

}
