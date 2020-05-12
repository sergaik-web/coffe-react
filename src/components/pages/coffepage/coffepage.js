import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import "./coffeepage.sass";
import coffeGirl from "../img/coffee_girl.jpg";
import beanslogodarck from "../logo/Beans_logo_dark.svg";
import { connect } from "react-redux";
import { coffee } from "../../../actions/actions";
import Hoc from "../../hoc";
import CoffeeItems from "../coffee-item";

class CoffePage extends React.Component {
  componentDidMount() {
    const { service } = this.props;
    service.getCoffee().then((res) => this.props.coffee(res));
  }

  renderCoffeeItems(arr) {
    return arr.map((item, index) => {
      return <CoffeeItems key={index} item={item} />;
    });
  }

  render() {
    const coffeeItems = this.renderCoffeeItems(this.props.coffeeData);

    return (
      <>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src={coffeGirl} alt="girl" />
              </div>
              <div className="col-lg-4">
                <div className="title">About our beans</div>
                <img
                  className="beanslogo"
                  src={beanslogodarck}
                  alt="Beans logo"
                />
                <div className="shop__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible.
                  <br />
                  <br />
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention
                  <br />
                  so questions. <br />
                  As greatly removed calling pleased improve an. Last ask him
                  cold feel
                  <br />
                  met spot shy want. Children me laughing we prospect answered
                  followed. At it went
                  <br />
                  is song that held help face.
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="row">
              <div className="col-lg-4 offset-2">
                <form action="#" className="shop__search">
                  <label className="shop__search-label" htmlFor="filter">
                    Looking for
                  </label>
                  <input
                    id="filter"
                    type="text"
                    placeholder="start typing here..."
                    className="shop__search-input"
                  />
                </form>
              </div>
              <div className="col-lg-4">
                <div className="shop__filter">
                  <div className="shop__filter-label">Or filter</div>
                  <div className="shop__filter-group">
                    <button className="shop__filter-btn">Brazil</button>
                    <button className="shop__filter-btn">Kenya</button>
                    <button className="shop__filter-btn">Columbia</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">{coffeeItems}</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeData: state.coffee,
  };
};
const mapDispatchToProps = { coffee };

export default Hoc()(connect(mapStateToProps, mapDispatchToProps)(CoffePage));
