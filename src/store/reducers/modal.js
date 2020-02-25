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

export default (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
