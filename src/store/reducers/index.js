import { combineReducers } from "redux";

import modalReducer from "../reducers/modal";
import newsReducer from "../reducers/news";
import worksReducer from "../reducers/works";

const rootReducer = combineReducers({
  modal: modalReducer,
  news: newsReducer,
  works: worksReducer
});

export default rootReducer;
