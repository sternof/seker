import {Component, Output, EventEmitter} from "@angular/core";
import {Item} from "../../models/item";

@Component({
  selector: 'cs-item',
  inputs  : ['item'],
  template: `
        <li [ngClass]="getClass(item)">

        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">

          <label>{{item.title}}</label>

          <button class="destroy" (click)="destroyItem.emit(item)"></button>

        </div>

        <input class="edit">

      </li>
`
})

export class ItemComponent {

  @Output()
  private destroyItem = new EventEmitter<Item>();

  private getClass(item) {
    return {
      completed: item.done,
      editing  : item.editing
    }
  }

}