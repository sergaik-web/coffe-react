import React from "react";
import { connect } from "react-redux";
import { setFilter, search } from "../../actions/actions";

class SearchPanel extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form action="#" className="shop__search">
            <label className="shop__search-label" htmlFor="filter">
              Looking for
            </label>
            <input
              onChange={(input) => {
                this.props.search(input.target.value);
              }}
              id="filter"
              type="text"
              placeholder="start typing here..."
              className="shop__search-input"
            />
          </form>
        </div>
        <div className="col-lg-6">
          <div className="shop__filter">
            <div className="shop__filter-label">Or filter</div>
            <div className="shop__filter-group">
              <button
                onClick={() => this.props.setFilter("Brazil")}
                className="shop__filter-btn"
              >
                Brazil
              </button>
              <button
                onClick={() => this.props.setFilter("Kenya")}
                className="shop__filter-btn"
              >
                Kenya
              </button>
              <button
                onClick={() => this.props.setFilter("Columbia")}
                className="shop__filter-btn"
              >
                Columbia
              </button>
              <button
                onClick={() => this.props.setFilter("")}
                className="shop__filter-btn"
              >
                All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { setFilter, search };

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
