import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`, "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function UnauthenticatedRoute({ component: C, props: cProps, ...rest }) {
  const redirect = querystring("redirect");
  return (
    <Route
      {...rest}
      render={(props) =>
        !cProps.isAuthenticated ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect
            to={redirect === "" || redirect === null ? "/" : redirect}
          />
        )
      }
    />
  );
}

UnauthenticatedRoute.propTypes = {
  component: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  props: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }),
};
UnauthenticatedRoute.defaultProps = {
  props: {
    isAuthenticated: false,
  },
};

export default UnauthenticatedRoute;
