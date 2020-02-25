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
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
