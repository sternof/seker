import { Component } from '@angular/core';

@Component({
  selector: 'add-questions-page',
  styles: [`h1 { 
  top: -155px;
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  color: blue;
  direction: rtl; }`],
  template: `
      <h1>{{ title }}</h1>  
     <seker-links></seker-links>
  `
})

export class AddQuestionsPageComponent {

  title: string = 'בעתיד ניתן יהיה להוסיף שאלות למאגר';

}