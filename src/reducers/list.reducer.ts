import {LIST} from '../constants/actions';


export function listReducer(state = [], action) {

  switch (action.type) {

    case LIST.ADD_ITEM:
      return [...state, action.payload];

    case LIST.REMOVE_ITEM:
      let index = state.indexOf(action.payload);

      return state.slice(0, index)
          .concat(state.slice(index + 1));

    default:
      return state;
  }
}