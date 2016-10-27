import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],

  template: `
      <li class="rtl fix"
      [ngClass]="getItemClass(item)">
      <form>
        <div class="view">
        <label> {{item.title}} </label><br>
        <div class="rtl">
<input class="rtl" type="radio" name="selection" value=40 [(ngModel)] ="item.percent">
 40%
<input  class="rtl" type="radio" name="selection" value=50 [(ngModel)] ="item.percent">
 50%
<input  class="rtl" type="radio" name="selection" value=60 [(ngModel)] ="item.percent">
 60%
<input  class="rtl" type="radio" name="selection" value=70 [(ngModel)] ="item.percent">
 70%
 </div>

 <!--md-radio-group [(ngModel)]="item.percent">
  <md-radio-button value="40">40%</md-radio-button>
  <md-radio-button value="50">50%</md-radio-button>
  <md-radio-button value="60">60%</md-radio-button>
  <md-radio-button value="70">70%</md-radio-button>
</md-radio-group-->

         </div>
        </form>
      </li>
  `
})


export class TodoItemComponent {
  @Input() item : any;
  @Output() destroy : EventEmitter<any> = new EventEmitter();
editItem(item : any) : void {
item.editing = true;
}


// return an object to the class and the state true or false.
getItemClass(item : any) : any {
return {
  completed: item.completed,
  editing: item.editing
}
}
}

