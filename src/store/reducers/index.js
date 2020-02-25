import { combineReducers } from "redux";

import modalReducer from "../reducers/modal";

const rootReducer = combineReducers({
  modal: modalReducer
});

export default rootReducer;
