import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import {Store} from "../../app.store";
import {ListActions} from '../../actions/list.actions';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],
  template: `
   <div *ngIf="!store.state.endseker.showEndPage">
    <ul class="todo-list"  (finish)=finishSeker()>

     <aah-todo-item *ngFor="let item of store.state.list"
     [item]="item"
     (destroy)="destroyItem(item,$event)">
     </aah-todo-item>
   </ul>
  </div>
  <div *ngIf="store.state.endseker.showEndPage"> 
  <h3> {{store.state.endseker.resultYear}} </h3>
  <h3> {{store.state.endseker.resultPercent | percent:'2.2-2' }}  </h3>
  </div>
  `
})
/// [value]="item.title" - is better than value= {{item.title}} 
// as {{}} is only for strings, where it title we can pass objects
// (keyup.escape)=""
//[item]- is just a var name
export class TodoListComponent implements OnInit {

private store: Store;

result : string ;
//@Input() finish :any;

constructor(  _store: Store ,  private listService : ListService,
private listactions : ListActions) {
this.store = _store;

}

ngOnInit() {
  this.listService.getQuestionsFromModel().subscribe( list => {
    for (let i=0; i< list.length;i++){
      list[i].percent = 0;
      this.listactions.add(list[i]);
    }
});
}
/*
destroyItem(item : any, event) {
  console.log("event");
  const index = this.qList.indexOf(item);
  this.qList.splice(index,1);
}*/


}

