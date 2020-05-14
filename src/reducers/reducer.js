const initialState = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loaded: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTS":
      return {
        ...state,
        loaded: true,
      };

    case "BESTSELLERS_LOAD":
      return {
        ...state,
        loaded: false,
        bestsellers: action.payload,
      };

    case "COFFEE_LOAD":
      return {
        ...state,
        loaded: false,
        coffee: action.payload,
      };

    case "GOODS_LOAD":
      return {
        ...state,
        loaded: false,
        goods: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
