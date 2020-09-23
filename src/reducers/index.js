import { combineReducers } from "redux";
import irisReducer from "./irisReducer";

export default combineReducers({
    iris: irisReducer
  });