import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/logo/Logo.svg";
import "./header.sass";
import img from "../pages/img/coffee_girl.jpg";
import beanslogo from "../pages/logo/Beans_logo.svg";

export default class Header extends React.Component {
  render() {
    const { mainClassName, mainTitle } = this.props;
    const title = renderTitle(mainTitle);

    return (
      <div className={mainClassName}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
            </div>
          </div>
          {title}
        </div>
      </div>
    );
  }
}

const renderTitle = (mainTitle) => {
  if (mainTitle !== "Everything You Love About Coffee") {
    return <h1 className="title-big">{mainTitle}</h1>;
  }
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h1 className="title-big">{mainTitle}</h1>
        <img className="beanslogo" src={beanslogo} alt="Beans logo" />
        <div className="preview__subtitle">
          We makes every day full of energy and taste
        </div>
        <div className="preview__subtitle">Want to try our beans?</div>
        <Link to={"/coffepage"} className="preview__btn">
          More
        </Link>
      </div>
    </div>
  );
};
