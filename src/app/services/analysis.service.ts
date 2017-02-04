import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {


calculatePercent(list) : number {
let answeredList = list.filter(item => item.percent != 0);
let length : number = answeredList.length; 
let percent :number = 0;
if (length) {
let sum : number = answeredList.map( item => item.percent).reduce( (total,item) => Number(total) + Number(item) );
percent = sum / (length*100);
}
return percent; 

}

calculateResult(list) : number {
let percent = this.calculatePercent(list);
let res : number = 0;
if (percent !== 0) { 
    res = this.calculateFromPercentToYearHLJewishPop( percent);
 }
return res;
}

private calculateFromPercentToYearAllGenPop(percent: number) : number {
let res = Math.round((percent+13.642)/0.006956);
return res; 
}
// HL - Haredim plus Leumiim
private calculateFromPercentToYearHLGenPop(percent: number) : number {
let res = Math.round((percent+11.689)/0.0065908);
return res; 
}

private calculateFromPercentToYearAllJewishPop(percent: number) : number {
let res = Math.round((percent+17.681)/0.009014);
return res; 
}

// HL - Haredim plus Leumiim
private calculateFromPercentToYearHLJewishPop(percent: number) : number {
let res = Math.round((percent+14.89)/0.007517);
return res; 
}

}