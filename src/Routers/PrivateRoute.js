import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';
import { LayoutPage } from '../Pages/LayoutPage';

export const PrivateRoute = ({
    auth
}) => {
    return (
        auth ? (
            <LayoutPage>
                <Outlet />
            </LayoutPage>
        ) : <Navigate to ="/login" />)
}

PrivateRoute.propTypes = {
    auth: PropTypes.bool.isRequired
}