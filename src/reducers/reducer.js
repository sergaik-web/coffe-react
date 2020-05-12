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
      return {
        ...state,
        bestsellers: action.payload,
      };

    case "COFFEE_LOAD":
      return {
        ...state,
        coffee: action.payload,
      };

    case "GOODS_LOAD":
      return {
        ...state,
        goods: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
