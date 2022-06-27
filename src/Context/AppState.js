import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './BuildContext';
import { login } from '../Services/restCallAuth';


export const AppState = ({ children }) => {
    const initialState = {
        token: localStorage.getItem('token') || ''
    };

    const [ state, setState ] = useState( initialState );

    const handleToken = ( newToken ) => {
        setState({
            token: newToken
        });
        localStorage.setItem('token', newToken);
    }

    const handleLogout = () => {
        handleToken( '' );
    }
    
    return (
        <AppContext.Provider value ={{
            token : state.token,
            handleToken,
            login,
            handleLogout
        }}>
            { children }
        </AppContext.Provider>
    )
}

AppState.propTypes = {
    children: PropTypes.element
}