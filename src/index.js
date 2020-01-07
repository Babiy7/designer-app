import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import friendList from "./store/reducers/friendList";
import * as actions from "./store/actions/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

let store = createStore(friendList, composeEnhancers(applyMiddleware(thunk)));

console.log(store.getState());
store.dispatch(actions.addFriend("Oleg"));
store.dispatch(actions.deleteFriend(1));
store.dispatch(actions.starFriend(2));
store.dispatch(actions.addFriend("Rostic"));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
