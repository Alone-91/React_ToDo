import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormFeedback({ type, message }) {
  if (!['valid', 'invalid'].includes(type)) {
    return null;
  }
  return (
    <Form.Control.Feedback type={type}>
      {message}
    </Form.Control.Feedback>
  );
}

FormFeedback.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

FormFeedback.defaultProps = {
  type: 'invalid',
  message: '',
};
