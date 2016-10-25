import {ENDSEKER} from '../constants/actions';


export function endSekerReducer(state = { showEndPage : false } , action) {

  switch (action.type) {

    case ENDSEKER.END:
    case ENDSEKER.RESULT:
    // tsconfig target es6 problem : resolution: <any>
      return (<any>Object).assign({}, state, action.payload) // payload should be { showEndPage : true \ false}
    default:
      return state;
  }
}