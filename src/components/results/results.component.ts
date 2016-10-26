import { Component } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-results',
  styleUrls: ['./results.component.css'],
template: `
 <header class="rtl">
  <div *ngIf="store.state.endseker.showEndPage"> 
  <br>
  <h2 class="rtl"> {{summary}} </h2>
  <h3 class="rtl"> {{home }} {{store.state.endseker.resultYear}} </h3>
  <h3 class="rtl"> {{percent}} {{store.state.endseker.resultPercent | percent:'2.2-2' }}  </h3>
  </div>
  <div *ngIf="!store.state.endseker.showEndPage"> 
  <h2 class="rtl"> {{ noResults}} </h2>
  </div>
   <seker-links></seker-links>
 </header>
  `
})

export class ResultsComponent {

private store: Store;
private summary : string = 'תוצאות';
private home: string = 'השנה בא תצטרכו למצוא בית חדש: ';
private percent: string = 'זו השנה בה האחוז ממוצע יהיה: ';
private noResults: string = 'אין תוצאות, נסה שוב ';

constructor(  _store: Store ) {
 this.store = _store;
 }

}