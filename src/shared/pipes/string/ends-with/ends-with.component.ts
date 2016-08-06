import { Component } from '@angular/core';
import { EndsWithPipe } from './ends-with.pipe';

@Component({
  selector: 'pipe-ends-with',
  pipes: [EndsWithPipe],
  template: `
    <p> endsWith pipe: returns whether the value ends with the given end.<br>
        If the value is not string or the end parameter is undefined, returns the value.<br>
        The second parameter (boolean) indicates whether the comparison is case sensitive.<br>
        Press enter to update the input values.<br>
    </p>
    <div>
      <label for="value">Value: </label>
      <input id="value" #valueInput (keyup.enter)="updateValue(valueInput.value, 'value')">
    </div>
    <div>
      <label for="end">End: </label>
      <input id="ends" #endsInput (keyup.enter)="updateValue(endsInput.value, 'ends')">
    </div>
    <div>
      <input type="checkbox" 
             id="csensitive" 
             #csensitiveInput 
             (change)="updateValue(csensitiveInput.checked, 'csensitive')">
      <label for="csensitive">Case Sensitive</label>
    </div>
    <div>Pipe result: {{ value | endsWith: ends : csensitive }}</div>
    `,
})

export class PipeEndsWithComponent {
  value:string = '';
  ends:any;
  csensitive:boolean;

  updateValue(newValue:string, prop:string) {
    this[prop] = newValue;
  }
}
