import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';
import { AppBarComponent } from '../Components/AppBar/AppBar';

export const PrivateRoute = ({
    auth
}) => {
    return (
        auth ? (
            <>
                <AppBarComponent />
                <Outlet />
            </>
        ) : <Navigate to ="/login" />)
}

PrivateRoute.propTypes = {
    auth: PropTypes.bool.isRequired
}