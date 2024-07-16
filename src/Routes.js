import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import routePaths from "./constants/routePaths";
import AuthenticatedRoute from "./components/common/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/common/UnauthenticatedRoute";

const NotFound = lazy(() => import("./containers/NotFound"));
const Home = lazy(() => import("./containers/Home"));
const Login = lazy(() => import("./containers/Login"));
const Signup = lazy(() => import("./containers/Signup"));
const ForgotPassword = lazy(() => import("./containers/ForgotPassword"));

function Routes(childProps) {
  return (
    <>
      <Switch>
        <UnauthenticatedRoute
          path={routePaths.LOGIN}
          exact
          component={Login}
          props={childProps}
        />

        <UnauthenticatedRoute
          path={routePaths.SIGNUP}
          exact
          component={Signup}
          props={childProps}
        />

        <UnauthenticatedRoute
          path={routePaths.FORGOT_PASSWORD}
          exact
          component={ForgotPassword}
          props={childProps}
        />

        <AuthenticatedRoute
          path={routePaths.LANDING}
          exact
          component={Home}
          props={childProps}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  childProps: PropTypes.shape({}),
};

Routes.defaultProps = {
  childProps: {},
};

export default Routes;
