import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import CoffeeItems from "../coffee-item";
import AboutPanel from "../../about-panel";
import { connect } from "react-redux";
import { goods, requests, error } from "../../../actions/actions";
import Hoc from "../../hoc";
import img from "../img/pleasure_item.jpg";

import "./pleasurepage.sass";
import Spinner from "../../spinner";
import Error from "../../error";

class PleasurePage extends React.Component {
  componentDidMount() {
    this.props.requests();
    const { service } = this.props;
    service.getGoods().then((res) => this.props.goods(res));
  }

  componentDidCatch(error, errorInfo) {
    this.props.error();
    console.log(error, errorInfo);
  }

  renderCoffeeItems(arr) {
    return arr.map((item, index) => {
      return <CoffeeItems key={index} item={item} />;
    });
  }

  render() {
    if (this.props.loaded) {
      return (
        <section className="shop">
          <Spinner />
        </section>
      );
    }

    if (this.props.errored) {
      return <Error />;
    }

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
            <AboutPanel
              aboutText={aboutText}
              aboutTitle={aboutTitle}
              img={img}
            />
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
    loaded: state.loaded,
    errored: state.error,
  };
};

const mapDispatchToProps = { goods, requests, error };

export default Hoc()(
  connect(mapStateToProps, mapDispatchToProps)(PleasurePage)
);
