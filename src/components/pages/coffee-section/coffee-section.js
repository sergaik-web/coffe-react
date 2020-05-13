import React from "react";
import img from "../img/coffee_girl.jpg";
import AboutPanel from "../../about-panel";
import SearchPanel from "../../search-panel";
import CoffeeItems from "../coffee-item";
import { connect } from "react-redux";

class CoffeeSection extends React.Component {
  renderCoffeeItems = (arr) => {
    return arr.map((item, index) => {
      return <CoffeeItems key={index} item={item} />;
    });
  };

  render() {
    const coffeeItems = this.renderCoffeeItems(this.props.coffeeData);
    const aboutTitle = "About our beans";
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
      <section className="shop">
        <div className="container">
          <AboutPanel aboutText={aboutText} aboutTitle={aboutTitle} img={img} />
          <SearchPanel />
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="shop__wrapper">{coffeeItems}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeData: state.coffee,
  };
};

export default connect(mapStateToProps)(CoffeeSection);
