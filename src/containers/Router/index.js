import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp from "../SingUpPage"
import Login from "../Login"
import Feed from "../Feed"
import PostDetails from "../PostDetails"


export const routes = {
  login:"/login",
  signup:"/signup",
  feed: "/feed",
  postDetails: "/post",

};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>  
          <Route path={routes.login} component={Login}/> 
          <Route path={routes.feed} component={Feed} />
          <Route path={routes.signup} component={SignUp} />
          <Route path={routes.post} component={PostDetails} />
        </Switch>
      </ConnectedRouter>
    );
  
}

export default Router;
