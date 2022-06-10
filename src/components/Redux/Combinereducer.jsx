import { combineReducers } from "redux";
import { reducer } from "./Reducer";

const rootReducer = combineReducers({ reducer : reducer})

export default rootReducer