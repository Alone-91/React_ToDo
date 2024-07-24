import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormInput({
  size, type, placeholder,
  name, onChange, value, isInvalid, dataTestId, otherProps,
}) {
  return (
    <Form.Control
      size={size}
      type={type}
      name={name}
      placeholder={placeholder}
      isInvalid={isInvalid}
      onChange={onChange}
      value={value}
      data-testid={dataTestId}
      {...otherProps}
    />
  );
}

FormInput.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  isInvalid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  otherProps: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  dataTestId: PropTypes.string,
};

FormInput.defaultProps = {
  size: 'lg',
  type: 'text',
  isInvalid: false,
  placeholder: '',
  otherProps: {},
  value: '',
  dataTestId: 'form-input',
};
