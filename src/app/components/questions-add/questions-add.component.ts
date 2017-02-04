import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seker-questions-add',
  template: `
      <h1 class= "rtl">{{ title }}</h1>  
     <seker-router-links></seker-router-links>
  `,
  styles: [`h1 { 
  top: -155px;
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  color: blue;
   }`]
})
export class QuestionsAddComponent implements OnInit {
  title: string = 'בעתיד ניתן יהיה להוסיף שאלות למאגר';

  constructor() { }

  ngOnInit() {
  }

}
