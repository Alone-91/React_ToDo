import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';

function AuthenticatedRoute({ component: C, props: cProps, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (<Layout><C {...props} {...cProps} /></Layout>)}
        />
    );
}

AuthenticatedRoute.propTypes = {
    component: PropTypes.any.isRequired,
};

export default AuthenticatedRoute;
