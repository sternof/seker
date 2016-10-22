//import { Injectable } from '@angular/core';


//@Injectable()
export class CalculationService {

calculateResult(list) : string {
let answeredList = list.filter(item => item.percent != 0);
let length : number = answeredList.length; 
let res = 'You did not answer any question!'
if (length) {
let sum : number = answeredList.map( item => item.percent).reduce( (total,item) => Number(total) + Number(item) );
let percent : number = sum / length;
res = this.calculateFromPercentToYear( percent).toString();
}
return res;
}

private calculateFromPercentToYear(percent: number) : number {
let res = ((percent/100+13.642)/0.006956);
return res; 
}

}