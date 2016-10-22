//import { Injectable } from '@angular/core';


//@Injectable()
export class CalculationService {

calculatePercent(list) : string {
let answeredList = list.filter(item => item.percent != 0);
let length : number = answeredList.length; 
let res = 'You did not answer any question!'
if (length) {
let sum : number = answeredList.map( item => item.percent).reduce( (total,item) => Number(total) + Number(item) );
res = (sum / length).toString();
}
return res;
}

}