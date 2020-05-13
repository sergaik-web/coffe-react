import React from "react";
import MainPage from "../pages/mainpage/mainpage";
import CoffeePage from "../pages/coffepage/coffepage";
import PleasurePage from "../pages/pleasurepage/pleasurepage";
import { Switch, Route } from "react-router-dom";
import "./app.sass";


function App() {

  return (
    <>
      <Switch>
        <Route path={"/"} component={MainPage} exact />
        <Route path={"/coffepage"} exact component={CoffeePage} />
        <Route path={"/pleasurepage"} component={PleasurePage} />
      </Switch>
    </>
  );
}

export default App;
