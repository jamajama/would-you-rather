import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location.pathname }
          }}
        />
      )
    }
  />
);

export default AuthedRoute;