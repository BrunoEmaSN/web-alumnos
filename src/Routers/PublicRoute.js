import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';
import { AppBarComponent } from '../Components/AppBar/AppBar';

export const PublicRoute = ({
    auth
}) => {
    return (
        !auth ? (
            <Outlet />
        ) : (
            <>
                <AppBarComponent />
                <Navigate to ="/" />
            </>
        )
    )
}

PublicRoute.propTypes = {
    auth: PropTypes.bool.isRequired
}