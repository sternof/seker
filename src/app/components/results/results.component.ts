import { Component, OnInit } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-results',
  template: `
 <header class="rtl">
  <div *ngIf="store.state.endseker.noResults"> 
  <br>
  <h2 class="rtl"> {{summary}} </h2>
  <h3 class="rtl"> {{home }} {{store.state.endseker.resultYear}} </h3>
  <h3 class="rtl"> {{percent}} {{store.state.endseker.resultPercent | percent:'2.2-2' }}  </h3>
  </div>
  <div *ngIf="!store.state.endseker.noResults"> 
  <h2 class="rtl"> {{ noRes}} </h2>
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

  constructor(  _store: Store ) {
   this.store = _store;
 }

  ngOnInit() {
  }

}
