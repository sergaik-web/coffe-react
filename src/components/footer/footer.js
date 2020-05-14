import React from "react";
import { Link } from "react-router-dom";
import logoblack from "../pages/logo/Logo_black.svg";
import beanslogodarck from "../pages/logo/Beans_logo_dark.svg";
import "./footer.sass";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <ul className="footer">
                <li className="footer__item">
                  <Link to={"/"}>
                    <img src={logoblack} alt="logo" />
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to={"/coffepage"}>Our coffee</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/pleasurepage"}>For your pleasure</Link>
                </li>
              </ul>
            </div>
          </div>
          <img className="beanslogo" src={beanslogodarck} alt="Beans logo" />
        </div>
      </footer>
    );
  }
}
