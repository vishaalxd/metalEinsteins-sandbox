import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../history";
import LandingPage from "../Epics/Landing/LandingPage";

const Routes = props => (
  <>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  </>
);

export default Routes;