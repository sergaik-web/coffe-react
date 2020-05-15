const initialState = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loaded: true,
  error: false,
  filter: "",
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTS":
      return {
        ...state,
        loaded: true,
      };

    case "ERROR":
      return {
        ...state,
        loaded: false,
        error: true,
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

    case "SET_FILTER":
      return {
        ...state,
        filter: action.value,
      };

    case "SEARCH":
      console.log(action.value);
      return {
        ...state,
        search: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
