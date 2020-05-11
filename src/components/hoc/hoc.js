import React from "react";
import ShopContext from "../context";

const Hoc = () => (View) => {
  return (props) => {
    return (
      <ShopContext.Consumer>
        {(service) => <View {...props} service={service} />}
      </ShopContext.Consumer>
    );
  };
};

export default Hoc;
