import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import CoffeeSection from "../coffee-section";
import { connect } from "react-redux";
import { coffee } from "../../../actions/actions";
import Hoc from "../../hoc";

import "./coffeepage.sass";

class CoffeePage extends React.Component {
  componentDidMount() {
    const { service } = this.props;
    service.getCoffee().then((res) => this.props.coffee(res));
  }

  render() {
    return (
      <>
        <Header mainClassName={"banner"} mainTitle={'Our Coffee'}/>
        <CoffeeSection coffeeData={this.props.coffeeData}/>
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

export default Hoc()(connect(mapStateToProps, mapDispatchToProps)(CoffeePage));
