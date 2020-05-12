import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import "./pleasurepage.sass";
import pleasure from "../img/pleasure_item.jpg";
import beanslogodarck from "../logo/Beans_logo_dark.svg";
import { connect } from "react-redux";
import { goods } from "../../../actions/actions";
import Hoc from "../../hoc";
import CoffeeItems from "../coffee-item";

class PleasurePage extends React.Component {
  componentDidMount() {
    const { service } = this.props;
    service.getGoods().then((res) => this.props.goods(res));
  }

  renderCoffeeItems(arr) {
    return arr.map((item, index) => {
      return <CoffeeItems key={index} item={item} />;
    });
  }

  render() {
    const goodsItems = this.renderCoffeeItems(this.props.goodsItem);

    return (
      <>
        <div className="banner-pleasure">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <h1 className="title-big">For your pleasure</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src={pleasure} alt="girl" />
              </div>
              <div className="col-lg-4">
                <div className="title">About our goods</div>
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
              <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">{goodsItems}</div>
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
    goodsItem: state.goods,
  };
};
const mapDispatchToProps = { goods };

export default Hoc()(
  connect(mapStateToProps, mapDispatchToProps)(PleasurePage)
);
