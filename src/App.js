import React from 'react';
import { Provider } from 'react-redux';
import { AppRoute } from './Routers/AppRoute';
import { store } from './Store';
import './Styles/styles.css';

export const App = () => {
    return (
        <Provider store={ store }>
            <AppRoute />
        </Provider>
    );
}