import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],

  template: `
      <li 
      [ngClass]="getItemClass(item)">
      <form>
        <div class="view">
        <label> {{item.title}} </label><br>


<input type="radio" name="selection" value=40 [(ngModel)] ="item.percent">
 40%<br><br>
<input type="radio" name="selection" value=50 [(ngModel)] ="item.percent">
 50%<br><br>
<input type="radio" name="selection" value=60 [(ngModel)] ="item.percent">
 60%<br><br>
<input type="radio" name="selection" value=70 [(ngModel)] ="item.percent">
 70%
         </div>
        </form>
      </li>



<!--
      <h1> debug:</h1>
      <h3> {{ item | json}} </h3>


          <input class="toggle"
                 type="checkbox" 
                 [checked]=item.completed
                 (change)="changeCompleted( item, Checkboxmark.checked)"
                 #Checkboxmark>
          <label (click)=editItem(item)> {{item.title}} </label>
          <button class="destroy" 
          (click)="destroyItem(item)">
          </button>
        <input class="edit" 
        [value]="item.title" >
-->
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
/*
destroyItem(item : any) {
  this.destroy.emit(item); // calling for the todo list to remove the item
}

changeCompleted(item: any, checkboxmark : boolean) {
 // item.completed= !item.completed; 
 //better way:
 item.completed = checkboxmark;
}*/
}

