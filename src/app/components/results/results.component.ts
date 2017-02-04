import { Component, OnInit } from '@angular/core';
import {Store} from "../../app.store";
import { AnalysisService } from '../../services/analysis.service';

@Component({
  selector: 'seker-results',
  template: `
 <header class="rtl">
  <div *ngIf="calculateResults()"> 
  <br>
  <h2> {{summary}} </h2>
  <h3> {{home }} {{calculateResults()}} </h3>
  <h3> {{percent}} {{calculatePercent() | percent:'2.2-2' }}  </h3>
  </div>
  <div *ngIf="!calculateResults()"> 
  <h2> {{ noRes}} </h2>
  </div>
   <seker-router-links></seker-router-links>
 </header>
  `,
  styles: []
})
export class ResultsComponent implements OnInit {
private store: Store;
private summary : string = 'תוצאות';
private home: string = 'השנה בה תצטרכו למצוא בית חדש: ';
private percent: string = 'זו השנה בה האחוז הממוצע יהיה: ';
private noRes: string = 'אין תוצאות, נסה שוב ';

  constructor(  _store: Store , private analysisService : AnalysisService) {
   this.store = _store;
  }

  ngOnInit() {
  }

  calculateResults() : number {
    return this.analysisService.calculateResult(this.store.state['list'] );

  }
  calculatePercent() : number {
    return this.analysisService.calculatePercent(this.store.state['list'] );
  }

}
