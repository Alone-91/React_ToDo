import React from 'react';
import Routes from '../Routes';
import { withRouter } from 'react-router-dom';

function Root() {
    return (
        <Routes />
    );
}

export default withRouter(Root);