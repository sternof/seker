import { Component, Output, EventEmitter } from '@angular/core';
//import {Store} from '../../app.store';
import {ENDSEKER} from '../../constants/actions';
import { EndSekerActions } from '../../actions/endseker.actions';
import { AnalysisService } from '../../services/analysis.service';
import {Store} from '../../app.store';
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

  private store: Store;

  constructor( _store : Store, private endseker : EndSekerActions , private analysisService : AnalysisService) {
    this.store = _store;
  }

  finishSeker() {
  this.endseker.end(true);
  let result : string = this.analysisService.calculateResult(this.store.state['list'] );
  this.endseker.updateResultYear(result);
  let percent : number = this.analysisService.calculatePercent(this.store.state['list'] );
  this.endseker.updateResultPercent(percent.toString());
  
  }
}
