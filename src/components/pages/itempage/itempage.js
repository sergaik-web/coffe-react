import React from "react";
import { connect } from "react-redux";
import { coffee, requests, error } from "../../../actions/actions";
import Hoc from "../../hoc";
import Spinner from "../../spinner";
import Error from "../../error";
import beanslogodarck from "../logo/Beans_logo_dark.svg";

class ItemPage extends React.Component {
  componentDidMount() {
    this.props.requests();
    const { service } = this.props;
    service.getCoffee().then((res) => this.props.coffee(res));
  }

  componentDidCatch(error, errorInfo) {
    this.props.error();
    console.log(error, errorInfo);
  }

  render() {
    const item = this.props.coffeeData.find(
      (item) => item.name === this.props.itemId
    );

    if (this.props.loaded || !item) {
      return (
        <section className="shop">
          <Spinner />
        </section>
      );
    }

    if (this.props.errored) {
      return <Error />;
    }

    const { name, country, url, price, description } = item;
    return (
      <>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-1">
                <img className="shop__img" src={url} alt="coffee_item" />
              </div>
              <div className="col-lg-4">
                <div className="title">{name}</div>
                <img
                  className="beanslogo"
                  src={beanslogodarck}
                  alt="Beans logo"
                />
                <div className="shop__point">
                  <span>Country:</span>
                  {country}
                </div>
                <div className="shop__point">
                  <span>Description:</span>
                  {description}
                </div>
                <div className="shop__point">
                  <span>Price:</span>
                  <span className="shop__point-price">{price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeData: state.coffee,
    loaded: state.loaded,
    errored: state.error,
  };
};

const mapDispatchToProps = { coffee, requests, error };

export default Hoc()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));
