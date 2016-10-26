import { Component } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-links',
  styles: ['.rtl { direction: rtl; }'],
template: `
 <header class="rtl">
 
  <br><br>
 <h1>----------חוצץ מדהים ביופיו---------</h1>
  <a class="rtl" routerLink="/questions" routerLinkActive="active">{{ToQuestions}}</a>
    <br>
  <a class="rtl" routerLink="/links" routerLinkActive="active">{{ToLinks}}</a>
    <br>
  <a class="rtl" routerLink="/addquestions" routerLinkActive="active">{{ToAddQuestions}}</a>
   <br>
  <a class="rtl" routerLink="/" routerLinkActive="active">{{ToHome}}</a>
    <br>
 </header>
  `
})

export class LinksComponent {

private ToHome = 'לדף הראשי';
private ToQuestions = 'להתחלת המשאל';
private ToLinks = 'לדף הלינקים';
private ToAddQuestions = 'להוספת שאלות למאגר';


}