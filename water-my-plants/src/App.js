import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Plants from './components/Plants';
import PrivateRoute from './components/PrivateRoute';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        {/*<PrivateRoute path="/plants" component={Plants} />*/}
        <Route path='/plants'>
          <Plants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
