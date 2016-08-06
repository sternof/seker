/**
 * @ngdoc pipe
 * @name endsWith
 * @kind function
 *
 * @description
 * checks whether string ends with the ends parameter.
 * Usage:
 *  value | endsWith: ends : case-sensitive
 * Example:
 *  {{ 'Superhero' | endsWith: 'hero' : true }}
 *  returns true
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endsWith'
})
export class EndsWithPipe implements PipeTransform {

  transform(value:any, ends:any, csensitive:any):any {
    let sensitive = csensitive || false,
      position;

    if (typeof(value) !== 'string' || ends === undefined) {
      return value;
    }

    value = (sensitive) ? value : value.toLowerCase();
    position = value.length - ends.length;

    return value.indexOf((sensitive) ? ends : ends.toLowerCase(), position) !== -1;
  }

}
