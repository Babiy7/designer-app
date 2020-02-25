import { OPEN_CALL, OPEN_PROJECT, OPEN_RESUME } from "../actionTypes";
import { updateState } from "../../shared/utility";

const initialState = {
  call: {
    isOpen: false
  },
  project: {
    isOpen: false
  },
  resume: {
    isOpen: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_CALL:
      return updateState(state, payload);

    case OPEN_PROJECT:
      return updateState(state, payload);

    case OPEN_RESUME:
      return updateState(state, payload);

    // case action.CLOSE_CALL:
    //   return updateState(state, payload);

    // case action.CLOSE_PROJECT:
    //   return updateState(state, payload);

    // case action.CLOSE_RESUME:
    //   return updateState(state, payload);

    default:
      return state;
  }
};
