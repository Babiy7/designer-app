import { combineReducers } from "redux";

import modalReducer from "../reducers/modal";
import newsReducer from "../reducers/news";

const rootReducer = combineReducers({
  modal: modalReducer,
  news: newsReducer
});

export default rootReducer;
