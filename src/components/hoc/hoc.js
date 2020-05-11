import React from "react";
import ShopContext from "../context";

const Hoc = () => (View) => {
  return (props) => {
    return (
      <ShopContext.Consumer>
        {(Service) => {
          return <View {...props} service={Service} />;
        }}
      </ShopContext.Consumer>
    );
  };
};

export default Hoc;
