import React from "react";

const CoffeeItems = ({ item }) => {
  const { name, country, url, price, description } = item;
  return (
    <div className="shop__item">
      <img src={url} alt={name} />
      <div className="shop__item-title">{name}</div>
      <div className="shop__item-country">{country}</div>
      <div className="shop__item-price">{price}</div>
    </div>
  );
};

export default CoffeeItems;
