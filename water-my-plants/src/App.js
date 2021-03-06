import React from "react";

import { connect } from "react-redux";
import { logoutUser } from "./actions/actions";


import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Plants from "./components/Plants";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { NavBar, HeaderTitleTop, HeaderTitleBottom, HeaderTitleWrapper } from './components/NavBar.style'
import "./App.css";

function App(props) {
  return (
  <Router>
    <div className="App">
      <NavBar>
        <HeaderTitleWrapper>
          <HeaderTitleTop>WATER MY</HeaderTitleTop>
          <HeaderTitleBottom>PLANTS</HeaderTitleBottom>
        </HeaderTitleWrapper>
        
        {localStorage.getItem("token") && <Link to="/plants">Plants</Link>}
        {localStorage.getItem("token") && <Link to="/profile">Profile</Link>}
        {localStorage.getItem("token") && (
          <Link to="/" onClick={async () => {await props.logoutUser();}}>
            Logout
          </Link>
        )}
        {!localStorage.getItem("token") && <Link to="/login">Login</Link>}
      </NavBar>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/plants" component={Plants} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { logoutUser })(App);
