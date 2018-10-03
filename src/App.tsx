import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";
import Error from "./components/layout/error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Layout} />
        <Route path="/post/:id" exact={false} component={Layout} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
