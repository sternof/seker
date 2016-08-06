/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EndsWithPipe } from './ends-with.pipe';

describe('Pipe: EndsWith', () => {
  it('create an instance', () => {
    let pipe = new EndsWithPipe();
    expect(pipe).toBeTruthy();
  });
});
