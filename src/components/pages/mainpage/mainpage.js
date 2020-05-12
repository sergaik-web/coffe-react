import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Hoc from "../../hoc";
import { best } from "../../../actions/actions";
import { connect } from "react-redux";
import CoffeeItems from "../coffee-item";
import "./mainpage.sass";
import beanslogo from "../logo/Beans_logo.svg";
import beanslogodarck from "../logo/Beans_logo_dark.svg";

class MainPage extends React.Component {
  componentDidMount() {
    const { service } = this.props;
    service.getBestsellers().then((res) => {
      this.props.best(res);
    });
  }

  renderBestsItems(arr) {
    console.log(arr);
    return arr.map((item, index) => {
      return <CoffeeItems key={index} item={item} />;
    });
  }

  render() {
    const bestsellersItem = this.renderBestsItems(this.props.bestsellersData);
    return (
      <>
        <div className="preview">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h1 className="title-big">Everything You Love About Coffee</h1>
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
          </div>
        </div>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="title">About Us</div>
                <img
                  className="beanslogo"
                  src={beanslogodarck}
                  alt="Beans logo"
                />
                <div className="about__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible. Afraid at highly months do things on at.
                  Situation recommend objection do intention so questions. As
                  greatly removed calling pleased improve an. Last ask him cold
                  feel met spot shy want. Children me laughing we prospect
                  answered followed. At it went is song that held help face.
                  <br />
                  <br />
                  Now residence dashwoods she excellent you. Shade being under
                  his bed her, Much read on as draw. Blessing for ignorant
                  exercise any yourself unpacked. Pleasant horrible but confined
                  day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="best">
          <div className="container">
            <div className="title">Our best</div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">{bestsellersItem}</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bestsellersData: state.bestsellers,
  };
};

const mapDispatchToProps = { best };

export default Hoc()(connect(mapStateToProps, mapDispatchToProps)(MainPage));
