const best = (arr) => {
  return {
    type: "BESTSELLERS_LOAD",
    payload: arr,
  };
};

const coffee = (arr) => {
  return {
    type: "COFFEE_LOAD",
    payload: arr,
  };
};

const goods = (arr) => {
  return {
    type: "GOODS_LOAD",
    payload: arr,
  };
};

export { best, coffee, goods };
