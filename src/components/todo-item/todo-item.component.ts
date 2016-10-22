import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],

  template: `
      <li 
      [ngClass]="getItemClass(item)">
        <div class="view">
          <input class="toggle"
                 type="checkbox" 
                 [checked]=item.completed
                 (change)="changeCompleted( item, Checkboxmark.checked)"
                 #Checkboxmark>
          <label (click)=editItem(item)> {{item.title}} </label>
          <button class="destroy" 
          (click)="destroyItem(item)">
          </button>
        </div>
        <input class="edit" 
        [value]="item.title" >
      </li>
  `
})

export class TodoItemComponent {
  @Input() item : any;
  @Output() destroy : EventEmitter<any> = new EventEmitter();
editItem(item : any) : void {
item.editing = true;
}

destroyItem(item : any) {
  this.destroy.emit(item); // calling for the todo list to remove the item
}
// return an object to the class and the state true or false.
getItemClass(item : any) : any {
return {
  completed: item.completed,
  editing: item.editing
}
}
changeCompleted(item: any, checkboxmark : boolean) {
 // item.completed= !item.completed; 
 //better way:
 item.completed = checkboxmark;
}
}

