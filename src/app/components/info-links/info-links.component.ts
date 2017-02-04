import { Component, OnInit } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-info-links',
  template: `
 <header class="rtl">
  <br>
  <h1 class="rtl"> מהלינקים המפורטים מטה נלקחו הנתונים, כמו כן מצורפים לינקים לנושא מהעיתונות</h1>
  
  <a class="rtl" href="http://www.cbs.gov.il/publications/tec27.pdf" 
  target="_blank">תחזית הלמ"ס לטווח ארוך </a>
  <br>
    
  <a class="rtl" href="https://he.wikipedia.org/wiki/%D7%93%D7%9E%D7%95%D7%92%D7%A8%D7%A4%D7%99%D7%94_%D7%A9%D7%9C_%D7%99%D7%A9%D7%A8%D7%90%D7%9C"
  target="_blank">דמוגרפיה של ישראל, הביטו באוכלוסייה היהודית נכון להיום (נתונים נכון ל 2011)  </a>
  <br>
    
  <a class="rtl" href="http://www.themarker.com/realestate/1.3078694"
  target="_blank">פתרון מצוקת הדיור לחרדים  </a>
<br>

 </header>
 <seker-router-links></seker-router-links>
  `,
  styles: []
})
export class InfoLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
