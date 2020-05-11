const best = (arr) => {
  return {
    type: "BESTSELLERS_LOAD",
    payload: arr,
  };
};

export { best };
