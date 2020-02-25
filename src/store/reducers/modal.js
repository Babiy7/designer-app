import { CALL, PROJECT, RESUME } from "../actionTypes";
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
    case CALL:
      const call = {
        call: {
          isOpen: !state.call.isOpen
        }
      };

      return updateState(state, call);

    case PROJECT:
      const project = {
        project: {
          isOpen: !state.project.isOpen
        }
      };

      return updateState(state, project);

    case RESUME:
      const resume = {
        resume: {
          isOpen: !state.resume.isOpen
        }
      };

      return updateState(state, resume);

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
