import {combineReducers} from 'redux';
import {listReducer} from "./list.reducer";
import {endSekerReducer} from "./endseker.reducer";

export const RootReducer = combineReducers({
 list: listReducer, endseker : endSekerReducer
});