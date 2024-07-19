import React from "react";
import {Route, Navigate as Redirect} from "react-router-dom";

function AuthenticatedRoute({
  routeComponent: RouteComponent,
  isLoggedIn,
  location,
  redirectPath = "/login",
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: {from: location},
            }}
          />
        )
      }
    />
  );
}

export default AuthenticatedRoute;
