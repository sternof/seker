import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {ENDSEKER} from '../../constants/actions';
import { EndSekerActions } from '../../actions/endseker.actions';
import { AnalysisService } from '../../services/analysis.service';
import {Store} from '../../app.store';

@Component({
  selector: 'seker-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
    <!--ngb-progressbar type="success" [value]="60"></ngb-progressbar>
          <div class="progress">
        <div [progressbar] ='60' class="progress-bar" role="progressbar" [contextType]='3'
          aria-valuemin="0" aria-valuemax="100"> {{precentUnansweredQuestions() | percent:'1.0-0'}}
      </div>
        </div-->
      <span class="todo-count" *ngIf=countUnansweredQuestions()>
        <strong> {{countUnansweredQuestions()}}</strong>
        item(s) left
      </span>
      <button class="clear-completed" (click)=finishSeker()>סיום</button>
    </footer>
    
  `
})

export class FooterComponent {

  private store: Store;

  constructor( _store : Store, private endseker : EndSekerActions , 
  private analysisService : AnalysisService, private router: Router) {
    this.store = _store;
  }

  finishSeker() {
  let result : number = this.analysisService.calculateResult(this.store.state['list'] );
  this.endseker.setResultYear(result);
  if (result) {
  this.endseker.setResult(true);
  }
  let percent : number = this.analysisService.calculatePercent(this.store.state['list'] );
  this.endseker.setResultPercent(percent);
  this.router.navigate(['/results']);
  }

  private countUnansweredQuestions(): number {
    return this.store.state['list'].filter(item => { 
      return item['percent']===0}).length;
  }

    private precentUnansweredQuestions(): number {
    var items :number = this.store.state['list'].filter(item => { 
      return item['percent']!=0}).length;
      return (items / (this.store.state['list'].length)); 
  }
}

