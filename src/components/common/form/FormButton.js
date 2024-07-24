import React from "react";
import { Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

export default function FormButton({
  disabled,
  variant,
  type,
  btnText,
  onClick,
  otherProps,
  showLoader,
  size,
  dataTestId,
}) {
  return (
    <Button
      size={size}
      disabled={disabled}
      variant={variant}
      type={type}
      data-testid={dataTestId}
      onClick={onClick}
      {...otherProps}
    >
      {btnText}
      {showLoader && <Spinner className="ms-1" animation="border" size="sm" />}
    </Button>
  );
}

FormButton.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  type: PropTypes.string,
  btnText: PropTypes.string,
  otherProps: PropTypes.shape({}),
  showLoader: PropTypes.bool,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
};

FormButton.defaultProps = {
  size: "md",
  disabled: false,
  variant: "primary",
  type: "submit",
  btnText: "",
  otherProps: {},
  showLoader: false,
  dataTestId: "form-button",
  onClick: () => null,
};
