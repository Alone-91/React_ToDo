import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormLabel({ labelText, styleClasses, otherProps }) {
  return (
    <Form.Label className={styleClasses} {...otherProps}>
      {labelText}
    </Form.Label>
  );
}

FormLabel.propTypes = {
  styleClasses: PropTypes.string,
  labelText: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
  ]),
  otherProps: PropTypes.shape({}),
};

FormLabel.defaultProps = {
  styleClasses: 'form-label-bold',
  labelText: '',
  otherProps: {},
};
