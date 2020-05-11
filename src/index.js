import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import Services from "./services";
import Store from "./components/store";
import ShopContext from "./components/context";

const service = new Services();

ReactDOM.render(
  <Provider store={Store}>
    <ErrorBoundary>
      <ShopContext.Provider value={service}>
        <Router>
          <App />
        </Router>
      </ShopContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
