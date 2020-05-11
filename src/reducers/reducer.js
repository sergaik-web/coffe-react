const initialState = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loaded: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BESTSELLERS_LOAD":
      console.log(action.payload);
      return {
        ...state,
        bestsellers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
