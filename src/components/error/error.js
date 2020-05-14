import React from "react";
import img from "./err.jpg";

export default class Error extends React.Component {
  render() {
    return <img src={img} alt={"err"} />;
  }
}
