import { Component } from '@angular/core';

@Component({
    selector: 'cs-item',
    template: `
        <li ngClass="{ completed: '', editing: '' }">

        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Title</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>
`
})
export class ItemComponent  {


}