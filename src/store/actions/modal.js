import { OPEN_CALL, OPEN_PROJECT, OPEN_RESUME } from "../actionTypes";

export const openCall = () => {
  return {
    type: OPEN_CALL
  };
};

export const openResume = () => {
  return {
    type: OPEN_RESUME
  };
};

export const openProject = () => {
  return {
    type: OPEN_PROJECT
  };
};
