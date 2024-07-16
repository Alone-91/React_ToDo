import * as React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <div data-testid="main-wrapper" className="mainWrapper">
      <div className="rightPanel">
        <Container fluid>
          {children}
        </Container>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
