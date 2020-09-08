import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./styles/app.scss";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import DrawerToggle from "./components/SideDrawer/DrawerToggle/DrawerToggle";
import { AnimatePresence } from "framer-motion";
import Commerce from "./pages/Commerce";
import ProductDetail from "./pages/ProductDetail";
import ScrollTop from "./components/ScrollTop";
import Checkout from "./pages/Checkout";

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
      <ScrollTop />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Landing} />
              <Route path="/create" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <Route path="/shop" exact component={Commerce} />
              <Route path="/product/:id" exact component={ProductDetail} />
              <Route path="/checkout" exact component={Checkout} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </>
  );
};

export default withRouter(App);
