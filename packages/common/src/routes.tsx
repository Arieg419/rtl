import React from "react";
import { Home } from "./modules/Home";
import { IllnessScript } from "./modules/IllnessScipt";
import { Schema } from "./modules/Schema";
import { Tutorials } from "./modules/Tutorials";
import { Route, Router, Switch } from "./router/index";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route exact path="schema" component={Schema} />
      </Switch>
    </Router>
  );
};
