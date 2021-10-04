import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/fashion-shop" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routes;
