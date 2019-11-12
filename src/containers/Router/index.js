import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp from "../SingUpPage"

const routes = {
  login:"/login",
  signup:"/signup",

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>        
        <Route path={routes.login} component={Login}/> 
        <Route path={routes.signup} component={SignUp} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
