import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seker-question',
    styleUrls: ['./question.component.css'],

  template: `
      <li class="center"
      [ngClass]="getItemClass(item)">
      <form>
        <div class="view">
        <label> {{item.title}} </label><br>
<input class="center" type="radio" name="selection" value=30 [(ngModel)] ="item.percent">
 30% <br>
<input class="center" type="radio" name="selection" value=40 [(ngModel)] ="item.percent">
 40% <br>
<input class="center" type="radio" name="selection" value=50 [(ngModel)] ="item.percent">
 50% <br>
<input class="center" type="radio" name="selection" value=60 [(ngModel)] ="item.percent">
 60% <br>
<input class="center" type="radio" name="selection" value=70 [(ngModel)] ="item.percent">
 70% <br>
 </div>
        </form>
      </li>
  `
})
export class QuestionComponent implements OnInit {
  @Input() item : any;

  constructor() { }

  ngOnInit() {
  }


// return an object to the class and the state true or false.
getItemClass(item : any) : any {
return {
  completed: item.completed,
  editing: item.editing
}
}
}
