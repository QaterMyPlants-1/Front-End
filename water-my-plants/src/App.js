import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Plants from "./components/Plants";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { NavBar } from './components/NavBar.style'
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar>
          <Link to="/plants">Plants</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={() => localStorage.removeItem("token")}>
            Logout
          </Link>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/plants" component={Plants} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
