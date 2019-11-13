import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp from "../SingUpPage"
import Login from "../Login"
import Feed from "../Feed"


export const routes = {
  login:"/login",
  signup:"/signup",
  feed: "/feed",
  post: "/post"

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>        
        <Route path={routes.login} component={Login}/> 
        <Route path={routes.signup} component={SignUp} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.feed} component={Feed} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
