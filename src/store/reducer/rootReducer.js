import { combineReducers } from "redux";
import count from "./countReducer";
import toggle from "./toggleReducer";

export const rootReducer = combineReducers({ count: count, toggle: toggle });
