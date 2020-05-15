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

const requests = () => {
  return {
    type: "REQUESTS",
  };
};

const error = () => {
  return {
    type: "ERROR",
  };
};

export { best, coffee, goods, requests, error };
