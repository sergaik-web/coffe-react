import React from "react";
import img from "../img/coffee_girl.jpg";
import AboutPanel from "../../about-panel";
import SearchPanel from "../../search-panel";
import CoffeeItems from "../coffee-item";
import Spinner from "../../spinner";
import { connect } from "react-redux";
import Hoc from "../../hoc";
import { coffee, requests } from "../../../actions/actions";

class CoffeeSection extends React.Component {
  componentDidMount() {
    this.props.requests();
    const { service } = this.props;
    service.getCoffee().then((res) => this.props.coffee(res));
  }

  renderCoffeeItems = (arr) => {
    const search = this.props.search;
    console.log(search);
    const filter = this.props.filter;
    return arr.map((item, index) => {
      if (
        item.country.includes(filter) &&
        item.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return (
          <CoffeeItems
            id={index}
            key={index}
            item={item}
            onItemSelected={(itemId, name) => {
              console.log(name);
              this.props.history.push(`/coffepage/${name}`);
            }}
          />
        );
      }
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

    if (this.props.loaded) {
      return (
        <section className="shop">
          <div className="container">
            <AboutPanel
              aboutText={aboutText}
              aboutTitle={aboutTitle}
              img={img}
            />
            <SearchPanel />
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">
                  <Spinner />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

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
  console.log(state);
  return {
    coffeeData: state.coffee,
    loaded: state.loaded,
    filter: state.filter,
    search: state.search,
  };
};

const mapDispatchToProps = { coffee, requests };

export default Hoc()(
  connect(mapStateToProps, mapDispatchToProps)(CoffeeSection)
);
