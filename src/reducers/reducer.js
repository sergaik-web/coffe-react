const initialState = {
  menu: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VALUE":
      console.log("action work");
      return state;
    default:
      return state;
  }
};

export default reducer;
