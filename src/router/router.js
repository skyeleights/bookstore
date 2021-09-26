import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import compo from "../components/compo";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={compo} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
