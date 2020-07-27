import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { Switch, Route } from "react-router-dom";

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
        <Route path="/plants">
          <h1>Plant page</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
