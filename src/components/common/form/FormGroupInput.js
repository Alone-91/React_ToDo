import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
// import { Eye, EyeSlash } from 'react-bootstrap-icons';

import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormFeedback from "./FormFeedback";
import "../../../assets/styles/FormGroup.scss";

// For email, password & text input
export default function FormGroupInput({
  groupProps,
  labelProps,
  inputProps,
  feedBackProps,
}) {
  const { labelText, className } = labelProps;
  const {
    type,
    value,
    onChange,
    placeholder,
    isInvalid,
    otherProps,
    showLoader,
  } = inputProps;
  const { type: feedbackType, message } = feedBackProps;
  const [passwordCtrlType, setPasswordCtrlType] = useState(
    type === "password" ? "password" : type
  );
  const togglePasswordType = () => {
    const ptype = passwordCtrlType === "password" ? "text" : "password";
    setPasswordCtrlType(ptype);
  };
  return (
    <Form.Group {...groupProps}>
      <FormLabel labelText={labelText} styleClasses={className} />
      <FormInput
        type={passwordCtrlType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
        otherProps={
          type === "password"
            ? { ...otherProps, className: "ccw-password" }
            : { ...otherProps }
        }
      />
      {type === "password" && (
        <div className="show-hide-pass">
          <span
            className="toggle-password"
            data-testid="toggle-password"
            onClick={() => togglePasswordType()}
          >
            {passwordCtrlType === "password"}
          </span>
        </div>
      )}
      {showLoader && (
        <Spinner className="ms-1 spinner" animation="border" size="sm" />
      )}
      <FormFeedback type={feedbackType} message={message} />
    </Form.Group>
  );
}

FormGroupInput.propTypes = {
  groupProps: PropTypes.shape({
    controlId: PropTypes.string,
  }),
  labelProps: PropTypes.shape({
    labelText: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
  }),
  inputProps: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    isInvalid: PropTypes.bool,
    otherProps: PropTypes.shape({}),
    showLoader: PropTypes.bool,
  }),
  feedBackProps: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
};

FormGroupInput.defaultProps = {
  groupProps: {},
  labelProps: {
    labelText: "",
    disabled: false,
    className: "",
  },
  inputProps: {
    value: "",
    placeholder: "",
    type: "text",
    isInvalid: false,
    otherProps: {},
    showLoader: true,
  },
  feedBackProps: {
    type: "",
    message: "",
  },
};
