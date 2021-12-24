import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProfileDetails from "./pages/profile/profile_details";
import Login from "./pages/log_reg/login";
import Register from "./pages/log_reg/register";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile/profile-details">
          <ProfileDetails />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
