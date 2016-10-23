import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../services/analysis.service'
import { ListService } from '../../services/list.service'

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],
  template: `
   <div *ngIf=!showResult>
    <ul class="todo-list"  (finish)=finishSeker()>

     <aah-todo-item *ngFor="let item of todoList"
     [item]="item"
     (destroy)="destroyItem(item,$event)">
     </aah-todo-item>
   </ul>

  <!-- temp hack-->  
  <button (click)=finishSeker()>finish the seker</button>
  </div>
  <br>
  <div *ngIf=showResult> 
  <h3> {{result}} </h3>
  </div>
  `
})
/// [value]="item.title" - is better than value= {{item.title}} 
// as {{}} is only for strings, where it title we can pass objects
// (keyup.escape)=""
//[item]- is just a var name
export class TodoListComponent implements OnInit {

result : string ;
showResult : Boolean = false;
//@Input() finish :any;
  todoList = [
    {title: 'whatsup today?',percent: 0 },
    {title: 'Set up environment', percent: 0 },
    {title: 'Clone project', percent: 0 },
    {title: 'Come to meetup', percent: 0 },
  ];

// why need this workaround? why cant use vars in constructor?
  analysisService : AnalysisService ;
  listService : ListService;

constructor( calc : AnalysisService, list : ListService) {
  this.analysisService = calc;
  this.listService = list;
}

ngOnInit() {
 console.log('init todo-list');
  this.todoList = this.listService.getListFromModel();
}

destroyItem(item : any, event) {
  console.log("event");
  const index = this.todoList.indexOf(item);
  this.todoList.splice(index,1);
}
///// shouldnt be here at all. not a todo list thing ! 
finishSeker() {
  let result : string = this.analysisService.calculateResult(this.todoList);
  this.result = result;
  this.showResult = true;
}

/*
private showResult(result : string) {
console.log(result);
}*/

}

