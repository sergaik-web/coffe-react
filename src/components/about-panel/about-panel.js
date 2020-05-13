import React from "react";
import beanslogodarck from "../pages/logo/Beans_logo_dark.svg";
import img from "../pages/img/coffee_girl.jpg";

const AboutPanel = (aboutText, aboutTitle, img = "") => {
  if (img) {
    return (
      <div className="row">
        <div className="col-lg-4 offset-2">
          <img className="shop__girl" src={img} alt="girl" />
        </div>
        <div className="col-lg-4">
          <div className="title">{aboutTitle}</div>
          <img className="beanslogo" src={beanslogodarck} alt="Beans logo" />
          {aboutText}
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="title">{aboutTitle}</div>
        <img className="beanslogo" src={beanslogodarck} alt="Beans logo" />
        {aboutText}
      </div>
    </div>
  );
};

export default AboutPanel;
