import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Plants from "./components/Plants";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/plants">Plants</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        {/*<PrivateRoute path="/plants" component={Plants} />*/}
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
