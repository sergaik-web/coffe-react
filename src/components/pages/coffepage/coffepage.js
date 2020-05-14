import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import CoffeeSection from "../coffee-section";
import { connect } from "react-redux";
import { coffee } from "../../../actions/actions";
import Hoc from "../../hoc";
import { Switch, Route } from "react-router-dom";
import ItemPage from "../itempage/itempage";

import "./coffeepage.sass";

class CoffeePage extends React.Component {
  componentDidMount() {
    const { service } = this.props;
    service.getCoffee().then((res) => this.props.coffee(res));
  }

  render() {
    return (
      <>
        <Header mainClassName={"banner"} mainTitle={"Our Coffee"} />
        <Switch>
          <Route path={"/coffepage/"} exact component={CoffeeSection} />
          <Route
            path={"/coffepage/:id"}
            render={({ match }) => {
              const { id } = match.params;
              return <ItemPage itemId={id} />;
            }}
          />
        </Switch>
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
