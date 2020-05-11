import React from "react";
import Header from "../header";
import Footer from "../footer";
import coffeGirl from "./img/coffee_girl.jpg";
import beanslogodarck from "./logo/Beans_logo_dark.svg";

export default class ItemPage extends React.Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-1">
                <img className="shop__girl" src={coffeGirl} alt="coffee_item" />
              </div>
              <div className="col-lg-4">
                <div className="title">About it</div>
                <img
                  className="beanslogo"
                  src={beanslogodarck}
                  alt="Beans logo"
                />
                <div className="shop__point">
                  <span>Country:</span>
                  Brazil
                </div>
                <div className="shop__point">
                  <span>Description:</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="shop__point">
                  <span>Price:</span>
                  <span className="shop__point-price">16.99$</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
