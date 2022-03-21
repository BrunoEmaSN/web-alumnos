import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({
    auth
}) => {
    return !auth ? <Outlet /> : <Navigate to ="/" />
}

PublicRoute.propTypes = {
    auth: PropTypes.bool.isRequired
}