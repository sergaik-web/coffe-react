import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import AboutPanel from "../../about-panel";
import CoffeeItems from "../coffee-item";
import { best, requests, error } from "../../../actions/actions";
import { connect } from "react-redux";
import Hoc from "../../hoc";

import "./mainpage.sass";
import Spinner from "../../spinner";
import Error from "../../error";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.requests();
    const { service } = this.props;
    service.getBestsellers().then((res) => {
      this.props.best(res);
    });
  }

  componentDidCatch(error, errorInfo) {
    this.props.error();
    console.log(error, errorInfo);
  }

  renderBestsItems(arr) {
    return arr.map((item, index) => {
      return (
        <CoffeeItems
          id={index}
          key={index}
          item={item}
          onItemSelected={(itemId, name) => {
            console.log(name);
            this.props.history.push(`/coffepage/${name}`);
          }}
        />
      );
    });
  }

  render() {
    if (this.props.loaded) {
      return (
        <section className="shop">
          <Spinner />
        </section>
      );
    }

    if (this.props.errored) {
      return <Error />;
    }

    const bestsellersItem = this.renderBestsItems(this.props.bestsellersData);
    const aboutTitle = "About Us";
    const aboutText = (
      <div className="about__text">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. Afraid at highly months do things on at. Situation
        recommend objection do intention so questions. As greatly removed
        calling pleased improve an. Last ask him cold feel met spot shy want.
        Children me laughing we prospect answered followed. At it went is song
        that held help face.
        <br />
        <br />
        Now residence dashwoods she excellent you. Shade being under his bed
        her, Much read on as draw. Blessing for ignorant exercise any yourself
        unpacked. Pleasant horrible but confined day end marriage. Eagerness
        furniture set preserved far recommend. Did even but nor are most gave
        hope. Secure active living depend son repair day ladies now.
      </div>
    );

    return (
      <>
        <Header
          mainClassName={"preview"}
          mainTitle={"Everything You Love About Coffee"}
        />

        <section className="about">
          <div className="container">
            <AboutPanel aboutText={aboutText} aboutTitle={aboutTitle} />
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
    loaded: state.loaded,
    errored: state.error,
  };
};

const mapDispatchToProps = { best, requests, error };

export default Hoc()(connect(mapStateToProps, mapDispatchToProps)(MainPage));
