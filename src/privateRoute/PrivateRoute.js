import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "./../coustomHook/useAuth/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = UseAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loging",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
