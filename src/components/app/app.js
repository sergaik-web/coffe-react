import React from "react";
import MainPage from "../pages/mainpage/mainpage";
import CoffeePage from "../pages/coffepage/coffepage";
import PleasurePage from "../pages/pleasurepage/pleasurepage";
import { Switch, Route, useParams } from "react-router-dom";
import "./app.sass";


function App() {
  console.log(useParams);
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
