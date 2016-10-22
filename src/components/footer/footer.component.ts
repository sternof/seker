import { Component, Output, EventEmitter } from '@angular/core';

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

// aint working as footer is in app , not in list. can use when using redux. 
  finishSeker() {
    this.finish.emit(null);
console.log('finish seker footer');
  }
}
