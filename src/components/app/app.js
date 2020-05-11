import React from "react";
import MainPage from "../pages/mainpage";
import CoffePage from "../pages/coffepage";
import ItemPage from "../pages/itempage";
import { Switch, Route } from "react-router-dom";
import "./app.sass";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/coffepage" component={CoffePage} />
        <Route path="/itempage" component={ItemPage} />
      </Switch>
    </>
  );
}

export default App;
