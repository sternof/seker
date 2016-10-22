import { Component } from '@angular/core';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list" (finish)=finishSeker()>

     <aah-todo-item *ngFor="let item of todoList"
     [item]="item"
     (destroy)="destroyItem(item,$event)">
     </aah-todo-item>
   </ul>

  <!-- temp hack-->  
  <button (click)=finishSeker()>finish the seker</button>

  `
})
/// [value]="item.title" - is better than value= {{item.title}} 
// as {{}} is only for strings, where it title we can pass objects
// (keyup.escape)=""
//[item]- is just a var name
export class TodoListComponent {

//@Input() finish :any;
  todoList = [
    {title: 'whatsup today?',percent: 0 },
    {title: 'Set up environment', percent: 0 },
    {title: 'Clone project', percent: 0 },
    {title: 'Come to meetup', percent: 0 },
  ];

destroyItem(item : any, event) {
  console.log("event");
  const index = this.todoList.indexOf(item);
  this.todoList.splice(index,1);
}
///// shouldnt be here at all. not a todo list thing ! 
finishSeker() {
  let result : string = this.calculateList();
  this.showResult(result);
}

private calculateList() : string {
let answeredList = this.todoList.filter(item => item.percent != 0);
let length : number = answeredList.length; 
let res = 'You did not answer any question!'
if (length) {
let sum : number = answeredList.map( item => item.percent).reduce( (total,item) => Number(total) + Number(item) );
res = (sum / length).toString();
}
return res;
}

private showResult(result : string) {

console.log(result);
}

}

