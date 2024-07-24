/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function ForgetPasswordLink({ clickHandler }) {
  return (
    <a
      data-testid="forgot-password"
      onClick={clickHandler}
      className="forget-password"
    >
      Forget Password?
    </a>
  );
}

ForgetPasswordLink.propTypes = {
  clickHandler: PropTypes.func,
};
ForgetPasswordLink.defaultProps = {
  clickHandler: () => {},
};

export { ForgetPasswordLink };
