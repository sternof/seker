import {ENDSEKER} from '../constants/actions';


export function endSekerReducer(state = { showEndPage : false } , action) {

  switch (action.type) {

    case ENDSEKER.END:
    case ENDSEKER.CALC_YEAR:
    case ENDSEKER.CALC_PERCENT:
    // tsconfig target es6 problem : resolution: <any>
    // payload should be { property : value}
      return (<any>Object).assign({}, state, action.payload) 
    default:
      return state;
  }
}