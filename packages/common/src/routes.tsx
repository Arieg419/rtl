import React from "react";
import { Learn } from "./modules/Learn";
import { Home } from "./modules/Home";
import { Category } from "./modules/Category";
import { Route, Router, Switch } from "./router";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/learn/:category" component={Category} />
        <Route exact path="/learn/:category/:handout" component={Learn} />
      </Switch>
    </Router>
  );
};
