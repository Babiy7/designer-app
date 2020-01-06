import { TOGGLE, LOADING } from "../actionTypes";

const initialState = {
  isToggle: false,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { isToggle: !state.isToggle, loading: false };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
