import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store/reducer/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let person = {
  name: "Owen",
  age: 23,
  isJob: "Yes"
};

let newPerson = {};

const poop = name => store => reducer => {
  console.log(name);
  console.log(store);
  console.log(reducer);
};

// poop("Owen")("silpo")("count");

// Object.entries(person).forEach(([key, name]) => {
//   console.log(key + " " + name);
//   newPerson[name] = key;
// });

let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App
      counte={store.getState()}
      store={store}
      dispatch={action => store.dispatch(action)}
    />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
