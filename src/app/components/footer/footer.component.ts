import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Store} from '../../app.store';
import {ListService} from'../../services/list.service'
@Component({
  selector: 'seker-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
    <progressbar [type]="progressBarType()" [value]="percentUnansweredQuestions()">{{percentUnansweredQuestions()/100 | percent:'1.0-0'}} </progressbar> 
    
    <button class="clear-completed" (click)=finishSeker()>סיום</button>
    <button class="clear-completed" (click)=clearSelections()>נקה</button>

      <span class="todo-count" *ngIf=countUnansweredQuestions()>
        <strong> {{countUnansweredQuestions()}}</strong>
        item(s) left
      </span>
    </footer>
    
  `
})

export class FooterComponent {

  private store: Store;

  constructor( _store : Store, private router: Router, private listService: ListService) {
    this.store = _store;
  }

  finishSeker() {
  this.router.navigate(['/results']);
  this.listService.clearList();
  }
  clearSelections() {
  this.listService.clearList();
  }

  private countUnansweredQuestions(): number {
    return this.store.state['list'].filter(item => { 
      return item['percent']===0}).length;
  }

  private percentUnansweredQuestions(): number {
    var items :number = this.store.state['list'].filter(item => { 
      return item['percent']!=0}
      ).length;
      return Math.round((items / (this.store.state['list'].length) * 100)); 
  }

  private progressBarType() : string {
    let percent = this.percentUnansweredQuestions();
    if (percent < 35)
      return "info";
    else if(percent <70)
      return "warning";
    return "success"
  }
}

