import {Injectable, Optional} from '@angular/core';
import {Item} from "./item";
import {Storage} from './storage';


@Injectable()
export class Todolist {
  private _items: Item[];
  private store: Storage;

  constructor(@Optional() storage: Storage) {
    this._items = [];
    this.store = storage;
  }

  get items():Item[] {
    return this._items;
  }

  public addItem(item: string){
    this._items.push(new Item(item));
  }

  public removeItem(item: Item): void{
    let index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }
}