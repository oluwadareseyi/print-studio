import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./containers/Landing/Landing";
import SignUp from "./containers/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/create" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
