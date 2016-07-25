import {Pipe} from "@angular/core";

@Pipe({
  name: 'count',
  pure: false
})

export class Count {

  transform(valueArr:any[], prop, val):any {
    let _arr = valueArr.filter(item => item[prop] === val);
    return _arr.length;
  }
}