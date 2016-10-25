import { Component, Output, EventEmitter } from '@angular/core';
//import {Store} from '../../app.store';
import {ENDSEKER} from '../../constants/actions';
import { EndSekerActions } from '../../actions/endseker.actions';

@Component({
  selector: 'aah-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
      <!--span class="todo-count">
        <strong>1</strong>
        item left
      </span-->
      <button class="clear-completed" (click)=finishSeker()>finish</button>
    </footer>
  `
})

export class FooterComponent {
 @Output() finish : EventEmitter<any> = new EventEmitter();

 // private store: Store;

  constructor( private endseker : EndSekerActions ) {
  //  this.store = _store;
  }

  finishSeker() {
  this.endseker.end(true);

  
  }
}
