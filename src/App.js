import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./styles/app.scss";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
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
    <>
      <DrawerToggle location={location} toggle={toggleDrawer} />
      <SideDrawer clicked={closeModal} hide={toggleDrawer} show={drawer} />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Landing} />
              <Route path="/create" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </>
  );
};

export default withRouter(App);
