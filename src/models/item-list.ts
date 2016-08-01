import {Injectable} from "@angular/core";
import {Item} from "./item";
import {Logger} from "./logger";
import {Storage} from '../common/network';


@Injectable()
export class ItemList {

  public items: Item[];
  private logger: Logger;
  private store: Storage;

  constructor(logger: Logger, store: Storage) {
    this.items  = [];
    this.logger = logger;
    this.store = store;
  }

  addItem(text: string){
    this.items.push(new Item(text));
    this.logger.log(`item added: ${text}`);
    this.store.setItem(this.items);
    
  }

  removeItem(item:Item){
    console.log(item);
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}