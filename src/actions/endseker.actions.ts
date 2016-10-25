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
    this.store.dispatch({
      type   : ENDSEKER.END,
      payload: { showEndPage: item }
    })
  }

  updateResult(item) {
      this.store.dispatch({
      type   : ENDSEKER.RESULT,
      payload: { result: item }
    })
  }

}