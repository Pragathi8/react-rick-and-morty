import React from "react";
import Navigation from "../../components/Navigation/Navigation";

const layout = props => (
  <div className="container-fluid p-2 bg-light position-relative">
    <Navigation />
    <main>{props.children}</main>
  </div>
);

export default layout;
