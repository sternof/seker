import { Component } from '@angular/core';
import {Store} from "../../app.store";

@Component({
  selector: 'seker-results',
  styleUrls: ['./results.component.css'],
template: `
 <header class="rtl">
  <div *ngIf="store.state.endseker.showEndPage"> 
  <h2 class="rtl"> {{summary}} </h2>
  <h3 class="rtl"> {{home }} {{store.state.endseker.resultYear}} </h3>
  <h3 class="rtl"> {{percent}} {{store.state.endseker.resultPercent | percent:'2.2-2' }}  </h3>
  </div>
  <div *ngIf="!store.state.endseker.showEndPage"> 
  <h1> No results to show. please try again</h1>
  </div>
  <br>
  <a routerLink="/" routerLinkActive="active"> back to the Question page </a>
 </header>
  `
})

export class ResultsComponent {

private store: Store;
private summary : string = 'תוצאות הסקר';
private home: string = 'השנה בא תצטרכו למצוא בית חדש: ';
private percent: string = 'אחוז ממוצע: ';

constructor(  _store: Store ) {
 this.store = _store;
 }

}