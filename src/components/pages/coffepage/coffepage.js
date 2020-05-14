import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import CoffeeSection from "../coffee-section";
import { Switch, Route } from "react-router-dom";
import ItemPage from "../itempage/itempage";

import "./coffeepage.sass";

class CoffeePage extends React.Component {
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

export default CoffeePage;
