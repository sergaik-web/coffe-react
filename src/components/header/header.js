import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/logo/Logo.svg";
import "./header.sass";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ul className="header">
          <li className="header__item">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="header__item">
            <Link to={"/coffepage"}>Our coffee</Link>
          </li>
          <li className="header__item">
            <Link to={"/pleasurepage"}>For your pleasure</Link>
          </li>
        </ul>
      </header>
    );
  }
}
