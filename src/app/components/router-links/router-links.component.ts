import { Component, OnInit } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-router-links',
  template: `
<header class="rtl">
  <br><br>
 <hr>
  <a class="rtl" routerLink="/questions" routerLinkActive="active">{{ToQuestions}}</a>
    <br>
  <a class="rtl" routerLink="/links" routerLinkActive="active">{{ToLinks}}</a>
    <br>
  <a class="rtl" routerLink="/addquestions" routerLinkActive="active">{{ToAddQuestions}}</a>
   <br>
  <a class="rtl" routerLink="/" routerLinkActive="active">{{ToHome}}</a>
    <br>
 </header>
  `,
  styles: ['.rtl { direction: rtl; }']
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
