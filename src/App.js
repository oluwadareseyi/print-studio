import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.scss";
import Landing from "./containers/Landing/Landing";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import DrawerToggle from "./components/SideDrawer/DrawerToggle/DrawerToggle";
import { AnimatePresence } from "framer-motion";

const App = ({ location }) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const closeModal = () => {
    setDrawer(false);
  };
  return (
    <div className="App">
      <DrawerToggle location={location} toggle={toggleDrawer} />
      <SideDrawer clicked={closeModal} hide={toggleDrawer} show={drawer} />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/create" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default withRouter(App);
