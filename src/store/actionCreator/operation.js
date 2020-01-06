import { INCREMENT, DECREMENT } from "../actionTypes";

const increment = () => {
  return {
    type: INCREMENT
  };
};
const decrement = () => {
  return {
    type: DECREMENT
  };
};

export function actionIncrement() {
  console.log("action");
  return dispatch => {
    dispatch(increment());
  };
}

export function actionDecrement() {
  return dispatch => {
    dispatch(decrement());
  };
}
