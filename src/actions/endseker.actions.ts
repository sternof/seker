import {Injectable} from "@angular/core";
import {Store} from "../app.store";
import {ENDSEKER} from '../constants/actions';

@Injectable()
export class EndSekerActions {

  private store:Store;

  constructor(_store:Store) {
    this.store = _store;
  }

  end(item) {
    this.updateProperty(ENDSEKER.END, { showEndPage: item });
  }

  updateResultYear(item) {
    this.updateProperty(ENDSEKER.CALC_YEAR, { resultYear: item });
  }

  updateResultPercent(item) {
    this.updateProperty(ENDSEKER.CALC_PERCENT, { resultPercent: item });
  }


  private updateProperty(type, item) {
    this.store.dispatch({
      type   : type,
      payload: item
    })
  }

}