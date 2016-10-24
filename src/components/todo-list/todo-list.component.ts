import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../services/analysis.service'
import { ListService } from '../../services/list.service'

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],
  template: `
   <div *ngIf=!showResult>
    <ul class="todo-list"  (finish)=finishSeker()>

     <aah-todo-item *ngFor="let item of qList"
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
qList = [];

constructor( private analysisService : AnalysisService,  private listService : ListService) {
}

ngOnInit() {
  this.listService.getListFromModel().subscribe( list => {
    for (let i=0; i< list.length;i++){
      list[i].percent = 0;
    }
    this.qList = list;
});
}

destroyItem(item : any, event) {
  console.log("event");
  const index = this.qList.indexOf(item);
  this.qList.splice(index,1);
}
///// shouldnt be here at all. not a todo list thing ! 
finishSeker() {
  let result : string = this.analysisService.calculateResult(this.qList);
  this.result = result;
  this.showResult = true;
}

/*
private showResult(result : string) {
console.log(result);
}*/

}

