import { actionTypes as action } from "../actionTypes";

export const openCall = () => {
  return {
    type: action.OPEN_CALL
  };
};

export const openResume = () => {
  return {
    type: action.OPEN_RESUME
  };
};

export const openProject = () => {
  return {
    type: action.OPEN_PROJECT
  };
};
