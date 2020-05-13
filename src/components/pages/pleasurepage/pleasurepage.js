import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import CoffeeItems from "../coffee-item";
import AboutPanel from "../../about-panel";
import { connect } from "react-redux";
import { goods } from "../../../actions/actions";
import Hoc from "../../hoc";
import img from "../img/pleasure_item.jpg";

import "./pleasurepage.sass";

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
    const aboutTitle = "About our pleasure";
    const aboutText = (
      <div className="shop__text">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible.
        <br />
        <br />
        Afraid at highly months do things on at. Situation recommend objection
        do intention
        <br />
        so questions. <br />
        As greatly removed calling pleased improve an. Last ask him cold feel
        <br />
        met spot shy want. Children me laughing we prospect answered followed.
        At it went
        <br />
        is song that held help face.
      </div>
    );

    return (
      <>
        <Header
          mainClassName={"banner-pleasure"}
          mainTitle={"For your pleasure"}
        />
        <section className="shop">
          <div className="container">
            {AboutPanel(aboutText, aboutTitle, img)}
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
