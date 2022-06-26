import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './BuildContext';
import { login } from '../Services/restCallAuth';


const AppState = ({ children }) => {
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
    
    return (
        <AppContext.Provider value ={{
            token : state.token,
            handleToken: handleToken,
            login: login
        }}>
            { children }
        </AppContext.Provider>
    )
}
export default AppState;

AppState.propTypes = {
    children: PropTypes.element
}