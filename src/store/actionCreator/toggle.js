import { TOGGLE, LOADING } from "../actionTypes";

const toggle = () => {
  return {
    type: TOGGLE
  };
};
const loading = () => {
  return {
    type: LOADING
  };
};

export function actionToggle() {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(toggle());
    }, 3000);
  };
}
