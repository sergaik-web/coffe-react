import React from "react";

class CoffeeItems extends React.Component {
  static defaultProps = {
    onItemSelected: () => {},
  };

  render() {
    const id = this.props.id;
    const { name, country, url, price, description } = this.props.item;
    return (
      <div
        key={id}
        className="shop__item"
        onClick={() => this.props.onItemSelected(id, name)}
      >
        <img src={url} alt={name} />
        <div className="shop__item-title">{name}</div>
        <div className="shop__item-country">{country}</div>
        <div className="shop__item-price">{price}</div>
      </div>
    );
  }
}

export default CoffeeItems;
