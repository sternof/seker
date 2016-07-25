import {Component} from "@angular/core";

@Component({
  selector: 'cs-item',
  inputs  : ['item'],
  template: `
        <li [ngClass]="getClass(item)">

        <div class="view">
          <input class="toggle"
                 [value]="item.done"
                 type="checkbox">

          <label>{{item.title}}</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>
`
})

export class ItemComponent {

  private getClass(item) {
    return {
      completed: item.done,
      editing  : item.editing
    }
  }

}