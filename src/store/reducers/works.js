import { CHANGE_CATEGORY } from "../actionTypes";

const initialState = {
  category: "",
  portfolios: [
    { category: "App" },
    { category: "Websites" },
    { category: "Interactions" },
    { category: "App" },
    { category: "Websites" },
    { category: "App" },
    { category: "App" },
    { category: "Interactions" },
    { category: "Interactions" }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CATEGORY:
      return { ...state, ...payload };

    default:
      return state;
  }
};
