//import { Injectable } from '@angular/core';


//@Injectable()
export class AnalysisService {

calculateResult(list) : string {
let answeredList = list.filter(item => item.percent != 0);
let length : number = answeredList.length; 
let res = 'You did not answer any question!'
if (length) {
let sum : number = answeredList.map( item => item.percent).reduce( (total,item) => Number(total) + Number(item) );
let percent : number = sum / length;
res = 'You should find a new home in ' + this.calculateFromPercentToYearAll( percent).toString();
}
return res;
}

private calculateFromPercentToYearAll(percent: number) : number {
let res = Math.round((percent/100+13.642)/0.006956);
return res; 
}

private calculateFromPercentToYearHL(percent: number) : number {
let res = Math.round((percent/100+11.689)/0.0065908);
return res; 
}

}